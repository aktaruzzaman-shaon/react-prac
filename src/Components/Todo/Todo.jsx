import React, { useReducer, useState } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import Prac from './Prac';

const Todo = () => {
    const [tasks, dispatch] = useReducer(taskReducer, initialTasks)

    function taskReducer(tasks, action) {
        switch (action.type) {

            case 'added': {
                return [
                    ...tasks,
                    {
                        id: action.id,
                        text: action.text,
                        done: false
                    }
                ]
            }

            case 'changed': {
                return tasks.map((t) => {
                    if (t.id === action.task.id) {
                        return action.task
                    } else {
                        return t
                    }

                })
            }

            case 'deleted': {
                return (
                    tasks.filter((task) => task.id !== action.taskId)
                )
            }

            default: {
                return tasks
            }
        }
    }

    function handleAddTask(text) {
        dispatch({
            type: 'added',
            id: nextId++,
            text: text,
        })
    }

    function handleChangeTask(task) {
        dispatch({
            type: "changed",
            task: task,
        })
    }

    function handleDeleteTask(taskId) {
        dispatch({
            type: 'deleted',
            taskId: taskId,
        })
    }


    return (
        <div>
            <h1>Task management</h1>
            <AddTask onAddTask={handleAddTask}></AddTask>
            <TaskList
                tasks={tasks}
                onChangeTask={handleChangeTask}
                onDeleteTask={handleDeleteTask}
            ></TaskList>
            <Prac></Prac>
        </div>
    );
};

export default Todo;

let nextId = 3;
const initialTasks = [
    { id: 0, text: 'Visit Kafka Museum', done: false },
    { id: 1, text: 'Watch a puppet show', done: false },
    { id: 2, text: 'Lennon Wall pic', done: true },
]