{-# LANGUAGE OverloadedStrings #-}

-- Berechnung der Drahtlänge l2 und l3 in einer Schleifendrahtbrücke
-- Gegeben: R1, Rx, Gesamtlänge l

import System.Environment (getArgs)
import Data.Aeson (encode, object, (.=))
import qualified Data.ByteString.Lazy.Char8 as BL

-- Hilfsfunktion zum Runden 
-- roundTo :: Int -> Double -> Double 
-- roundTo n x =
--   let f = 10 ^ n
--   in fromIntegral (round (x * f)) / f


calculateLengths :: Double -> Double -> Double -> (Double, Double)
calculateLengths r1 rx totalLength = 
  let l3 = (r1 * totalLength) / (r1 + rx)
      l2 = totalLength - l3
  in (l2, l3)

main :: IO ()
main = do 
  args <- getArgs 
  case args of 
    [r1Str, rxStr, lStr] -> do 
      let r1 = read r1Str :: Double 
          rx = read rxStr :: Double 
          totalLength = read lStr :: Double
      print(calculateLengths r1 rx totalLength)
    _ -> putStrLn "Bitte genau drei Argumente angeben: R1 Rx Länge"
