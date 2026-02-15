{-# LANGUAGE OverloadedStrings #-}
--module Main where

--import System.Environment (getArgs)
--import qualified Resistor
--import qualified Dreiecksterntransformation
--import qualified Schleifendrahtbruecke

--main :: IO ()
--main = do
--    args <- getArgs
--    case args of
--        ["resistor"] -> print $ Resistor.resistance 10 20
--        ["dreieck"]  -> print $ Dreiecksterntransformation.dreiecksterntransformation 10 20 30
--        ["bruecke"]  -> print $ Schleifendrahtbruecke.calculateLengths 10 20 100
--        _            -> putStrLn "Bitte Modulnamen angeben: resistor | dreieck | bruecke"

module Main where

import System.Environment (getArgs)
import qualified Data.Aeson as Aeson
import qualified Data.ByteString.Lazy.Char8 as BL

import qualified Resistor
import qualified Dreiecksterntransformation
import qualified A46
import qualified A45
import qualified FrustumResistance
import qualified A50


main :: IO ()
main = do
    args <- getArgs
    case args of
      ["resistor", r1, r2] -> do
          let result = Resistor.resistance (read r1) (read r2)
          BL.putStrLn $ Aeson.encode (Aeson.object ["result" Aeson..= result])
      ["dreieck", r1, r2, r3] -> do
          let (r1e,r2e,r3e) = Dreiecksterntransformation.dreiecksterntransformation (read r1) (read r2) (read r3)
          BL.putStrLn $ Aeson.encode (Aeson.object ["r1e" Aeson..= r1e, "r2e" Aeson..= r2e, "r3e" Aeson..= r3e])
      ["a45", u1, u2, ri1, ri2, r3, r4] -> do
          let (i1, i2, i3, i4) = A45.a45 (read u1) (read u2) (read ri1) (read ri2) (read r3) (read r4)
          BL.putStrLn $ Aeson.encode (Aeson.object ["i1" Aeson..=i1, "i2" Aeson..=i2, "i3" Aeson..=i3, "i4" Aeson..=i4])
      ["a46", u1, u2, u3, ri1, ri2, ri3, r4, r5, r6] -> do
         let (i1, i2, i3, i4, i5) = A46.a46 (read u1) (read u2) (read u3) (read ri1) (read ri2) (read ri3) (read r4) (read r5) (read r6)
         BL.putStrLn $ Aeson.encode( Aeson.object ["i1" Aeson..=i1, "i2" Aeson..=i2, "i3" Aeson..=i3, "i4" Aeson..=i4, "i5" Aeson..=i5])
      ["resistor-kreiskegelstumpf", rho, r1, r2] -> do
         let (r) = FrustumResistance.resistor-kreiskegelstumpf (read rho) (read r1) (read r2) 
         BL.putStrLn $ Aeson.encode(Aeson.object ["r" Aeson..=r])

      _ -> putStrLn "Usage: elektro-exe resistor r1 r2 | dreieck r1 r2 r3"
