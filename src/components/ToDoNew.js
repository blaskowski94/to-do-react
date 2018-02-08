import React from 'react'

class ToDoNew extends React.Component {

    state = {
        inputVal: ''
    }

    handleChange = e => {
        this.setState({inputVal: e.target.value})
    }

    handleNewClick = () => {
        this.props.handleNewClick(this.state.inputVal)
        this.setState({inputVal: ''})
    }

    render() {
        return (
            <React.Fragment>
                <input placeholder='new' value={this.state.inputVal} onChange={this.handleChange}/>
                <button onClick={this.handleNewClick}>+</button>
            </React.Fragment>
        )
    }
}

export default ToDoNew