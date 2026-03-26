module Elektro
  ( wheatston  
  , dreister
  ) where

 -- | Wheatstonesche Brückenschaltung
 -- |  l3 = R1*l/ (Rx + R1)
 -- |  l2 = l - l3
 wheatston :: Double -> Double -> Double -> (Double, Double)
 wheatston l r1 rx =
    let l3 = (r1 * l) / (rx + r1)
        l2 = l - l3
    in (l2, l3)

 -- | Dreieck-Stern-Transformation
 -- |  R'1 = R2R3 / R1 + R2 + R3
 -- |  R'2 = R3R1 / R1 + R2 + R3
 -- |  R'3 = R1R2 / R1 + R2 + R3
 dreister :: Double -> Double -> Double -> (Double, Double, Double)
 dreister r1 r2 r3 =
    let n = r1 + r2 + r3
        r1' = r2 * r3 / n
        r2' = r3 * r1 / n
        r3' = r1 * r2 / n
    in (r1', r2', r3')

