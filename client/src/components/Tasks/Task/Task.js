import React from 'react';
import './Task.scss';
import { FaTrash } from 'react-icons/fa';
export default function Task({ title, content, id, deleteTask }) {
  return (
    <div className='task'>
      <div>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
      <div className='delete'>
        <FaTrash
          onClick={() => {
            deleteTask(id);
          }}
        />
      </div>
    </div>
  );
}
