dieter-web: Aufgabe vervollständigen und lösen

GitHub Copilot: 
````

````
Made changes.

Die Aufgabe wurde vervollständigt und gelöst. Es werden jetzt die Eingabefelder für Gesamtwiderstand und prozentuale Erhöhung angezeigt, und der benötigte Reihenwiderstand wird korrekt berechnet und ausgegeben.

Wenn du das Skript startest, erhältst du das Ergebnis für die Beispielwerte direkt in der Konsole. Möchtest du das Ergebnis für andere Werte sehen, kannst du die Eingaben anpassen.

dieter-web: Mit einer Knotenleitwertmatrix lösen

GitHub Copilot: Um die Aufgabe mit einer Knotenleitwertmatrix (MNA, Matrixlösung) zu lösen, ist das System sehr einfach: Der neue Reihenwiderstand wird an den bestehenden Gesamtwiderstand in Serie gehängt. Die Matrixlösung ist hier fast trivial, aber ich kann das Prinzip demonstrieren:

- Knoten 1: Potential vor dem Reihenwiderstand (φ1)
- Knoten 2: Potential nach dem Reihenwiderstand (φ2, Masse)
- R_ges: alter Zweig, R_reihe: gesuchter Widerstand

Das Gleichungssystem (bei angelegter Spannung U):
$$
\begin{align*}
\frac{\varphi_1 - \varphi_2}{R_{ges}} + \frac{\varphi_1 - 0}{R_{reihe}} = 0 \\
\varphi_2 = 0
\end{align*}
$$

Setze $ \varphi_2 = 0 $:

$$
\frac{\varphi_1}{R_{ges}} + \frac{\varphi_1}{R_{reihe}} = 0 \implies \varphi_1 \left( \frac{1}{R_{ges}} + \frac{1}{R_{reihe}} \right) = 0
$$

Das ergibt nur die triviale Lösung $ \varphi_1 = 0 $ ohne externe Quelle. Mit einer Spannungsquelle U an Knoten 1 gegen Masse:

$$
\frac{U - 0}{R_{ges} + R_{reihe}} = I
$$

Die Matrix ist also:

$$
G = \begin{bmatrix}
\frac{1}{R_{ges}} + \frac{1}{R_{reihe}}
\end{bmatrix}
$$

Für die Aufgabenstellung (nur Addition eines Widerstands) genügt die Berechnung wie bisher, aber ich kann die Matrixlösung im Code ergänzen, damit das Prinzip klar ist.

Ich ergänze die Aufgabe um eine symbolische Knotenleitwertmatrix-Lösung. 
````

````


Made changes.

Die Aufgabe ist jetzt mit einer Knotenleitwertmatrix (MNA) gelöst. Im Ergebnis werden neben der klassischen Berechnung auch die Knotenpotentiale und der Gesamtstrom für U=1 V mit der Matrixmethode ausgegeben. So siehst du die Lösung sowohl klassisch als auch mit MNA. 

Wenn du das Skript startest, erhältst du beide Lösungswege im Ergebnisobjekt.

In math.js kannst du die Einheit "%" (Prozent) nicht direkt als unit wie "V" oder "ohm" verwenden. Prozent ist keine SI-Einheit und wird von math.js nicht als eigene Einheit unterstützt.

Du kannst Prozent aber als Zahl interpretieren, z.B. 3.75 % als 0.0375 (also durch 100 teilen) und dann damit rechnen:

```js
const prozent = 3.75;
const faktor = prozent / 100; // ergibt 0.0375
const ergebnis = wert * faktor;
```

Für Berechnungen mit Prozenten solltest du also immer den Wert durch 100 teilen und als dimensionslose Zahl verwenden.