# Notes to React the Complete Guide

These are my personal notes accompanying the course [React - The complete guide (incl Hooks, React Router, Redux)](https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/8090862#notes) from Udemy.

The goal of this repository is to illustrate several key components of React
that I learned throughout the course. Please note that this list is far from exhaustive. With each lesson I try to provide a **runnable working codebase**.

To facilitate this last goal each of the lessons will take you back to a particular commit which is runnable with `npm start`. Once you have checked out that particular commit you can run it and play around with it and see the concept in action for yourself. 

If you run into any trouble feel free to reach out to me. 

## Setup

To get started, clone the repo and install the node modules

```bash
git clone https://github.com/Rainymood/react-the-complete-guide-incl-redux
cd react-the-complete-guide-incl-redux
npm install
```

## Usage

Each of these lessons will start with a block similar to 

```bash
git branch -b <branchname>
git checkout <sha1 commit>
npm start
```

This will take you back to the revision that was used to write that
particular lesson so you can run it and play around with it. Once you are done you can use 

```bash
git checkout master
```

To return to the main branch and undo all the changes that you made.

## Index

* [1. Creating your react app](doc/001-create-react-app.md)
* [2. Components](doc/002-components.md)
* [3. Dynamic content](doc/003-dynamic-content.md)
* [4. Props](doc/004-props.md)
* [5. Children](doc/005-children.md)
* [6. State](doc/006-state.md)
* [7. Button onClick](doc/007-button-onclick.md)
* [8. React hooks](doc/008-react-hooks.md)
    * Section 3 module 45