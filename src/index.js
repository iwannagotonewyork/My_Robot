import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { robots } from './robots';
import Cardlist from "./Cardlist";

ReactDOM.render(
   <Cardlist robots={robots}/>
  ,document.getElementById('root')
);


{/* <Card id={robots[0].id} name={robots[0].name} email={robots[0].email}/>
    <Card />
    <Card />
    <Card /> */}