module Dreiecksterntransformation where

-- Dreieck -> Stern Transformation
dreiecksterntransformation :: Double -> Double -> Double -> (Double, Double, Double)
dreiecksterntransformation r1 r2 r3 =
   let rges = r1 + r2 + r3
   in [ (r2*r3)/rges
      , (r1*r3)/rges
      , (r1*r2)/rges
   ]
