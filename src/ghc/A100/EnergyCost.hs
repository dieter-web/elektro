
-- file: EnergyCost.hs
module EnergyCost
  ( Params(..)
  , Result(..)
  , computeCostPerKWh
  ) where

data Params = Params
  { lampsCount      :: Double    -- 50
  , lampWatt        :: Double    -- 500 W
  , motorsCount     :: Double    -- 10
  , motorMechKW     :: Double    -- 3.5 kW (mechanical)
  , motorEff        :: Double    -- 0.8 (η)
  , ovenMJ          :: Double    -- 1340 MJ over 16h
  , smallKW         :: Double    -- 5.5 kW
  , simultG         :: Double    -- 0.7 (G)
  , loadB           :: Double    -- 0.8 (B)
  , hoursPerDay     :: Double    -- 16 h
  , workDays        :: Double    -- 300
  , annualCostEUR   :: Double    -- 268962.88 €
  } deriving (Show)

data Result = Result
  { pLampsKW    :: Double
  , pMotorsElKW :: Double
  , pMotorsAvgKW:: Double
  , pSmallKW    :: Double
  , pOvenKW     :: Double
  , pTotalKW    :: Double
  , eYearKWh    :: Double
  , costPerKWh  :: Double
  } deriving (Show)

computeCostPerKWh :: Params -> Result
computeCostPerKWh p =
  let g = simultG p
      b = loadB p
      a = g * b

      pLampsKW     = (lampsCount p * lampWatt p) / 1000 * g
      pMotorsElKW  = (motorsCount p * motorMechKW p) / motorEff p
      pMotorsAvgKW = pMotorsElKW * a
      pSmallKW     = smallKW p * g
      eOven16hKWh  = ovenMJ p / 3.6
      pOvenKW      = eOven16hKWh / 16.0

      pTotalKW     = pLampsKW + pMotorsAvgKW + pSmallKW + pOvenKW
      tYearH       = hoursPerDay p * workDays p
      eYearKWh     = pTotalKW * tYearH
      costPerKWh   = annualCostEUR p / eYearKWh
  in Result {..} 
