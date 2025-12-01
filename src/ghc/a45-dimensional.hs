
{-# LANGUAGE NoImplicitPrelude #-}
import Numeric.Units.Dimensional.Prelude
import Numeric.Units.Dimensional.Quantities
import Numeric.Units.Dimensional.SIUnits
import qualified Prelude as P

solveCurrentsDim :: Resistance Double -> Resistance Double -> Resistance Double -> Resistance Double -> Voltage Double -> Voltage Double -> (Current Double, Current Double, Current Double, Current Double)
solveCurrentsDim ri1 ri2 r3 r4 u1 u2 =
  let numerator   = u1 / ri1 + u2 / ri2
      denominator = r3 / ri1 + r3 / ri2 + _1 + r3 / r4
      i3 = numerator / denominator
      i4 = (r3 / r4) * i3
      i2 = (u2 - r3 * i3) / ri2
      i1 = (u1 - r3 * i3) / ri1
  in (i1, i2, i3, i4)

main :: IO ()
main = do
  let (i1,i2,i3,i4) = solveCurrentsDim (10 *~ ohm) (20 *~ ohm) (30 *~ ohm) (40 *~ ohm) (5 *~ volt) (12 *~ volt)
  P.putStrLn $ "I1 = " P.++ show i1
  P.putStrLn $ "I2 = " P.++ show i2
  P.putStrLn $ "I3 = " P.++ show i3
  P.putStrLn $ "I4 = " P.++ show i4
