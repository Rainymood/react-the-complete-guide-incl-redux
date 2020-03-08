import React, { Component } from 'react';

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

export default personClass;
