## Här förklaras olika begrepp, kommandon och fraser i de olika verktygen.

#

### Detta kommer att lättare få dig att förstå och använda sig av dessa i de olika filerna.

#

## State

### State är ett vanligt JavaScript-objekt som används av React för att representera en information, egenskap om komponentens aktuella situation. Den hanteras i komponenten (precis som vilken variabel som helst som deklareras i en funktion).

#

## Axios --> "https://axios-http.com/"

### Axios används för att hämta kod från externa databaser. Den skapar http fil från node.js där den hämtar och svarar ("response") på den data man vill hämta.

<br>

- Axios hämtar data genom att man gör en förfrågan (request) då den hämtar data.

- (response) eller (res). Axios svarar med den angivna data som man vill hämta.
  Till exempel med ".get" från, https://k4backend.osuka.dev.

- Om det sker fel från användaren kan man "console.log(error)" eller "console.log(err)" för att få fram om det skett några fel.

#

## Recoil --> "https://recoiljs.org/"

### Vad är Recoil? Recoil är ett biblotek för React som strukturerar och hanterar olika tillstånd eller egenskaper för kod i React. Recoil kommer automatiskt när man installerar react. Med antingen:

<br>
1. `npx create-react-app` ["my-app"]
   eller
2. `npm create vite@latest`

_I Vite så frågar den vad för app den ska skapa och även vilket språk man skriver i._

### Recoil är väldigt användbart och populärt biblotek för många utvecklare/programmerare.

<br>

- Atom, en atom representerar en del av ett tillstånd, egenskap eller situation.
  Atomer kan läsas från eller bli skrivna från vilken komponent (component) som helst.

  Komponenten läser värdet av en eller flera atom/er där det är underförstått att den ska följa till just den atom man kallar på.
  Resultatet renderas ut så att alla komponenter som berörs av den atomen visas efter renderingen i appen eller på webben.

  läs mer här: https://recoiljs.org/docs/introduction/getting-started.

- Selector, representerar en del av: Devierad data som kan vara synkron och asynkron. Det vill säga det som kommer med tiden, i realtid, och den tiden användaren spenderar, lägger ner sin tid. Dens värde kan förändra ett "state" rena funktion och värde.

- useRecoilState(state); den returnerar en ändlig objektfrekvens, vars komponenter har var för sig en bestämd typ.

  Där det första elementet är det värde av "state" och det andra elementet sätter en "set/setter" funktion som uppdaterar värdet på den första när den väl blir kallad på.

  Här kommer ett exempel på dessa. En kalkylator som ska räkna ut temperaturen i Celsius, Fahrenheit:

  #

```
import {atom, selector, useRecoilState} from 'recoil';

const tempFahrenheit = atom({
  key: 'tempFahrenheit',
  default: 32,
});

const tempCelsius = selector({
  key: 'tempCelsius',
  get: ({get}) => ((get(tempFahrenheit) - 32) * 5) / 9,
  set: ({set}, newValue) => set(tempFahrenheit, (newValue * 9) / 5 + 32),
});

function TempCelsius() {
  const [tempF, setTempF] = useRecoilState(tempFahrenheit);
  const [tempC, setTempC] = useRecoilState(tempCelsius);

  const addTenCelsius = () => setTempC(tempC + 10);
  const addTenFahrenheit = () => setTempF(tempF + 10);

  return (
    <div>
      Temp (Celsius): {tempC}
      <br />
      Temp (Fahrenheit): {tempF}
      <br />
      <button onClick={addTenCelsius}>Add 10 Celsius</button>
      <br />
      <button onClick={addTenFahrenheit}>Add 10 Fahrenheit</button>
    </div>
  );
}
```

#

- useRecoilValue(state); Returnerar det värde som anges i Recoil "state".

Läs mer: https://recoiljs.org/docs/api-reference/core/useRecoilValue.

#
