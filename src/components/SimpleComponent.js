import React, {Component} from 'react';

class SimpleCompnent extends Component {
    constructor(props) {
        super(props);

        // Initial state here...
        this.state = {
            mood: "happy"
        };
    }

    handleClick = () => {
        const newMood = this.state.mood === 'happy'
            ? 'sad'
            : 'happy';
        this.setState({mood: newMood});
    }

    render() {
        return <div onClick={this.handleClick}>{this.state.mood}</div>;
    }
}

export default SimpleCompnent;
