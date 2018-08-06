import React from "react";
//import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {change_display_value,  set_operator} from '../actions/action';
     //change_display_value2, change_operation, set_scale, set_operand,
import api from "../api/api";

class Button extends React.Component {

  handleClick = () => {
    let output;
    let {display_value,  display_operator} = this.props;

    this.props.clickHandler(this.props.name);

    let buttonName = this.props.name;
    
    if(!api.isNumber(buttonName)) {
      
        if(buttonName === '=') {
            
            api.param2 = display_value;
            output = api.calculate(api.param1, api.param2, display_operator);
        } else if(buttonName === '.') {

            if(!api.hasDot(display_value)) {
                output = !display_value? '0.': display_value + '.';
            } else {
                output = display_value;
            }

        } else if(buttonName === 'sqr') {

            output = api.calculate(display_value, null, buttonName);
        } else if(buttonName === 'AC') {
            output = 0;
        } else if(buttonName === 'backspace') {  
                if(display_value) {
                    display_value = display_value.toString();

                    if(display_value.length>1) {
                        output = display_value.substring(0, display_value.length - 1);
                    }
                }
        } else {  // math operator
            api.operator = buttonName;
            api.param1 = display_value;
            this.props.set_operator(buttonName);
            display_value = '';
        }

    }else { // number      
        output = !display_value? buttonName: display_value + buttonName;
    }
    
        return this.props.change_display_value(output);
  };

  render() {
    return (
        <div className = "component-button">
             <button onClick={this.handleClick}>{this.props.name}</button>
        </div>
    );
  }
}

export default connect(
    state => ({
        display_value: state.display_value,
        display_operator: state.display_operator, 
    }),
    dispatch => ({
        change_display_value: bindActionCreators(change_display_value, dispatch),
        set_operator: bindActionCreators(set_operator, dispatch),
  })
)(Button);