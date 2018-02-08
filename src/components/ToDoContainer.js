import React from 'react'
import ToDoTitle from './ToDoTitle'
import ToDoNew from './ToDoNew'
import ToDoList from './ToDoList'

class ToDoContainer extends React.Component {

    constructor(props) {
        super(props)
        this.handleNewClick = this.handleNewClick.bind(this)
        this.handleRemoveClick = this.handleRemoveClick.bind(this)
        this.id = 0
        this.state = {
            listItems: []
        }
    }

    handleNewClick(newInput) {
        if (newInput && newInput.trim().length !== 0) {
            this.setState({listItems: [...this.state.listItems, {item: newInput, id: this.id}]})
            this.id += 1
        }
    }

    handleRemoveClick(index) {
        this.setState({
            listItems: this.state.listItems.filter(i => i.id !== index)
        })
    }

    render() {
        return (
            <React.Fragment>
                <ToDoTitle/>
                <ToDoNew handleNewClick={this.handleNewClick}/>
                <ToDoList list={this.state.listItems} handleRemove={this.handleRemoveClick}/>
            </React.Fragment>
        )
    }
}

export default ToDoContainer