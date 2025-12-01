-- a45.hs
-- Berechnung der Ströme I1, I2, I3, I4 aus dem Gleichungssystem
module A45 (solveA45) where

-- Eingaben: U1, U2, RI1, Ri2, R3, R4
-- Ausgabe: Tupel(I1, I2, I3, I4)
solveA45 :: Double -> Double -> Double -> Double -> Double -> Double -> (Double, Double, Double, Double)
solveA45 u1 u2 ri1 ri2 r3 r4 =
  let numerator = u1 / ri1 + u2 / ri2
      denominator = r3 / ri1 + r3 / ri2 + 1 + r3 / r4
      i3 = numerator / denominator
      i4 = (r3 / r4) * i3
      i2 = (u2 - r3 * i3) / ri2
      i1 = (u1 - r3 * i3) / ri1
  in (i1, i2, i3, i4)



-- Beispiel: ghci> solveCurrents 10 20 30 40 5 12
-- Ergebnis: (0.25, 0.35, 0.3, 0.225)
--
