import React from "react";
import TaskCard from "./TaskCard";

const TaskColumn = ({status, tasks}) => {
    
    return (
        <div>
            <h2>{status}</h2>
            {tasks.map((task) => (<TaskCard key={task.id} task={task}/>))}
        </div>
    );
};

export default TaskColumn;