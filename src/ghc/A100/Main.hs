import EnergyCost

main :: IO ()
main = do
  let params = Params 
    {
      lampsCount=50, lampWatt=500, motorsCount=10, motorMechKW=3.5, motorEff=0.8,
      ovenMJ=1340, smallKW=5.5, simultG=0.7, loadB=0.8,
      hoersPerDay=16, workDays=300, annualCostEUR=268962.88
    }
  r = computeCostPerkWh params 
  putStrLn $ "Kosten/kWh: " ++ show (costPerkWh r) -- 0.811 €/kWh 

