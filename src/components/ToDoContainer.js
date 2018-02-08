import React from 'react'
import ToDoNew from './ToDoNew'
import ToDoList from './ToDoList'

class ToDoContainer extends React.Component {

    state = {
        listItems: [],
        id: 0
    }

    handleNewClick = (newInput) => {
        if (newInput && newInput.trim().length !== 0) {
            this.setState(oldState => ({
                listItems: [...oldState.listItems, {item: newInput, id: oldState.id}],
                id: oldState.id += 1
            }))
        }
    }

    handleRemoveClick = (index) => {
        this.setState(oldState => ({
            listItems: oldState.listItems.filter(i => i.id !== index)
        }))
    }

    render() {
        return (
            <React.Fragment>
                <h1>To Do List</h1>
                <ToDoNew handleNewClick={this.handleNewClick}/>
                <ToDoList list={this.state.listItems} handleRemove={this.handleRemoveClick}/>
            </React.Fragment>
        )
    }
}

export default ToDoContainer