import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './index.css';
import {Provider } from "react-redux";
import { createStore } from "redux";
import { searchRobot } from './reducers'


const store = createStore(searchRobot); //searchRobot Reducer에 대한 store를 만든다.
  
//store을 component에게 아래로 전달한다.
ReactDOM.render(
    <Provider store={store}> 
      <App />
    </Provider>,
    document.getElementById('root')
);

