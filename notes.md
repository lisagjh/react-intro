# React Basics

*Mijn aantekeningen terwijl ik React leer en alles verwarrend vind.*
## Inhoud

- [Componenten](#componenten)
  - [Markup - JSX](#markup---jsx)
  - [Classes](#classes)
  - [Voorbeeld - Component](#voorbeeld---component)
- [Routing](#routing)
  - [Layouts](#layouts)
  - [Link](#link)
- [Hooks](#hooks)
  - [useState](#usestate)
  - [useEffect](#useeffect)
  - [useContext](#usecontext)
  - [Other](#other)
- [Bronnen](#bronnen)


## Installatie

Start een nieuw React project met Vite. Dit doe je met: 

```
npm create vite@latest "name"
```

## Componenten

React componenten zijn JavaScript functies die markup returnen:

```js
function MyButton() {  
	return (  
		<button>I'm a button</button>  
	);  
}
```

Je kan ze nesten in andere componenten:

```js
export default function MyApp() {  
	return (  
		<div>  
			<h1>Welcome to my app</h1>  
			<MyButton />  
		</div>  
		);  
	}
```


> Componenten beginnen met hoofdletters. Hierdoor zijn ze makkelijk te onderscheiden van reguliere HTML tags.

Alles binnen zo een component moet in een gedeelde parent zitten. Dit kan een `<div>` zijn, maar ook een lege tag `<>`, deze sluit je zo `</>`. Hiermee maak je niet nog een extra onnodige node of onnodige `<div>`.  Dit is het zelfde als `<React.Fragment>`.

**Return** verteld het component of de functie wat gerendered moet worden.


### Markup - JSX

De meeste React projecten gebruik JSX markup. Het is stricter dan html. Je moet bepaalde tags, zoals `<br>` wel sluiten, wat in html niet hoeft. 

### Classes

Om een class toe te voegen aan iets, gebruik je `className` in plaats van class;

`<img className="avatar" />`

De CSS class define je dan in een aparte `.css` file.

#### Voorbeeld - Component

```js
const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

export default function Profile() {
  return (
  // gebruik <> om de html te wrappen - kan ook een div zijn of iets. 
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
      // sluit de html wrapper
    </>
  );
}
```


## Routing

In React gebruik je React Router om componenten als pagina's te kunnen gebruiken. React Router is een library, deze moet je dus nog wel apart installeren.

`npm i react-router-dom`

Daarna maak je een folder `/src/pages` , hier zet je de page componenten in. Nu word het leuk. 

In de `App.jsx` file importeer je de `HashRouter`, `Routes`, en `Route` van `react-router-dom`. Daarna schrijf je de functie waarmee de routes gemaakt worden:

```js
import { HashRouter as Router, Routes, Route } from 'react-router'

import Home from "./pages/Home";
import About from "./pages/About";

function App() {

  return {
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
</Router>
```

Je nest de elke route in de routes, in de router. Elke route geef je twee props mee, het path en het element. Elk page element moet apart geïmporteerd worden.

### Layouts

Binnen de router in de `App.jsx` kan je een layout gebruiken.

Eerst maak je de file voor de layout, `/src/Layout.jsx`. Hier importeer je het `Outlet` component, waarin de child componenten (de pagina's) gerendered gaan worden. Hier kan je ook componenten die je op elke pagina op dezelfde plek wilt hebben gebruiken, zoals een navigatie.

```js
import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";

export function Layout() {
  return (
    <>
      <Nav />
      
      <main>
        {/* render the child routes in the <Outlet /> */}
        <Outlet />
      </main>
    </>
    );
}
```

Om de Layout te gebruiken, moet je deze importeren in de `App.jsx` en in de Router gebruiken. Dit doe je door de andere routes in een route zonder path maar met de layout als element te nesten.

```js
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";

import Home from "./pages/Home";
import About from "./pages/About";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
    </Routes>
</Router>
);
}
```

Nu komt op beide pagina's de navigatie te staan.

### Link

Om naar een andere pagina te linken, gebruik je het `<Link />` component. 

```js
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
```


## Hooks

React heeft speciale Hook functies. Hooks bieden een compacte en efficiënte manier van componenten bouwen, omdat je stateful logica kan gebruiken zonder je component hiërarchie anders te maken. Dit zijn de building blocks van de componenten.

Je kan hooks alleen gebruiken boven aan in een functie van een functioneel component. Ze werken niet in reguliere JS functies, geneste functies, loops. Tenzij het een custom Hook is.

Er zijn drie basis Hooks:
1. [[#useState]]
2. [[#useEffect]]
3. [[#useContext]]

en een aantal complexere hooks:
- useReducer
- useCallback
- useMemo
- useRef
- useImperativeHandle
- useLayoutEffect
- useDebugValue
### useState

[docs](https://react.dev/reference/react/useState)

State in React is als een geheugen van een component, dat informatie bij houdt.  Hier gebruik je `useState` voor. 

`useState` geeft je twee waardes in een array: de current state, en de update state. Je geeft het ook een argument wat de initiële waarde is, in dit geval is dat 0.

```js
const [count, setCount] = useState(0);
```

Dan kan je het makkelijk zo updaten:

```js
setCount(count+1)
```

`useState` kan ook gebruikt worden voor conditional rendering.

```js
function App() {
	const [count, setCount] = useState(0)

	return (
		<button onClick={()=> setCount(count + 1)}> // increment the count by 1
		  {count}
		</button
	);
}
```


### useEffect

[docs](https://react.dev/reference/react/useEffect)

Dit is de tweede belangrijkste, maar ook de verwarrendste. Hiervoor moeten we eerst even kijken naar de component lifecycle.

```js
componentDitMount() {
	// initialisation
	// can only happen once
}

componentDidUpdate() {
	// state updated
	// can happen multiple times
}

componentWillUnmount() {
	// destroyed
	// removed from the UI
}
```

useEffect is een functie die jij defined als het eerste argument. React runt jouw functie, of "side effect", nadat de DOM is geupdate. Deze Hook is voornamelijk om te synchroniseren met een extern systeem

```js
useEffect(()=>? {
	alert('hello side effect!')
})
```

Bovenstaande functie word gerund elke keer dat stateful data word geupdate in het component. Dit houd in dat deze word gerund wanneer het component word gemount, en wanneer de state changes.

Stel: we moeten data fetchen als het component gemount word. We zetten loaded en setLoaded met `useState` op false. Dan word de state asynchronously geupdate wanneer de data is gefetched. Dit zou een infinite loop worden. Omdat elke keer dat de fetch gedaan word, word de state geupdate, wat de fetch triggered, etc, etc.

Deze loop kan voorkomen worden door een tweede argument aan de useEffect Hook mee te geven, de dependencies. Dit doe je in een array, na het eerste argument. Je kan een lege array mee geven, dus geen dependencies. Dit betekent dat deze hook maar een gerund word, wanner het component eerst initalized word. 
Als er wel dependencies zijn, zet je deze in de array. In dit geval word deze Hook getriggered en gerund wanneer de state van de dependency verandert. In dit geval is dat dus wanneer de state van count verandert.

```js
function Btn() {
	const [count, setCount] = useState(0)
	const [loaded, setLoaded] = useState(false);

	useEffect(()=> {
		fetch('foo').then(()=> setLoaded(true))
	},
	  // [] - lege dependencies array = geen dependencies
	  [count] // is de dependency. runt alleen wanneer de state van count aangepast word
	)
}
```

### useContext

[docs](https://react.dev/reference/react/useContext)

Met deze Hook kan je met de context API van React werken. Dit is een mechanisme waardoor je data kan delen tussen componenten.

Je gebruikt hier 


```js
const moods = {
	happy: ':)',
	sad: ':('
}
const MoodContext = createContext(moods)

function App(props) {

	return (
		<MoodContext.Provider value={moods.happy}>
		
			
			<MoodEmoji />
		</MoodContext.Provider>
	);
}

function MoodEmoji() {
	const mood = useContext(MoodContext)
	return <p>{ mood }</p>
}
```


### Other

##


---


## Bronnen

- [Master React JS the easy way](https://www.youtube.com/watch?v=E8lXC2mR6-k) *video*
- [useState with conditional rendering in react: showing and hiding components](https://dev.to/adetutu/how-to-use-usestate-hook-with-conditional-rendering-in-react-showing-and-hiding-components-3pj5) *artikel*
- [Fireship - 10 React Hooks explained + build your own](https://www.youtube.com/watch?v=TNhaISOUy6Q) *video*
