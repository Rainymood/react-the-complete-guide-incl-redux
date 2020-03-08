# Children

```bash
git checkout -b 005-children
git checkout 3d8a7e3a98fd669eeacc7c8a848597a37e78c045
npm start
```

Should result in something like this

![](/doc/images/005-children.png)

Children are an important concept in React (and in life). Given a component
like <Person>Hello</Person> we can access the content between the beginning
and ending of the component `<Person>` by accessing the `children` prop of
the component. Note that the children property can include simple HTML but
also other React components.

Again, because `children` is an attribute of `props` we have different ways of accessing them depending on whether we use functional of class-based components.

In class-based components we use `this.props.children`

```JS
class personClass extends Component {
    render() {
        return (
            <div>
                <p>
                    I'm {this.props.name} and I'm {this.props.age} years old.
                </p>
                <p>This is my child content: {this.props.children}</p>
            </div>
        );
    }
}
```

In functional components we can use `props.children` directly

```JS
const person = props => {
    return (
        <div>
            <p>
                I'm {props.name} and I'm {props.age} years old.
            </p>
            <p>This is my child content: {props.children}</p>
        </div>
    );
};
```

## Key learnings

* The thing between `<Component>THING</Component>` is called a child
* We can get access to the child by calling the `children` attribute from `props`
* In class-based components we use `this.props.children`
* In functional components we use `props.children` directly
