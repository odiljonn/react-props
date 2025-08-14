import { Component } from "react";
import "./App.css";
import Hello from "./Person/Person";

class App extends Component {
  state = {
    person: [{ name: "odiljon", age: 22 }],

    number: 100,
  };

  ozgartirmoq = () => {
    this.setState({
      person: [{ name: "latofat", age: 233, jobs: "devoloper" }],
    });
  };

  boshqabutton = () => {
    this.setState({ number: this.state.number + 1 });
  };

  boshqabutton1 = () => {
    this.setState({ number: this.state.number - 1 });
  };

  render() {
    const { number } = this.state;

    return (
      <div className="App">
        <h1>hello world</h1>

        <button onClick={this.ozgartirmoq}>click me </button>
        <Hello
          name={this.state.person[0].name}
          age={this.state.person[0].age}
          jobs={this.state.person[0].jobs}
        >
          My hoppies is fitness
        </Hello>
        <Hello name="Mark" age="28" />
        <Hello name="Jonh" age="29" />

        <section>
          <h1> number: {number}</h1>
          <button onClick={this.boshqabutton}>+</button>
          <button onClick={this.boshqabutton1}>-</button>
        </section>
      </div>
    );
  }
}

export default App;
