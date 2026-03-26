module Main where

import System.Environment (getArgs)
import Math
import Elektro
import Energie

main :: IO ()
main = do
   args <- getArgs
   case args of
      ("math.add" : x : y : _) ->
         print(add (read x) (read y))

      ("math.mul" : x : y : _) ->
         print(mul (read x) (read y))

      ("elektro.wheatston" : l : r1 : rx : _ ) ->
         print(wheatston (read l) (read r1) (read rx))

      ("elektro.dreister" : r1 : r2 : r3 : _ ) ->
         print(dreister (read r1) (read r2) (read r3))

      ("energie.heatingTime" : m : δ1 : δ2 : wel : _) ->
         print(heatingTime (read m)(read δ1)(read δ2)(read wel))

      _ -> putStrLn "Unknown command"
