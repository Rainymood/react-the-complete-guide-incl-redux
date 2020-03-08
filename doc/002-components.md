# Components

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