-- Datei A44.hs
module A44 where
import Dreiecksterntransformation

a44 :: Double -> Double -> Double -> Double -> Double -> Double -> Double 
a44 r1 r2 r3 r4 r5 u =
  let [x1, x2, x3] = dreiecksterntransformation r1 r2 r3
      r4p2 = r4 + x2  -- Zugriff auf das zweite Element
  in r4p2 + u + r5


  

