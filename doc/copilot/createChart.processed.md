
````

````


Made changes.

Die Funktion `createChart` ist jetzt universell:  
Du kannst beliebige Kurven (Linien), Farben, Achsenbeschriftungen und Skalen übergeben.  
Beispiel-Aufruf:

```js
createChart({
  curves: [
    { label: 'Kennlinie', color: 'black', points: [[0,0],[1,2],[2,3]] },
    { label: 'Zweipol', color: 'red', points: [[0,0],[1,1],[2,2]] }
  ],
  xAxis: { label: 'Stromstärke [A]', domain: [0,2] },
  yAxis: { label: 'Spannung [V]', domain: [0,3] },
  options: { width: 400, height: 300, margin: 40 }
});
```

Damit kannst Du alle typischen Diagramme flexibel erzeugen.