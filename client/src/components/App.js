import '../styles.scss';
import './App.scss';
import Header from './Header/Header';
import Tasks from './Tasks/Tasks';
import Day from './Day/Day';
import AddTaskForm from './AddTaskForm/AddTaskForm';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [isDisplayed, setDisplayed] = useState(false);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchData();
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/v1/', {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return await response.data;
    } catch (error) {
      console.log(error.stack);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/v1/delete/${id}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setTasks(tasks.filter((task) => task._id !== id));
      fetchData();
    } catch (error) {
      console.log(error.stack);
    }
  };

  const addTask = async (newTask) => {
    const { title, content } = newTask;
    try {
      const res = await axios.post(
        `http://localhost:5000/api/v1/create`,
        { title, content },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      setTasks((prevValue) => [...prevValue, res.data]);
      fetchData();
    } catch (error) {
      console.log(error.stack);
    }
  };

  return (
    <div className='App'>
      <div>
        <Header />
        <div className='add-section'>
          <Day />
          <button
            className='add-btn'
            onClick={() => setDisplayed(!isDisplayed)}
          >
            add
          </button>
        </div>

        {isDisplayed && <AddTaskForm onSubmitForm={addTask} />}
        <Tasks tasks={tasks} onDeleteTask={deleteTask} />
      </div>
    </div>
  );
}
