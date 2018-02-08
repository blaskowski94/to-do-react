import React from 'react'
import ToDoItem from './ToDoItem'

class ToDoList extends React.Component {

    renderList(listItems) {
        return listItems.map((listVal) => {
            return <li key={listVal.id}><ToDoItem handleRemove={() => this.props.handleRemove(listVal.id)}
                                                  task={listVal.item}/></li>
        })
    }

    render() {
        return <ul>{this.renderList(this.props.list)}</ul>
    }
}

export default ToDoList