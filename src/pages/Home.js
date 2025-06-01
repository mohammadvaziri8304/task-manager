import React, { useContext, useState, useEffect } from "react";
import { TaskContext } from "../contexts/TaskContext";
import { STATUSES } from "../constans/statuses";
import TaskForm from "../components/TaskForm";
import "../styles/main.css";
import TaskColumn from "../components/TaskColumn";

const Home = () => {
    const {tasks, setTaskes} = useContext(TaskContext);
    const [darkMode, setDarkMode] = useState(false);
    
    useEffect(() => {
        document.body.classList.toggle("dark-mode", darkMode);
    }, [darkMode]);

    return(
        <div className="home-container">
            <button
                className="toggle-dark"
                onClick={() => setDarkMode(prev => !prev)}
            >
                {darkMode ? "light" : "dark"}
            </button>
            <h1>task manager</h1>
            <TaskForm/>
            
            <div className="columns">
                {Object.values(STATUSES).map((status) => (
                    <TaskColumn
                    key={status}
                    status={status}
                    tasks={tasks.filter((t) => (t.status === status))}
                    />
                ))}
            </div>
        </div>
    );
};

export default Home;