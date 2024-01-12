import React, { useState } from 'react';

const TaskList = ({ tasks, onChangeTask, onDeleteTask }) => {
    return (
        <div>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <Task task={task} onchange={onChangeTask} onDelete={onDeleteTask}></Task>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default TaskList;


// Single task

function Task({ task, onchange, onDelete }) {

    const [isEditing, setIsEditing] = useState(false);
    let taskContent;

    if (isEditing) {
        taskContent = (
            <>
                <input value={task.text} onChange={(e) => {
                    onchange({
                        ...task,
                        text: e.target.value,
                    })
                }} />
                <button onClick={() => setIsEditing(false)}>Save</button>
            </>
        )
    } else {
        taskContent = (
            <>
                {task.text}
                <button onClick={() => setIsEditing(true)}>Edit</button>
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


