import React from 'react';
import Home from './pages/Home';
import {TaskProvider} from './contexts/TaskContext';
import './App.css';

function App() {
  return (
    <TaskProvider>
      <Home/>
    </TaskProvider>
  );
}

export default App;
