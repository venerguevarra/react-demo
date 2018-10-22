import React, {Component} from 'react';

export default class PrimaryContent extends Component {
    render() {
        return (
            <div>
                {this.props.isAdmin? <span><h2>Admin Content</h2></span>: null}
                Primary Content
            </div>
        );
    }
}