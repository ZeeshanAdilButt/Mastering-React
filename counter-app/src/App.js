import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  //start state
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  //end state

  constructor() {
    super();
    console.log("App - Constructor");
  }

  componentDidMount() {
    //ajax call
    //set state
    console.log("App - componentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("App - componentDidUpdate");
  }

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value--;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    console.log(counterId);

    const counters = this.state.counters.filter((x) => x.id !== counterId);
    this.setState({ counters });
  };

  render() {
    console.log("App - render");

    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter((x) => x.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
