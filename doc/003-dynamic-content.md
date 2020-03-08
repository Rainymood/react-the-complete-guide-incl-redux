# Dynamic content

```bash
git checkout
npm start
```

Should result in something like this

![](/doc/images/003-dynamic.png)

Rendering dynamic content is easy in React by using the curly braces (`{..}`). For example in the following functional class called person we have: 

```JS
const person = () => {
    return (
        <p>I'm a person and I'm {Math.floor(Math.random() * 30)} years old.</p>
    )
}
```

## Key learnings

* Use curly braces (`{..}`) to render dynamic content in JSX. 