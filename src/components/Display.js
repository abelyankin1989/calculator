import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {change_display_value,  set_operator} from '../actions/action';

class Display extends Component{

    constructor(props){
        super(props);
        this.keyPress = this.keyPress.bind(this);
        this.state = {display_value:this.props.display_value}
        this.keyPress = this.keyPress.bind(this);
    };

    componentWillReceiveProps(nextProps) {
        this.setState({ display_value: nextProps.display_value });
    }
    
    keyPress = (e) => {

        if(/[0-9]+/.test(e.key)) {
            this.setState({ display_value: e.key });

            return this.props.change_display_value(
                this.props.display_value ? this.props.display_value + '' + e.key : e.key
            );
        }
        
    }
    
    render() {
        return(
            <div className="component-display">
                <div>
                    <input type="text" name="display" onKeyDown={this.keyPress} value={this.state.display_value}/>
                </div> 
            </div>
    )}
}

Display.defaultProps = { display_value:'' };

export default connect(
    state => ({
       display_operator: state.display_operator,
       display_value: state.display_value,
    }),
    dispatch => ({
        change_display_value: bindActionCreators(change_display_value, dispatch),
    })
)(Display);