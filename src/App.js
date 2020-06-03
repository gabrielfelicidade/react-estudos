import React, { Component } from "react";
import classes from "./App.module.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: 1, name: "Max", age: 28 },
      { id: 2, name: "Manu", age: 29 },
      { id: 3, name: "Stephanie", age: 26 },
    ],
    showPersons: false,
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex],
      name: event.target.value,
    };
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  };

  render() {
    let persons = null;
    let buttonClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                changed={(event) => this.nameChangedHandler(event, person.id)}
                name={person.name}
                age={person.age}
                key={person.id}
              />
            );
          })}
        </div>
      );

      buttonClass = classes.Red;
    }

    const attachedClasses = [];

    if (this.state.persons.length <= 2) {
      attachedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      attachedClasses.push(classes.normal);
    }

    return (
      <div className={classes.App}>
        <h1 className={attachedClasses.join(" ")}>Hi, Testing</h1>
        <button className={buttonClass} onClick={this.togglePersonsHandler}>
          Toggle Persons
          </button>
        {persons}
      </div>
    );
  }
}

export default App;
