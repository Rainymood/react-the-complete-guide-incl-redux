# Button onClick

```bash
git checkout -b 007-button-onclick
git checkout 
npm start
```

Should result in something like this

![](/doc/images/007-button-onclick.png)

First we need to make something happen when we press the button. We do this
by adding a reference to a function to the `onClick` prop in the `<button>`
component. The syntax for this is very similar to that of HTML. Compare the HTML syntax

```HTML
<button onclick="activateLasers()">
  Activate Lasers
</button>
```

With that of React

```JS
<button onClick={activateLasers}>
  Activate Lasers
</button>
```

Now, we have to create a function that does something when a user clicks on
the button. **This is where ES6 really shines**. We start with the functional
approach and then show why this is preferred over the other method.

We create a button with a reference to `this.handleClickArrow`. We show the
state to be `ON` or `OFF`.

```JS
<button onClick={this.handleClickArrow}>
    Button name (arrow fun) {this.state.isToggleOn ? 'ON' : 'OFF'}
</button>
```

All that we have to do now is to write a function that sets the state properly

```JS
handleClickArrow = () => {
    this.setState(state => ({
        isToggleOn: !state.isToggleOn
    }));
};
```

And of course we have to initialise the state in the constructor.

```JS
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...
            isToggleOn: true
        };
```

Consider now **if we do not use an arrow function**. We add a reference to the following function `onClick`

```JS
<button onClick={this.handleClick}>Button name (regular) {this.state.isToggleOn ? 'ON' : 'OFF'}</button>
```

And write a similar function that toggles the state. 

```JS
handleClick() {
    this.setState(state => ({
        isToggleOn: !state.isToggleOn
    }));
}
```

If we run this now our application crashes because `this` is undefined in
`handleClick()`. If we wish to make this run we must `bind`.

```JS
class App extends Component {
    constructor(props) {
        super(props);
        ...

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }
```

The React docs, [found here](https://reactjs.org/docs/handling-events.html),
say this about `this`.

>You have to be careful about the meaning of `this` in JSX callbacks. In
JavaScript, **class methods are not bound by default**. If you forget to bind
`this.handleClick` and pass it to `onClick`, this will be undefined when the
function is actually called.

## Key learnings

* You can listen to buttonclicks in React with `onClick`. 
* Pass a reference `<button onClick={this.func} />` and not a function call directly `<button onClick={this.func()}`
* Prefer to use ES6 arrow functions over standard methods. This avoids having to bind `this`. 