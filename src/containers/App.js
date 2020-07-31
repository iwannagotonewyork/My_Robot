import React, { Component } from "react";
import Cardlist from "../components/Cardlist";
import Searchbox from '../components/Searchbox';
import './App.css';
import Scroll from '../components/Scroll';
import Errorboundary from "../components/Errorboundary";
import { connect } from 'react-redux';

import { setSearchField } from '../action'; 
// action을 import 한다.

// Connet
// filteredInput -> 우리가 return 할 것 -> App 컴포넌트에서 props로 쓰일 것
const mapStateToProps = state => {
    return {
        searchField: state.searchField
    }
}

// dispatch는 action(setSearchField)을 reducer로 전달하기 위해 필요한 것
const mapDispatchToProps = dispatch => {
    return {
        onChangeInput: (event) => dispatch(setSearchField(event.target.value))
    }
}

// --------- --------- --------- --------- ---------

class App extends Component {
    state = {
        robots: [],
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                return response.json();
            })
            .then(user => this.setState({robots: user}));
    }

    render() {
        const { robots } = this.state;
        const {searchField, onChangeInput} = this.props; //수정함
        const filtered_Robot = robots.filter((robot) => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase()); //include 뒤에 수정함
         });
         return !robots.length ? 
            (
                <div className="Loading">
                    <h1 className="tc">loading...</h1>            
                </div>
            ) : (
                <div className="tc">
                    <h1 className="f1">Robot friends</h1>
                    <Searchbox changeInput={onChangeInput}/> 
                    <Scroll>
                        <Errorboundary>
                            <Cardlist robots={ filtered_Robot } />  
                        </Errorboundary>
                    </Scroll>
                </div>
            )
          
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
//mapStateToProps -> 이 state를 내가 듣고 있꼬
//mapDispatchToProps -> 이 action에 관심있다
//이 두 props를 App으로 보낸다.
