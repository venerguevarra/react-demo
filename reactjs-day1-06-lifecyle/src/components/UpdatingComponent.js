import React, { Component } from 'react';

/*
Updating methods
    componentWillReceiveProps
    shouldComponentUpdate
    componentWillUpdate
    render
    componentDidUpdate
*/
class UpdatingComponent extends Component {
    constructor() {
        super();
        this.state = {
            activity: ''
        }
    }

    componentWillReceiveProps(props) {
        // invoked every time component recieves new props.
        // does not before initial 'render'
        if(props.activity !== this.state.activity) {
            this.setState({
                activity: props.activity
            });
            //console.log('componentWillReceiveProps');
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        // invoked before every update (new props or state).
        // does not fire before initial 'render'.
        return nextProps !== this.props;
      }

    componentWillUpdate() {
        // invoked immediately before update (new props or state).
        // does not fire before initial 'render'.
        // NO ACCESS TO this.setState
    }

    componentDidUpdate() {
        // invoked immediately after DOM updates
        // does not fire after initial 'render'
    }

    render() {
        console.log('render', this.state.activity);
        return (
            <div>
                <h2>Updating Component Lifecycle {this.state.activity}</h2>
            </div>
        );
    }
}

export default UpdatingComponent;