# State

```bash
git checkout -b 006-state
git checkout 78768ce0d152fdfd380dc804ed65a0d4254fbb6c
npm start
```

Should result in something like this

![](/doc/images/006-state.png)

State can be thought of (for beginners) as an internal variable for your component. 

States are hugely important because in React there is a function called
`setState()` which, when called, makes React re-render the DOM (or at least
the relevant bits of it). **This is what makes react reactive**.

`state` is a special property of each React component that extends
`Component`. We can specify the state in the component and update it with
`setState()`, but this is handled in another lesson.

```JS
class App extends Component {
    state = {
        persons: [
            { name: 'Jan', age: 28 },
            ...
        ]
    };

    render() {
        return (
            <div>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
            </div>
            ...
        );
    }
}
```

## Key learnings

* State can be thought of as an "internal variable" for your components