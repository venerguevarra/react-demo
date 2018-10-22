import React, { Component } from 'react';

class InlineCssComponent02 extends Component {
    render() {
        //2. INLINE STYLING
        const CSSDemoStyle = {
            margin: '40px',
            border: '5px dotted blue'
        };
        const CSSDemoStyle_Content = {
            fontSize: '15px',
            textAlign: 'center',
            backgroundColor: 'lightgray'
        };

        return (
            <div>
                <h3>2. INLINE STYLING</h3>
                <p>Styles are declared inline as JS Objects</p>
                <div style={CSSDemoStyle}>
                    <p style={CSSDemoStyle_Content}>INLINE STYLING</p>
                    <p style={{
                        fontSize: '15px',
                        textAlign: 'center',
                        backgroundColor: 'lightgray'}}>INLINE STYLING Directly</p>
                </div>
            </div>
        );
    }
}

export default InlineCssComponent02;