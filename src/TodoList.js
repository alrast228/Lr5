import React, { useState } from 'react';

function TodoList(props) {
  const [tasks, setTasks] = useState(props.tasks);

  const toggleTask = (index) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  return (
    <ul>
      {tasks.map((task, index) => (
        <li
          key={index}
          onClick={() => toggleTask(index)}
          style={{
            textDecoration: task.completed ? 'line-through' : 'none',
            cursor: 'pointer',
          }}
        >
          {task.text}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;