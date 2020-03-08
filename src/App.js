import React, { Component } from 'react';
import './App.css';
import Person from './Components/Person';
import PersonClass from './Components/PersonClass';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            persons: [
                { name: 'Jan', age: 28 },
                { name: 'Roy', age: 10 },
                { name: 'Test', age: 99 }
            ],
            isToggleOn: true
        };

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    handleClickArrow = () => {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    };

    render() {
        return (
            <div className='App'>
                <h1>Hi, I'm a React app</h1>
                <p>This is working!</p>
                <button onClick={this.handleClick}>Button name (regular) {this.state.isToggleOn ? 'ON' : 'OFF'}</button>
                <button onClick={this.handleClickArrow}>
                    Button name (arrow fun) {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>
                    Person child content
                </Person>
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>
                    Person child content
                </Person>
                <PersonClass name={this.state.persons[2].name} age={this.state.persons[2].age}>
                    PersonClass child content
                </PersonClass>
            </div>
        );
    }
}

export default App;
