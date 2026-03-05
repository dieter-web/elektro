{-# LANGUAGE DeriveGeneric #-}

module A43 where

import GHC.Generics (Generic)
import Data.Aeson (ToJSON)

-- JSON‑Struktur definieren
data A43Result = A43Result
  { l2 :: Double
  , l3 :: Double
  } deriving (Show, Generic)

instance ToJSON A43Result

-- Funktion, die JSON‑kompatible Struktur zurückgibt
a43 :: Double -> Double -> Double -> A43Result
a43 lg r1 rx =
  let l3 = r1 * lg / (rx + r1)
      l2 = lg - l3
  in (A43Result l2 l3)
