import React from "react";

const TaskDisplay = ({ tasks, deleteHandler }) => {
  return tasks.map(task => {
    return (
      <div key={task.id}>
        <p>{task.todo}</p>
        <button onClick={() => deleteHandler(task.id)}>DELETE</button>
      </div>
    );
  });
};

export default TaskDisplay;
