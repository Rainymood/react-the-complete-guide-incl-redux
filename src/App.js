import React, { Component } from 'react';
import './App.css';
import Person from './Components/Person';
import PersonClass from './Components/PersonClass';

class App extends Component {
    render() {
        return (
            <div className='App'>
                <h1>Hi, I'm a React app</h1>
                <p>This is working!</p>
                <Person name='Joe' age='10' />
                <PersonClass name='Jan' age='20' />
            </div>
        );
    }
}

export default App;
