import { create, all } from 'mathjs'
const config = { precision: 64 }
const math = create(all, config)

const U = 100
const R1 = 20
const R2 = 15
const Ia = 3

// Korrekte Koeffizienten
const a = Ia
const b = Ia * (R1 + R2)
const c = -U * R2

const discriminant = math.pow(b, 2) - 4 * a * c

if (discriminant < 0) {
  console.log("Keine reale Lösung für Ra.")
} else {
  const sqrtD = math.sqrt(discriminant)
  const Ra1 = (-b + sqrtD) / (2 * a)
  const Ra2 = (-b - sqrtD) / (2 * a)
  const Ra = Ra1 > 0 ? Ra1 : Ra2
  console.log(`Berechneter Belastungswiderstand Ra: ${math.round(Ra, 3)} Ω`)
}



