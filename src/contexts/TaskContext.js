import { createContext, useState, useEffect } from "react";
import { loadTasks, saveTask } from "../services/storage";

export const TaskContext = createContext();

export const TaskProvider = ({children}) => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const storedTasks = loadTasks();
        if (storedTasks) setTasks(storedTasks);
    }, []);

    useEffect(() => {
        saveTask(tasks);
    }, [tasks]);

    return (
        <TaskContext.Provider value={{tasks, setTasks}}>
            {children}
        </TaskContext.Provider>
    );
};