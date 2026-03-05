Um das Drehspulmesswerk für Spannungen bis **2.5 V** zu verwenden, obwohl es nur für **0.5 V** ausgelegt ist, muss ein **Vorwiderstand** in Reihe geschaltet werden, der den überschüssigen Spannungsanteil abfängt.

---

### 🔧 Gegeben:
- **Messbereich des Drehspulmesswerks**: $ U_{\text{Messwerk}} = 0{,}5\,\text{V} $
- **Innenwiderstand des Messwerks**: $ R_{\text{Messwerk}} = 250\,\Omega $
- **Gewünschter Messbereich**: $ U_{\text{ges}} = 2{,}5\,\text{V} $

---

### 📐 Berechnung:

1. **Strom durch das Messwerk**:
   $$
   I = \frac{U_{\text{Messwerk}}}{R_{\text{Messwerk}}} = \frac{0{,}5\,\text{V}}{250\,\Omega} = 2\,\text{mA}
   $$

2. **Spannung über den Vorwiderstand**:
   $$
   U_{\text{Vorwiderstand}} = U_{\text{ges}} - U_{\text{Messwerk}} = 2{,}5\,\text{V} - 0{,}5\,\text{V} = 2{,}0\,\text{V}
   $$

3. **Vorwiderstand berechnen**:
   $$
   R_{\text{Vor}} = \frac{U_{\text{Vorwiderstand}}}{I} = \frac{2{,}0\,\text{V}}{2\,\text{mA}} = 1000\,\Omega
   $$

---

### ✅ Ergebnis:
Der **vorzuschaltende Widerstand** muss **1000 Ω** betragen.

Wenn du magst, kann ich dir auch eine kleine Schaltungsskizze oder eine Markdown-Dokumentation dazu erstellen.