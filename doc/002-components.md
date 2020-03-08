# Components

```bash
git checkout 66be8779cbf64476c7a1a2cf93819d6c62d08461
npm start
```

Should return something like this

![](/doc/images/002-components.png)

Everything in React is based around components. Components are the individual building blocks of your web applications. 
A component is nothing more than a **piece of JavaScript returning some JSX/HTML**. 

Components come in two key flavors: class-based ones and functional ones. 

Class-based components

```JS
class App extends Component {
    render() {
        return (
            <div className='App'>
                <h1>Hi, I'm a React app</h1>
                <p>This is working!</p>
            </div>
        );
    }
}
```

Functional components

```JS
function App() {
    return (
        <div className='App'>
            <h1>Hi, I'm a React app</h1>
            <p>This is working!</p>
        </div>
    );
}
```

## Key learnings

* Components are pieces of code that return some JSX/HTML.
* There are two flavours of components: class-based and functional.
