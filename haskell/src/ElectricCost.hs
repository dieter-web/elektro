module ElectricCost
  (costPerKWh
  ) where

  let g = 0.7   -- Gleichzeitigkeitsfaktor
      b = 0.8   -- Belastungsfaktoren Motoren
      a = b * g -- Auslastungsfaktor

  -- Leistungen in kW
  pLamps = (600 * 60 + 50 * 500) / 1000.0
  pMotEl = (10 * 3.5) / 0.8
  pSmall = 5.5

  -- Ofen: 1340 MJ in 16h
  eOvenWh = 1340e6 / 3600.0
  pOven = (eOvenWh / 1000.0) / 16.0

  pLampsEff = pLamps * g
  pMotEff   = pMotEl * a
  pSmallEff = pSmall * g
  pOvenEff  = pOven

  pAvg = pLampsEff + pMotEff + pSmallEff + pOvenEff

  daysPerYear = 300
  hoursPerDay = 16
  hoursPerYear = fromIntegral( daysPerYear * hoursPerDay )

  eYear = pAvg * hoursPerYear  --kWh/Jahr

  costYear = 268962.88  --Euro
  costPerKWh = costYear / eYear

  in(pAv, eYear, costPerKWh)

