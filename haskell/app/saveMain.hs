{-# LANGUAGE OverloadedStrings #-}

import Network.Socket
import qualified Data.ByteString.Char8 as B
import MyApi
import Foreign.C.Types
import Data.Aeson
import qualified Data.ByteString.Lazy.Char8 as BL
import Control.Monad (forever, when)
import Data.Int (Int32)
import System.Directory (doesFileExist, removeFile)
import System.IO (Handle, IOMode(ReadWriteMode), hClose)

data Request = AddReq { x :: Int, y :: Int }
  deriving Show

instance FromJSON Request where
  parseJSON = withObject "Request" $ \o ->
    AddReq <$> o .: "x" <*> o .: "y"

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
      Just (AddReq a b) -> do
        let r = hs_add (CInt (fromIntegral a)) -- :: int32))
                       (CInt (fromIntegral b)) -- :: Int32))

        B.hPutStrLn h (B.pack (show r))

      Nothing ->
        B.hPutStrLn h "error"

    hClose h

removeFileIfExists :: FilePath -> IO ()
removeFileIfExists f = do
  exists <- doesFileExist f
  when exists (removeFile f)
