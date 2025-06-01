import React, { useContext, useState } from "react";
import { TaskContext } from "../contexts/TaskContext";
import { STATUSES } from "../constans/statuses";

const TaskCard = ({task}) => {
    const {tasks, setTasks} = useContext(TaskContext);
    
    const [isEditing, setIsEditing] = useState();
    const [editedTitle, setEditedTitle] = useState(task.title);
    const [editedDescription, setEditedDescription] = useState(task.description);

    const handleStatusChange = () => {
        const stat = task.status;
        if (stat === STATUSES.TODO) {
            const newTaskes = tasks.map((t) => t.id !== task.id ? t : {...t, status : STATUSES.IN_PROGRESS});
            setTasks(newTaskes);
        }
        else if (stat === STATUSES.IN_PROGRESS) {
            const newTaskes = tasks.map((t) => t.id !== task.id ? t : {...t, status : STATUSES.DONE});
            setTasks(newTaskes);
        }
    };

    const handleDelete = () => {
        const newTaskes = tasks.filter((t) => t.id !== task.id);
        setTasks(newTaskes);
    };

    const handleEdit = () => {
        const newTaskes = tasks.map((t) => t.id !== task.id ? t : {...t, title : editedTitle, description : editedDescription});
        setTasks(newTaskes);
        setIsEditing();
    };

    return (
        <div className="task-card">
            {!isEditing ? (
                <div>
                    <h4>{task.title}</h4>
                    <p>{task.description}</p>
                    <small>{task.createdAt}</small>
                    <div className="card-buttons">
                        {task.status != STATUSES.DONE && <button onClick={handleStatusChange}>next step</button>}
                        <button onClick={handleDelete}>delete</button>
                        <button onClick={() => setIsEditing(true)}>edit</button>
                    </div>
                </div>
                ) : (
                    <div>
                        <input type="text" value={editedTitle} onChange={(e) => setEditedTitle(e.target.value)}/>
                        <textarea value={editedDescription} onChange={(e) => setEditedDescription(e.target.value)}></textarea>
                        <div className="card-buttons">
                            <button onClick={handleEdit}>save</button>
                            <button onClick={() => {
                                setIsEditing();
                                setEditedTitle(task.title);
                                setEditedDescription(task.description);}
                                }
                            >cancel</button>
                        </div>
                    </div>
                )}
        </div>
    );
};

export default TaskCard;