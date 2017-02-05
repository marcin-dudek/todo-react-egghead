import React from 'react'

export const TodoList = (props) => {
    return (
        <div className="Todo-List">
            <ul>
                {props.todos.map(t =>
                    <li key={t.id}>
                        <input type="checkbox" defaultChecked={t.isComplete} />{t.name}
                    </li>)
                }
            </ul>
        </div>
    )
}