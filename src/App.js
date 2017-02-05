import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            todos: [
                { id: 1, name: "Learn JSX", isComplete: true },
                { id: 2, name: "Build awesome app", isComplete: false },
                { id: 3, name: "Ship it!", isComplete: false }
            ],

            currentTodo: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            currentTodo: e.target.value
        });
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>React Todos</h2>
                </div>
                <div className="Todo-App">
                    <form action="">
                        <input type="text" onChange={this.handleInputChange} value={this.state.currentTodo} />
                    </form>
                    <div className="Todo-List">
                        <ul>
                            {this.state.todos.map(t =>
                                <li key={t.id}>
                                    <input type="checkbox" defaultChecked={t.isComplete} />{t.name}
                                </li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
