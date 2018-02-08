import React from 'react'

class ToDoItem extends React.Component {
    render() {
        return (
            <label>{this.props.task}
                <button onClick={this.props.handleRemove}>X</button>
            </label>
        )
    }
}

export default ToDoItem