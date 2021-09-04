import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './AddTaskForm.scss';
export default function AddTaskForm({ onSubmitForm }) {
  const [newTask, setNewTask] = useState({
    title: '',
    content: '',
    id: uuid(),
  });

  const handleChange = (event) => {
    const { value, name } = event.target;
    setNewTask((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const submitForm = (e) => {
    if (!newTask.title) {
      alert('Fill the title field');
      return;
    }
    onSubmitForm(newTask);
    setNewTask({
      title: '',
      content: '',
      id: uuid(),
    });
    e.preventDefault();
  };

  return (
    <div className='form-container'>
      <form action=''>
        <label htmlFor='title'>Title:</label>
        <input
          type='text'
          value={newTask.title}
          onChange={handleChange}
          name='title'
        />
        <label htmlFor='text'>Text:</label>
        <input
          type='text'
          value={newTask.content}
          name='content'
          onChange={handleChange}
        />
        <button type='submit' onClick={submitForm}>
          submit
        </button>
      </form>
    </div>
  );
}
