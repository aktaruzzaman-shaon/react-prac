import React, { useState } from 'react';

const TaskList = ({ tasks, onChangeTask, onDeleteTask }) => {
    return (
        <div>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>

                    </li>
                ))}
            </ul>
        </div>
    );
};
export default TaskList;


// Single task

function task({ task, onChange, onDelete }) {
    const [isEditing, setIsEditing] = useState(false);
    let taskContent;
    if (isEditing) {
        taskContent = (
            <>
                <input value={task.text} onchange={(e) => {
                    onChange({
                        ...task,
                        text: e.target.value,
                    })
                }} />
                <button></button>
            </>
        )
    }

    return (
        <label>
            <input
                type="checkbox"
                checked={task.done}
                onChange={(e) => {
                    onchange({
                        ...task,
                        done: e.target.checked
                    })
                }}

            />
            {taskContent}
            <button onClick={() => onDelete(task.id)}>Delete</button>
        </label>
    )
}


