import React from 'react';
import './Tasks.scss';
import Task from './Task/Task';

export default function Tasks({ tasks, onDeleteTask }) {
  return (
    <div className='tasks-container'>
      <h1 className='tasks-title'>tasks</h1>
      {tasks.length === 0 ? (
        <h1>No tasks yet</h1>
      ) : (
        <div className='tasks'>
          {tasks.map((task) => (
            <Task
              key={task._id}
              id={task._id}
              title={task.title}
              content={task.content}
              deleteTask={() => onDeleteTask(task._id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
