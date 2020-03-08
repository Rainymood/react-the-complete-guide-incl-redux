# Props

```bash
git checkout ...
npm start
```

Should result in something like this

![]()

Working with *props* is easy in React. Depending on whether we are using a
class-based component or a functional component we have a different way of
accessing the props.

For functional components we can simply pass `props` as an argument

```JS
const person = props => {
    return (
        <p>
            I'm {props.name} and I'm {props.age} years old.
        </p>
    );
};
```

In class-based components we can access the props with `this.props`

```JS
class personClass extends Component {
    render() {
        return (
            <p>
                I'm {this.props.name} and I'm {this.props.age} years old.
            </p>
        );
    }
}
```

Changing the properties is easy

```JS

class App extends Component {
    render() {
        return (
            <div className='App'>
                <Person name="Joe" age="10"/>
                <PersonClass name="Jan" age="20"/>
            </div>
        );
    }
}
```

## Key learnings

* Use curly braces (`{..}`) to render dynamic content in JSX. 