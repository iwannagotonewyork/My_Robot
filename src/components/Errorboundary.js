import React from 'react';

class Errorboundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        } 
    }

    componentDidCatch(error, info) {
        this.setState({hasError: true});
    }

    render() {
        if(this.state.hasError) {
            return <h1>Sorry... There's an Error..</h1>
        } else {
            return this.props.children
        }
    }
}

export default Errorboundary;