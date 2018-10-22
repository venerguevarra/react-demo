import React, { Component } from 'react';

/*
Mounting Methods
    constructor()
    componentWillMount()
    render()
    componentDidMount()
Updating methods
    componentWillReceiveProps
    shouldComponentUpdate
    componentWillUpdate
    render
    componentDidUpdate
*/
class CustomComponent extends Component {
    constructor(props) {
        super(props);
        console.log('constructor');
    }

    componentWillMount() {
        // invoked once.
        // fires before initial 'render'
        console.log('componentWillMount');
    }

    componentDidMount() {
        // good for AJAX: fetch, ajax, or subscriptions.
        // invoked once (client-side only).
        // fires before initial 'render'
        console.log('componentDidMount');
    }

    render() {
        console.log('render');
        return (
            <div>
                <h2>Mounting Component Lifecycle</h2>
            </div>
        );
    }
}

export default CustomComponent;