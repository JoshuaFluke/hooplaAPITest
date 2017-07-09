import store from './reduxStore/store';
import BookDisplay from './bookDisplay'
import { Provider } from 'react-redux';

import React, { Component } from 'react';

import './App.css';
import  './normalize.css'
import './bootstrap.css'


class App extends Component {


  render() {

      return (

        <Provider store={ store }>
          <BookDisplay/>
        </Provider>
    );
  }
}



export default App;
