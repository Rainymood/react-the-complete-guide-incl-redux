import React, { Component } from 'react';

class personClass extends Component {
    render() {
        return (
            <p>
                I'm {this.props.name} and I'm {this.props.age} years old.
            </p>
        );
    }
}

export default personClass;
