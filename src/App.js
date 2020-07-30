import React, { Component } from "react";
import { robots } from './robots';
import Cardlist from "./Cardlist";
import Searchbox from './Searchbox';
import './App.css';


class App extends Component {
    state = {
        robots,
        filteredInput: ''
    }

    onChangeInput = (event) => {
        this.setState({ filteredInput: event.target.value });
        console.log(this.state.filteredInput);
    };


    render() {
        const filtered_Robot = this.state.robots.filter((robot) => {
            return robot.name.toLowerCase().includes(this.state.filteredInput.toLowerCase());
         });
        return (
            <div className="tc">
                <h1 className="f1">Robot friends</h1>
                <Searchbox changeInput={this.onChangeInput}/>
                <Cardlist robots={filtered_Robot } />
            </div>
        )
    }
    
}
export default App;

