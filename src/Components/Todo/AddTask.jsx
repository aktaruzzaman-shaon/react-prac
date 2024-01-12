import React, { useState } from 'react';

const AddTask = ({ onAddTask }) => {

    const [text, setText] = useState('');

    return (
        <div>
            <input placeholder='Add task' value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={() => {
                setText('');
                onAddTask(text);
            }}>Add</button>
        </div>
    );
};

export default AddTask;