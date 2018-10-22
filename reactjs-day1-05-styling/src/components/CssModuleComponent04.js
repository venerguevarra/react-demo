import React, { Component } from 'react';
import cssStyle from './CssModuleComponent04.css';

class CssModuleComponent04 extends Component {
    render() {
        return (
            <div>
                <h3>4. CSS MODULES</h3>
                <div className={cssStyle.CSSDemo_fromCSSModule}>
                    <p className={cssStyle.CSSDemo_fromCSSModule_Content}>CSS Modules</p>
                </div>

            </div>
        );
    }
}
export default CssModuleComponent04;