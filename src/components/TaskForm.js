import React, {useState, useContext} from "react";
import { TaskContext } from "../contexts/TaskContext";
import { STATUSES } from "../constans/statuses";

const TaskForm = () => {
    const {tasks, setTasks} = useContext(TaskContext);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState();

    const handleSubmit = () => {
        if (!title.length) {
            setError("title should be filled");
            return;
        }

        const newTask = {
            id: Date.now(),
            title: title,
            description: description,
            status: STATUSES.TODO,
            createdAt: new Date().toLocaleString(),
        };

        setTasks([newTask, ...tasks]);
        setTitle("");
        setDescription("");
        setError();
    };

    return (
        <div className="task-form">
            <h3>add a task!</h3>
            <input
                type="text"
                value={title}
                placeholder="add a title"
                onChange={(e) => setTitle(e.target.value)}
            />
            {error && <p className="error">title should be filled</p>}

            <textarea
                placeholder="description(optional)"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            ></textarea>

            <button type="submit" onClick={handleSubmit}>add task</button>
        </div>
    );
};

export default TaskForm;