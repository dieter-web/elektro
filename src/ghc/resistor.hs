-- Datei: resistor.hs
import System.Environment( getArgs)

parallel :: Double -> Double -> Double 
parallel r1 r2 = r1 * r2 / ( r1 + r2)

main :: IO ()
main = do
    args <- getArgs
    case args of
      [r1Str, r2Str] -> do
        let r1 = read r1Str :: Double 
        let r2 = read r2Str :: Double
        print (parallel r1 r2)
      _-> putStrLn "Bitte zwei Zahlen übergeben: R1 R2"


