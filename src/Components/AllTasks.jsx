import './AllTasks.css';
import data from '../data';
import { useState } from 'react';

const AllTasks = () => {
  const [myTask, setMyTask] = useState(data);

  const tasksHandler = (idcko) => {
    /*     const filteredTasks = myTask.filter((oneTask) => {
      return oneTask.id === idcko;
    });  */
    //! skrateny zapis
    setMyTask(myTask.filter((oneTask) => oneTask.id !== idcko));
  };

  const deleteAllHandler = () => {
    setMyTask([]);
  };

  return (
    <div>
      {myTask.map((oneTask) => {
        const { id, name } = oneTask;
        return (
          <div className='one-task' key={id}>
            <h4>{name}</h4>
            <button onClick={() => tasksHandler(id)}>Delete</button>
          </div>
        );
      })}
      <button className='main-button' onClick={deleteAllHandler}>
        Delete All
      </button>
    </div>
  );
};

export default AllTasks;
