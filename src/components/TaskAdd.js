import React from "react";

const TaskAdd = ({ value, changeHandler, clickHandler }) => {
  return (
    <div>
      <form>
        <input value={value} onChange={changeHandler}></input>
        <button onClick={clickHandler}>SAVE</button>
      </form>
    </div>
  );
};

export default TaskAdd;
