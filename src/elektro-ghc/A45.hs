-- Datei A45.hs
-- Berechung der Ströme I1, I2, I3, I4 aus Beispiel 2.18
module A45 where

a45 :: Double -> Double -> Double -> Double -> Double -> Double -> (Double, Double, Double, Double)
a45 u1 u2 ri1 ri2 r3 r4 = 
  let numerator = u1 / ri1 + u2 / ri2
      denominator = r3 / ri1 + r3 / ri2 + 1 + r3 / r4
      i3 = numerator / denominator
      i4 = (r3 / r4) * i3
      i2 = (u2 - r3 * i3) / ri2
      i1 = (u1 - r3 * i3) / ri1
  in (i1, i2, i3, i4)


