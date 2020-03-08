# React hooks

```bash
git checkout -b 008-react-hooks
git checkout ...
npm start
```

Should look something like this

![](/doc/images/008-hooks.png)

**Manging your state in functional components is done with React hooks.**

To manage our state in our functional component we must first import it

```JS
import React, { useState } from 'react';
```

`useState()` returns an array with two things: The first element it returns
is the state or the updated state, and the second element is a function that
allows us to update the state in such a way that the DOM is aware of this and
gets rerendered.

This is the complete `App.js`. Take note of several things: 

* We have a functional component called `App` now
* We do not have a `render()` function, only a `return()` function
* `[state, setState] = useState()` is initialised with the initial state and returns two things:
    * The state
    * A function to update the state
* All references to `this` are removed in favor of `personState` and `buttonState`.
* We use multiple `useStates()` such that we can update different state slices

```JS
import React, { useState } from 'react';
...

const App = (props) => {
    const [personState, personSetState] = useState({
             persons: [
                 ...
            ]
        });

    const [buttonState, setButtonState] = useState({
        isToggleOn: true
    })

    const handleClick = () => {
        setButtonState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    };
    
    return (
        <div className='App'>
        ...
        <button onClick={handleClick}>Button state is {buttonState.isToggleOn ? 'ON' : 'OFF'}</button>
        <Person name={personState.persons[0].name} age={personState.persons[0].age}>
            Person child content
        </Person>
    </div>
    )
}
```


We initialise the state by passing it through `useState(initState)`.

```JS
const [personState, personSetState] = useState({
            persons: [
            { name: 'Jan', age: 28 },
            { name: 'Roy', age: 10 },
            { name: 'Test', age: 99 }
        ]
    });
```

To add a function to our functional component we use another arrow function!
We now use `setButtonState()` that `useState()` returned instead of `setState()`!

Then of course we must change the funcion that happens onClick

And of course we must remove all `this` references as we are not in a
class-based component anymore

```JS
// <button onClick={this.handleClick}>Button state is {this.state.isToggleOn ? 'ON' : 'OFF'}</button>
<button onClick={handleClick}>Button state is {personState.isToggleOn ? 'ON' : 'OFF'}</button>
```

When you use a single `useState` call you must make sure you copy over the
whole state. This is not that elegant. A more elegant solution is to use
**multiple state slices** and have multiple `useState` calls in your
functional components.


## Key learnings

* `useState()` returns two things: the state and a function to update the state such that the DOM is aware
* Use multiple state slices if you use hooks. This is because you need to update the whole state
* Functional components only have a `return()` function, not a `render()` function
* You can add functions to functional components by using arrow functions 