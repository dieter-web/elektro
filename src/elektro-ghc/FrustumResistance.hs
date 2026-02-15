-- Widerstand eines Kreiskegelstumpfs
-- R = (ρ * h ) / ( π * r1 * r2)
module FrustumResistance where
resistance :: Double -> Double -> Double -> Double -> Double 
resistance rho h r1 r2
  | r1 <= 0 || r2 <= 0 = error "Radien müssen > 0 sein"
  | h <= 0             = error "Höhe muss > 0 sein"
  | otherwise          = rho * h / ( pi * r1 * r2)


