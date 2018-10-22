import React, {Component} from 'react';
import styled from 'styled-components';

// https://www.styled-components.com/
// $ yarn add styled-components
class StyledComponent05 extends Component {
    render() {
        //5. STYLED COMPONENTS
        const Div = styled.div`
            margin: 40px;
            border: 5px dotted blue;
            &:hover {
            background-color: ${(props) => props.hoverColor};
        }`;

        const Paragraph = styled.p`
            font-size: 15px;
            text-align: center;
            background-Color: lightgray;
        `;

        return (
            <div>

                <h3>5. STYLED COMPONENTS</h3>
                <p></p>
                <Div hoverColor="red">
                    <Paragraph>Styled Components</Paragraph>
                </Div>

            </div>
        );
    }
}
export default StyledComponent05;