import React, { Component } from 'react';

class SubscriptionSummary extends Component {
    render() {
        return (
            <div className="post-container">
                <div>
                    <p>First Name: {this.props.subscriptionData.firstName}</p>
                    <p>Last Name: {this.props.subscriptionData.lastName}</p>
                    <p>Email: {this.props.subscriptionData.email}</p>
                    <p>Username: {this.props.subscriptionData.username}</p>
                    <p>Password: {this.props.subscriptionData.password}</p>
                </div>
            </div>
        );
    }
}

export default SubscriptionSummary;