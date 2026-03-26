{-# LANGUAGE OverloadedStrings #-}

import Network.Socket
import Network.Socket (socketToHandle)
import qualified Data.ByteString.Char8 as B
import qualified Data.ByteString.Lazy.Char8 as BL
import Data.Aeson.Types (parseMaybe)
import Data.Aeson hiding (Error)
import Foreign.C.Types
import Control.Monad (forever, when)
import System.Directory (doesFileExist, removeFile)
import System.IO (Handle, IOMode(ReadWriteMode), hClose)
import MyApi

-- | Generischer Request
data Request = Request
  { jsonrpc :: String
  , reqId   :: Value
  , method  :: String
  , params  :: Value
  } deriving Show

instance FromJSON Request where
  parseJSON = withObject "Request" $ \o ->
    Request <$> o .: "jsonrpc"
            <*> o .: "id"
            <*> o .: "method"
            <*> o .: "params"

-- | Antwort
data Response
  = Result Value Value
  | Error Value Int String


instance ToJSON Response where
  toJSON (Result id r) = 
    object ["jsonrpc" .= ("2.0" :: String), "id" .= id, "result" .= r]

  toJSON (Error id code msg) =
     object ["jsonrpc" .= ("2.0" :: String), "id" .= id,
             "error" .= object ["code" .= code, "message" .=msg]]

-- Dispatcher liefert Response

dispatch :: Request -> Response
dispatch (Request _ id "add" (Object p)) =
  case parseMaybe (\o -> (,) <$> o .: "x" <*> o .: "y") p :: Maybe (Int, Int) of
    Just (x, y) ->
      let r = hs_add (CInt (fromIntegral x))
                     (CInt (fromIntegral y))
      in Result id (Number (fromIntegral r))
    Nothing ->
      Error id (-32602) "Invalid params"

dispatch (Request _ id "mul" (Object p)) =
  case parseMaybe (\o -> (,) <$> o .: "x" <*> o .: "y") p :: Maybe (Int, Int) of
    Just (x, y) ->
      Result id (Number (fromIntegral (x * y)))
    Nothing ->
      Error id (-32602) "invalid params"

dispatch (Request _ id m _) =
  Error id (-32601) ("Method not found: " ++ m)

-- Hilfsfunktion
removeFileIfExists :: FilePath -> IO ()
removeFileIfExists f = do
  exists <- doesFileExist f
  when exists (removeFile f)

-- Server-Loop
main :: IO ()
main = do
  let sockPath = "elektro.sock"
  removeFileIfExists sockPath

  sock <- socket AF_UNIX Stream defaultProtocol
  bind sock (SockAddrUnix sockPath)
  listen sock 5

  putStrLn "Haskell IPC Server läuft…"

  forever $ do
    (conn, _) <- accept sock
    h <- socketToHandle conn ReadWriteMode
    msg <- B.hGetLine h

    case decode (BL.fromStrict msg) of
      Just req -> BL.hPutStrLn h (encode ( dispatch req ))
      Nothing  -> B.hPutStrLn h "invalid json"

    hClose h
