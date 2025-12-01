{-# LANGUAGE OverloadedStrings #-}

import System.Environment (getArgs)
import Data.Aeson( encode, object, (.=))
import qualified Data.ByteString.Lazy.Char8 as BL

-- Berechnung für zwei Widerstände 
parallel :: Double -> Double -> Double 
parallel r1 r2 = r1 * r2 / ( r1 + r2)

-- Berechnung für Liste von Widerständen
parallelList :: [Double] -> Double 
parallelList = foldr1 parallel 

main :: IO ()
main = do
  args <- getArgs
  let values = map read args :: [Double]
  if length values >= 2
    then do 
      let result = parallelList values
      BL.putStrLn $ encode $ object["input" .= values, "result" .= result]
    else 
      putStrLn "Bitte mindestens zwei Zahlen übergeben"


