import React from 'react'

class ToDoNew extends React.Component {
    constructor(props) {
        super(props)
        this.handleNewClick = this.handleNewClick.bind(this)
    }

    handleNewClick() {
        this.props.handleNewClick(this.refs.input.value)
        this.refs.input.value = ''
    }

    render() {
        return (
            <div>
                <input placeholder='new' type='text' ref='input'/>
                <button type='button' onClick={this.handleNewClick}>+</button>
            </div>
        )
    }
}

export default ToDoNew