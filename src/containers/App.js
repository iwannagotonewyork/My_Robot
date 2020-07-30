import React, { Component } from "react";
import Cardlist from "../components/Cardlist";
import Searchbox from '../components/Searchbox';
import './App.css';
import Scroll from '../components/Scroll';
import Errorboundary from "../components/Errorboundary";

class App extends Component {
    state = {
        robots: [],
        filteredInput: ''
    }

    onChangeInput = (event) => {
        this.setState({ filteredInput: event.target.value });
        console.log(this.state.filteredInput);
    };

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                return response.json();
            })
            .then(user => this.setState({robots: user}));
    }

    render() {
        const {robots, filteredInput} = this.state;
        const filtered_Robot = robots.filter((robot) => {
            return robot.name.toLowerCase().includes(filteredInput.toLowerCase());
         });
         return !robots.length ? 
            (
                <div className="Loading">
                    <h1 className="tc">loading...</h1>            
                </div>
            ) : (
                <div className="tc">
                    <h1 className="f1">Robot friends</h1>
                    <Searchbox changeInput={this.onChangeInput}/>
                    <Scroll>
                        <Errorboundary>
                            <Cardlist robots={filtered_Robot } />
                        </Errorboundary>
                    </Scroll>
                </div>
            )
          
    }
}
export default App;

