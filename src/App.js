import "./App.css";
import Hello from "./Person/Person";

function App() {
  return (
    <div className="App">
      <h1>hello world</h1>
      <div> odiljon</div>

      <Hello name="ODILJON" age="22">
        My hoppies is fitness
      </Hello>
      <Hello name="Mark" age="28" />
      <Hello name="Jonh" age="29" />
    </div>
  );
}

export default App;
