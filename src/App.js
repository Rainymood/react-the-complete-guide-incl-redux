import React, { useState } from 'react';
import './App.css';
import Person from './Components/Person';
import PersonClass from './Components/PersonClass';

const App = props => {
    const [personState] = useState({
        persons: [
            { name: 'Jan', age: 28 },
            { name: 'Roy', age: 10 },
            { name: 'Test', age: 99 }
        ]
    });

    const [buttonState, setButtonState] = useState({
        isToggleOn: true
    });

    const handleClick = () => {
        setButtonState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    };

    return (
        <div className='App'>
            <h1>Hi, I'm a React app</h1>
            <p>This is working!</p>
            <button onClick={handleClick}>Button state is {buttonState.isToggleOn ? 'ON' : 'OFF'}</button>
            <Person name={personState.persons[0].name} age={personState.persons[0].age}>
                Person child content
            </Person>
            <Person name={personState.persons[1].name} age={personState.persons[1].age}>
                Person child content
            </Person>
            <PersonClass name={personState.persons[2].name} age={personState.persons[2].age}>
                PersonClass child content
            </PersonClass>
        </div>
    );
};

export default App;
