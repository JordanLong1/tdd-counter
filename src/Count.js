import React from 'react'; 


class Count extends React.Component {

    state = {count: 0}

    handleIncrement = () => {
        this.setState({ count: this.state.count + 1})
    }

    handleDecrement = () => {
        this.setState({count: this.state.count - 1})
    }

    render() {
        return (
            <div className='count-container'>
                <button className='increment'
                onClick={this.handleIncrement}
                >increment
                </button>
                <p>The current count is: {this.state.count}</p>
                <button className='decrement'
                onClick={this.handleDecrement}
                >
            Decrement
                </button>
            </div>
        )
    }; 
}; 


export default Count