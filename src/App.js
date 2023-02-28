import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Task 1' },
    { id: 2, text: 'Task 2' },
    { id: 3, text: 'Task 3' },
  ]);

  const [newTask, setNewTask] = useState('');

  const handleNewTaskChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleNewTaskSubmit = (event) => {
    event.preventDefault();
    if (!newTask) return;
    const newTaskObj = { id: Date.now(), text: newTask };
    setTasks([...tasks, newTaskObj]);
    setNewTask('');
  };

  return (
    <div>
      <h1>Task List</h1>
      <form onSubmit={handleNewTaskSubmit}>
        <input type="text" value={newTask} onChange={handleNewTaskChange} />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;


