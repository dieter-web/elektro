-- Datei: A46.hs
-- Vollständige parametrisierte Kirchhoff-Funktion 
-- Eingabe: U1 U2 U3 Ri1 Ri2 Ri3 R4 R5 R6
-- Ausgabe: Tupel (I1,I2,I3,I4,I5)
--
a46 :: Double -> Double -> Double -> Double -> Double -> Double -> Double -> Double -> Double -> (Double, Double, Double, Double, Double)
a46 u1 u2 u3 ri1 ri2 ri3 r4 r5 r6 = 
   let alpha = ri1 / ri2
       beta = (u2 - u1) / ri2

       p = r5 / (ri3 + r6) + 1
       q = 1 + alpha
       r = beta - (u3 / (ri3 + r6))
       s = (ri2 + r4) * alpha + r4
       t = u2 - (ri2 + r4) * beta

       i1 = (t - (r5/p)*r) / (s + (r5/p)*q)
       i5 = (q*i1 + r) / p
       i2 = alpha * i1 + beta
       i4 = i1 + i2
       i3 = (u3 + r5*i5) / (ri3 + r6)
   in (i1,i2,i3,i4,i5)


main :: IO ()
main = print (a46 10 5 8 3 5 4 6 7 8)

