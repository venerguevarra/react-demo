import React, { Component } from 'react';
import './PlainCssComponent01.css';

class PlainCssComponent01 extends Component {
    render() {
        return (
            <div>
                <h3>1. PLAIN CSS STYLESHEET FILE</h3>
                <p>Styles are imported from a plain CSS File</p>
                <div className="CSSDemo">
                    <p className="CSSDemo_content">PLAIN CSS STYLESHEET FILE</p>
                </div>
            </div>
        );
    }
}

export default PlainCssComponent01;