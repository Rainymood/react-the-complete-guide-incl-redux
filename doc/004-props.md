# Props

```bash
git checkout 004-props
git checkout fcc8fdb63bfdd70286e7b6c23bca3f1dfbb16e92
npm start
```

Should result in something like this

![](/doc/images/004-props.png)

Working with *props* is easy in React. Depending on whether we are using a
class-based component or a functional component we have a different way of
accessing the props.

For functional components we can simply pass `props` as an argument. Note that the parentheses (`(...)`) can be omitted in the case of a single argument.

```JS
const person = (props) => {
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