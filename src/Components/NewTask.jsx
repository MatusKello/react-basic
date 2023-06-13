import data from '../data';
import { useState } from 'react';

const NewTask = () => {
  const [myTask, setMyTask] = useState(data);

  const taskHandler = (idcko) => {
    const filteredTasks = myTask.filter((oneTask) => {
      return oneTask.id !== idcko;
    });
    setMyTask(filteredTasks);
  };
  const allDeleteHandler = () => {
    setMyTask([]);
  };
  return (
    <div>
      {myTask.map((oneTask) => {
        const { id, name } = oneTask;
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button onClick={() => taskHandler(id)}>Delete</button>
          </div>
        );
      })}
      <button onClick={allDeleteHandler}>DeleteAll</button>
    </div>
  );
};

export default NewTask;
