//import Button from "./Button";
import React from "react";
import PropTypes from "prop-types";
import Button from  "./components/Button";
import Display from  "./components/Display";
// import calculate from "./calculate";

class ButtonBox extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = buttonName => {
    };

    render() {
        return (
            
            <div className="component-button-box">
                <Display/>

                <div>
                    <Button name="AC" clickHandler={this.handleClick}>{'AC'}</Button>
                    {/* <Button name="+/-" clickHandler={this.handleClick}>{'+/-'}</Button> */}
                    <Button name="sqr" clickHandler={this.handleClick} >SQRjjjjj</Button>
                    <Button name="%" clickHandler={this.handleClick}>{'%'}</Button>
                    <Button name="/" clickHandler={this.handleClick}>{'÷'}</Button>
                </div>
                <div>
                    <Button name="7" clickHandler={this.handleClick}>{'7'}</Button>
                    <Button name="8" clickHandler={this.handleClick}>{'8'}</Button>
                    <Button name="9" clickHandler={this.handleClick}>{'9'}</Button>
                    <Button name="*" clickHandler={this.handleClick}>{'*'}</Button>
                </div>
                <div>
                        <Button name="4" clickHandler={this.handleClick} >4</Button>
                        <Button name="5" clickHandler={this.handleClick} >5</Button>
                        <Button name="6" clickHandler={this.handleClick} >6</Button>
                        <Button name="-" clickHandler={this.handleClick} orange >-</Button>
                </div>
                <div>
                        <Button name="1" clickHandler={this.handleClick} >1</Button>
                        <Button name="2" clickHandler={this.handleClick} >2</Button>
                        <Button name="3" clickHandler={this.handleClick} >3</Button>
                        <Button name="+" clickHandler={this.handleClick} orange >+</Button>
                    </div>
                    <div>
                        <Button name="0" clickHandler={this.handleClick} wide >0</Button>
                        <Button name="." clickHandler={this.handleClick} >.</Button>
                        <Button name="backspace" clickHandler={this.handleClick} >Backspace</Button>
                        <Button name="=" clickHandler={this.handleClick} orange >=</Button>
                    </div>
                
                
                </div>    
            
    );
  }
}
ButtonBox.propTypes = {
  clickHandler: PropTypes.func,
};
export default ButtonBox;