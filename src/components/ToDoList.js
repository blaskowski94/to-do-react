import React from 'react'

class ToDoList extends React.Component {
    handleRemove = id => () => this.props.handleRemove(id)

    renderList(listItems) {
        return listItems.map((listVal) =>
            <li key={listVal.id}>
                <label>{listVal.item}</label>
                <button onClick={this.handleRemove(listVal.id)}>X</button>
            </li>
        )
    }

    render() {
        return <ul>{this.renderList(this.props.list)}</ul>
    }
}

export default ToDoList