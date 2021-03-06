import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = (props) => {
    return (
        <div className="Todo-List">
            <ul>
                {props.todos.map(t => <TodoItem key={t.id} {...t} />)}
            </ul>
        </div>
    )
}

TodoList.propTypes = {
    todos: React.PropTypes.array.isRequired
}