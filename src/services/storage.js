const TASKS_KEY = "task-manager-tasks";

export const loadTasks = () => {
    const data = localStorage.getItem(TASKS_KEY);
    return data ? JSON.parse(data) : [];
};

export const saveTask = (tasks) => {
    localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
};