module Resistor (parallel) where

parallel :: Fractional a => a -> a -> a
parallel r1 r2 = r1 * r2 / (r1 + r2)


