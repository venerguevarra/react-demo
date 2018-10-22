import React, { Component } from 'react';
import cssStyle from './InlineCssStyleComponent03';

class InlineCssComponent03 extends Component {
    render() {
        return (
            <div>
                <h3>3. INLINE STYLING</h3>
                <p>Styles are declared inline as JS Objects</p>
                <div style={cssStyle.CSSDemoStyle}>
                    <p style={cssStyle.CSSDemoStyle_Content}>INLINE STYLING</p>
                    <p style={{
                        fontSize: '15px',
                        textAlign: 'center',
                        backgroundColor: 'lightgray'}}>INLINE STYLING Directly</p>
                </div>
            </div>
        );
    }
}

export default InlineCssComponent03;