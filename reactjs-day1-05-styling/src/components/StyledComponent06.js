import React, {Component} from 'react';
import classNames from 'classnames';
import './StyledComponent06.css';

//npm install classnames
class StyledComponent06 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 0,
            textClass: this.computeClass(0)
        }
    }

    computeClass = (val) => {
        return classNames({
          blue: val > 0,
          red: val < 0,
          italic: val % 2 === 0,
          normal: Math.abs(val % 2) === 1
        });
    }

    handleChange = (event) => {
        let val = event.target.value;
        let textClass = this.computeClass(val);
        this.setState({value: val, textClass: textClass});
    }
    render() {
        return (
            <div>
                <div className={this.state.textClass}>RESULT</div>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
            </div>
        );
    }
}
export default StyledComponent06;