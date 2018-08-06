import React, { Component } from 'react';
import './App.css';
import ButtonBox from "./ButtonBox";
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import store from './store/store';


class App extends Component {

  constructor(props) {
      super(props);
  }

  render() {
      return (
          <div className="component-app">
              <Provider store={store}>
                  <ButtonBox clickHandler={this.handleClick}/> 
              </Provider>
          </div>
      );
  }
}

export default App;
