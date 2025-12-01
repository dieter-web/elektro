module Main where

import A45 (solveA45)

import System.Environment (getArgs)

main :: IO ()
main = do 
  args <- getArgs
  let [u1, u2, ri1, ri2, r3, r4] = map read args
  print(solveA45 u1 u2 ri1 ri2 r3 r4)

 -- putStrLn $ "I1 = " ++ show i1
 -- putStrLn $ "I2 = " ++ show i2
 -- putStrLn $ "I3 = " ++ show i3
 -- putStrLn $ "I4 = " ++ show i4
  

