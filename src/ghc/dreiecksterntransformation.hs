import System.Environment (getArgs)
import Data.Aeson (encode, object, (.=))
import qualified Data.ByteString.Lazy.Char8 as BL

dreiecksterntransformation :: Double -> Double -> Double -> (Double, Double, Double)
dreiecksterntransformation r1 r2 r3 =
   let r1e = r2 * r3 / ( r1 + r2 + r3)
       r2e = r3 * r1 / ( r1 + r2 + r3)
       r3e = r1 * r2 / ( r1 + r2 + r3)
   in(r1e, r2e, r3e)

main :: IO ()
main = do
  args <- getArgs
  case args of
    [r1Str, r2Str, r3Str] -> do
       let r1 = read r1Str :: Double
           r2 = read r2Str :: Double
           r3 = read r3Str :: Double
       print(dreiecksterntransformation r1 r2 r3)
    _-> putStrLn "Bitte genau 3 Argumente angeben: r1, r2, r3"


