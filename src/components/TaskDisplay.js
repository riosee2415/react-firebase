import React from "react";

const TaskDisplay = ({ tasks, deleteHandler }) => {
  return tasks.map((task, index) => {
    return (
      <div key={index}>
        <p>{task.todo}</p>
        <button onClick={() => deleteHandler(index)}>DELETE</button>
      </div>
    );
  });
};

export default TaskDisplay;
