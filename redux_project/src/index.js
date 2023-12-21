import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App.js';
import { reducer } from './config/Reducer.js';
import { legacy_createStore } from 'redux';
import { Provider } from 'react-redux';


const str = legacy_createStore(reducer)
const root = document.getElementById('root');

ReactDOM.render(<Provider store={str}>< App /></Provider>,
  root);