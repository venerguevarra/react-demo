import React, { Component } from 'react';

class NameForm extends Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    textOnChange (e) {
        alert('The value is: ' + e.target.value);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        alert('The value is: ' + this.input.value);
    }

    render() {
        return (
            <div className="post-container">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <label>Name</label>
                    <input type="text" ref={(name) => this.name = name} />
                    <input type="submit" value="Submit" />
                </form>

                <br/>

                <input placeholder="Ex. bind" type="text" onChange={this.textOnChange}/>
            </div>
        );
    }
}

export default NameForm;