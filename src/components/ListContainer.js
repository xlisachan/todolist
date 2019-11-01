import React, { Component } from 'react';
import List from './List';

class ListContainer extends Component {
    state = {
        tasks: [],
        userInput: '',
        alert: false,
        error: false
    }

    componentDidMount() {
        var data = require('../../src/data.json');
        this.setState({ tasks: data })
    }

    handleUserInput = e => {
        this.setState({
            alert: false,
            userInput: e.target.value
        })
    }
    
    add = (e) => {
        e.preventDefault();
        if (this.state.userInput) {
            this.setState(prevState => ({
                tasks: [
                    ...prevState.tasks,
                    {
                        id: this.nextId(),
                        task: this.state.userInput
                    }
                ],
                userInput: '',
                alert: false,
                error: false
            }))
            this.inputEl.value=""
        } else {
            this.setState({
                alert: true,
                error: true
            })
        }
    }

    nextId = () => {
        this.uniqueId = this.uniqueId || 4
        return this.uniqueId++
    }

    update = (newText, i) => {
        this.setState(prevState => ({
            tasks: prevState.tasks.map(
                task => (task.id !== i) ? task : {...task, task: newText}
            )
        }))
    }

    remove = (id) => {
        this.setState(prevState => ({
            tasks: prevState.tasks.filter(task => task.id !== id)
        }))
    }

    closeError = () => {
        this.setState({ error: false })
    }

    render() {
        return (
            <List
                ref={input => this.inputEl = input}
                alert={this.state.alert}
                error={this.state.error}
                tasks={this.state.tasks}
                onChange={this.handleUserInput}
                onSubmit={this.add}
                onUpdate={this.update}
                onRemove={this.remove}
                onClose={this.closeError}
            />
        )
    }
}

export default ListContainer;