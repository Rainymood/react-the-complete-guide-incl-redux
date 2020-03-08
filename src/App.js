import React, { Component } from 'react';
import './App.css';
import Person from './Components/Person';

class App extends Component {

    render() {
        return (
            <div className='App'>
                <h1>Hi, I'm a React app</h1>
                <p>This is working!</p>
                <Person/>
                <Person/>
                <Person/>
            </div>
        );
    }
}

export default App;
