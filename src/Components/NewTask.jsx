import { useState } from 'react';
import data from '../data';

const NewTask = () => {
  const [myTask, setMyTask] = useState(data);

  const tasksHandler = (idcko) => {
    const filteredTasks = myTask.filter((oneTask) => {
      return oneTask.id !== idcko;
    });
    setMyTask(filteredTasks);
  };
  return (
    <div>
      {' '}
      {data.map((oneTask) => {
        const { id, name } = oneTask;
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button onClick={tasksHandler}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default NewTask;
