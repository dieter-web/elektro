-- Datei A44.hs
{-# LANGUAGE DeriveGeneric #-}

module A44 where

-- import Dreiecksterntransformation

a44 :: Double -> Double -> Double -> Double -> Double -> Double -> (Double, Double, Double, Double, Double, Double)
a44 r1 r2 r3 r4 r5 u =
  let rges = r1 + r2 + r3
  (x1, x2, x3)  = ((r2 * r3)/rges,(r1*r3)/rges,(r1*r2)/rges)

  let r24 = x2 + r4
      r15 = x1 + r5
      r24pr15 = r24 * r15 / (r24 + r15)
      r = x3 + r24pr15
      i = u / r
      i4 = i * (x1 + r5 / (x2 + r4 + x1 + r5))
      i5 = i * (x2 + r4 / (x2 + r4 + x1 + r5))
      u4 = i4 * r4
      u5 = i5 * r5
      i3 = u4 - u5 / r3
  in (i, i4, i5, u4, u5, i3)





