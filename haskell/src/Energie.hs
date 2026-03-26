module Energie
  ( heatingTime 
  ) where

specificHeatWater :: Double
specificHeatWater = 4190.0 -- J(kg*K)

-- powerHeater :: Double
-- powerHeater = 1000.0  -- W = J/s

-- Berechnung der Heizzeit
heatingTime :: Double -> Double -> Double -> Double -> Double
heatingTime mass startT endT power =
  let deltaT = endT - startT
      q      = mass * specificHeatWater * deltaT  -- Energie in Joule

      t      = q / power
  in t / 60                              -- Zeit in Minuten

