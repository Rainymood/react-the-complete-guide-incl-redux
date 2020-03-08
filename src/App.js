import React, { Component } from 'react';
import './App.css';
import Person from './Components/Person';
import PersonClass from './Components/PersonClass';

class App extends Component {
    state = {
        persons: [
            { name: 'Jan', age: 28}, 
            { name: 'Roy', age: 10}, 
            { name: 'Test', age: 99}
        ]
    }
    render() {
        return (
            <div className='App'>
                <h1>Hi, I'm a React app</h1>
                <p>This is working!</p>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>Person child content</Person>
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Person child content</Person>
                <PersonClass name={this.state.persons[2].name} age={this.state.persons[2].age}>PersonClass child content</PersonClass>
            </div>
        );
    }
}

export default App;
