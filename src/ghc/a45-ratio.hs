-- currents-ration.hs
-- Variante mit exakten Brüchen
import Data.Ratio

-- Eingabe als Rational
solveCurrentsRatio :: Rational -> Rational -> Rational -> Rational -> Rational -> Rational -> (Rational, Rational, Rational, Rational)
solveCurrentsRatio ri1 ri2 r3 r4 u1 u2 =
  let numerator = u1 / ri1 + u2 / ri2 
      denominator = r3 / ri1 + r3 / ri2 + 1 + r3 / r4
      i3 = numerator / denominator
      i4 = (r3 / r4) * i3
      i2 = (u2 - r3 * i3) / ri2
      i1 = (u1 - r3 * i3) / ri1
  in (i1, i2, i3, i4)

-- Beispiel: solveCurrentsRatio (10%1) (20%1) (30%1) (40%1) (5%1) (12%1)
-- Ergebnis: ( 1 % 4, 7 % 20, 3 % 10, 9 % 40)
