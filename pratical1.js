import React, {
  useState,
  useEffect,
  useReducer,
  createContext,
  useContext,
} from "react";
const GlobalContext = createContext();
const reducer = (state, action) =>
  action.type === "increment"
    ? { count: state.count + 1 }
    : action.type === "decrement"
    ? { count: state.count - 1 }
    : state;

function App() {
  const [name, setName] = useState("John"),
    [age, setAge] = useState(25),
    [state, dispatch] = useReducer(reducer, { count: 0 }),
    [globalState, setGlobalState] = useState({ theme: "light" });

  useEffect(() => console.log("Component updated"), [name, age]);

  const toggleTheme = () =>
    setGlobalState((prev) => ({
      theme: prev.theme === "light" ? "dark" : "light",
    }));

  return (
    <GlobalContext.Provider value={{ globalState, toggleTheme }}>
      <div
        style={{
          backgroundColor: globalState.theme === "light" ? "white" : "darkgray",
          color: globalState.theme === "light" ? "black" : "white",
        }}
      >
        <h1>React States Example</h1>
        <h2>Local State</h2>
        <p>
          {name} {age}
        </p>
        <button onClick={() => setName(name === "John" ? "Jane" : "John")}>
          Toggle Name
        </button>
        <button onClick={() => setAge(age === 25 ? 30 : 25)}>Toggle Age</button>

        <h2>Reducer State</h2>
        <p>{state.count}</p>
        <button onClick={() => dispatch({ type: "increment" })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "decrement" })}>
          Decrement
        </button>

        <h2>Global State</h2>
        <p>{globalState.theme}</p>
        <button onClick={toggleTheme}>Toggle Theme</button>

        <ChildComponent name={name} age={age} />
        <ChildComponentWithContext />
      </div>
    </GlobalContext.Provider>
  );
}

function ChildComponent({ name, age }) {
  return (
    <div>
      <h3>Child</h3>
      <p>
        {name} {age}
      </p>
    </div>
  );
}

function ChildComponentWithContext() {
  const { globalState, toggleTheme } = useContext(GlobalContext);
  return (
    <div>
      <h3>Child with Context</h3>
      <p>{globalState.theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}
export default App;
