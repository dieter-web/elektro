Dieter, sehr gern — lass uns **ein vollständiges, sauberes JSON‑RPC‑ähnliches IPC‑Protokoll** definieren, das perfekt zu deinem Unix‑Socket‑Server passt.  
Ich gebe dir:

- eine **präzise Protokollspezifikation**  
- Request/Response‑Struktur  
- Fehlercodes  
- Beispiel‑Messages  
- Erweiterbarkeit für beliebig viele Haskell‑Funktionen  
- und wie Node + Haskell das Protokoll sprechen  

Das Ganze ist **leichtgewichtig**, **idiomatisch**, **dokumentierbar** und passt perfekt in deinen `doc/`‑Ordner.

---

# 📘 **IPC‑Protokoll: JSON‑RPC‑ähnlich über Unix‑Socket**

Wir definieren ein Protokoll, das sich an JSON‑RPC 2.0 orientiert, aber bewusst **schlanker** ist, weil du volle Kontrolle über beide Seiten hast.

---

# 🧱 **1. Transport**

- Transport: **Unix‑Domain‑Socket**
- Pfad: `elektro_linux/haskell/elektro.sock`
- Nachrichtenformat: **eine JSON‑Zeile pro Request**
- Encoding: UTF‑8
- Terminator: `\n`

---

# 🧩 **2. Request‑Format**

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "add",
  "params": {
    "x": 10,
    "y": 32
  }
}
```

### Felder:

| Feld | Typ | Beschreibung |
|------|-----|--------------|
| `jsonrpc` | `"2.0"` | Versionsmarker |
| `id` | Zahl oder String | Eindeutige Request‑ID |
| `method` | String | Name der Haskell‑Funktion |
| `params` | Objekt | Parameter der Funktion |

---

# 🧩 **3. Response‑Format (Erfolg)**

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": 42
}
```

---

# 🧩 **4. Response‑Format (Fehler)**

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "error": {
    "code": -32602,
    "message": "Invalid params"
  }
}
```

### Fehlercodes (kompatibel zu JSON‑RPC)

| Code | Bedeutung |
|------|-----------|
| `-32600` | Invalid Request |
| `-32601` | Method not found |
| `-32602` | Invalid params |
| `-32603` | Internal error |

---

# 🧠 **5. Beispiel‑Requests**

### Addition

```json
{"jsonrpc":"2.0","id":1,"method":"add","params":{"x":10,"y":32}}
```

### Multiplikation

```json
{"jsonrpc":"2.0","id":2,"method":"mul","params":{"x":7,"y":6}}
```

### Unbekannte Methode

```json
{"jsonrpc":"2.0","id":3,"method":"foo","params":{}}
```

---

# 🟦 **6. Haskell‑Server: Dispatcher für JSON‑RPC**

Du brauchst nur zwei kleine Änderungen:

### A) Request‑Typ erweitern

```haskell
data Request = Request
  { jsonrpc :: String
  , reqId   :: Value
  , method  :: String
  , params  :: Value
  } deriving Show

instance FromJSON Request where
  parseJSON = withObject "Request" $ \o ->
    Request <$> o .: "jsonrpc"
            <*> o .: "id"
            <*> o .: "method"
            <*> o .: "params"
```

### B) Response‑Typ erweitern

```haskell
data Response
  = Result Value Value
  | Error  Value Int String
```

Encoder:

```haskell
instance ToJSON Response where
  toJSON (Result id r) =
    object ["jsonrpc" .= ("2.0" :: String), "id" .= id, "result" .= r]

  toJSON (Error id code msg) =
    object ["jsonrpc" .= ("2.0" :: String), "id" .= id,
            "error" .= object ["code" .= code, "message" .= msg]]
```

### C) Dispatcher liefert Response

```haskell
dispatch :: Request -> Response
dispatch (Request _ id "add" (Object p)) =
  case parseMaybe (\o -> (,) <$> o .: "x" <*> o .: "y") p :: Maybe (Int, Int) of
    Just (x, y) ->
      let r = hs_add (CInt (fromIntegral x))
                     (CInt (fromIntegral y))
      in Result id (Number (fromIntegral r))
    Nothing ->
      Error id (-32602) "Invalid params"

dispatch (Request _ id "mul" (Object p)) =
  case parseMaybe (\o -> (,) <$> o .: "x" <*> o .: "y") p :: Maybe (Int, Int) of
    Just (x, y) ->
      Result id (Number (fromIntegral (x * y)))
    Nothing ->
      Error id (-32602) "Invalid params"

dispatch (Request _ id m _) =
  Error id (-32601) ("Method not found: " ++ m)
```

---

# 🟩 **7. Node‑Client: Universelle RPC‑Funktion**

```js
export function rpc(method, params = {}, id = 1) {
  return new Promise((resolve, reject) => {
    const client = net.createConnection(SOCKET_PATH);

    client.on("connect", () => {
      const req = JSON.stringify({
        jsonrpc: "2.0",
        id,
        method,
        params
      });
      client.write(req + "\n");
    })

    client.on("data", (data) => {
      const res = JSON.parse(data.toString());
      if (res.error) reject(res.error);
      else resolve(res.result);
      client.end();
    });

    client.on("error", reject);
  });
}
```

Wrapper:

```js
export const hs_add = (x, y) => rpc("add", { x, y });
export const hs_mul = (x, y) => rpc("mul", { x, y });
```

---

# 🎉 **Ergebnis**

Du hast jetzt ein **vollwertiges JSON‑RPC‑Protokoll über Unix‑Sockets**, das:

- beliebig viele Haskell‑Funktionen unterstützt  
- sauber typisiert ist  
- Fehlercodes liefert  
- Node‑seitig universell ist  
- perfekt dokumentierbar ist  
- in dein `doc/`‑System passt  

Das ist exakt die Architektur, die man in professionellen IPC‑Systemen nutzt.

---

Wenn du möchtest, erstelle ich dir jetzt:

- ein **Mermaid‑Diagramm** für das Protokoll  
- eine **doc/IPC_PROTOCOL.md** Datei  
- automatische **Methodenregistrierung** (Map statt Pattern‑Matching)  
- oder **TypeScript‑Typen** für alle RPC‑Methoden  

Sag einfach Bescheid, wie wir weitergehen.
