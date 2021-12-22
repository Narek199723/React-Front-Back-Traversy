import React, { useCallback, useState } from "react";

const UseCallbackExample = () => {
    const [tasks, setTasks] = useState([]);

    const addTask = useCallback(() => {
        setTasks(prev => [...prev, "Some Task"]);
    }, [setTasks]);

  return (
        <div>
            <Button addTask={addTask} />
            {tasks.map((task, index) => (
                <p key={index}>{task}</p>
            ))}
        </div>
    );
};

const Button = React.memo(({ addTask }) => {
    console.log("BUTTON is rendered to the screen");
    return (
        <div>
            <button onClick={addTask} className="btn btn-primary">
                Add Task
            </button>
        </div>
    );
});

export default UseCallbackExample;
