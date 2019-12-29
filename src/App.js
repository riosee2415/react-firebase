import React from "react";

class App extends React.Component {
  state = {
    tasks: [
      { todo: "work 1" },
      { todo: "work 2" },
      { todo: "work 3" },
      { todo: "work 4" }
    ],
    task: ""
  };

  onClickHandler = e => {
    e.preventDefault();

    if (this.state.task.length === 0) {
      return;
    }

    const task = {
      todo: this.state.task
    };

    const tasks = [...this.state.tasks, task];

    this.setState({
      tasks,
      task: ""
    });
  };

  // to way binding
  onChangeHandler = e => {
    this.setState({
      task: e.target.value
    });
  };

  render() {
    const { task } = this.state;

    const taskDisplay = this.state.tasks.map((task, index) => {
      return (
        <div key={index}>
          <p>{task.todo}</p>
          <button>DELETE</button>
        </div>
      );
    });

    console.log(taskDisplay);
    return (
      <div className="App">
        {/* INPUT */}
        <div>
          <form>
            <input value={task} onChange={this.onChangeHandler}></input>
            <button onClick={this.onClickHandler}>SAVE</button>
          </form>
        </div>

        {/* OUTPUT */}
        <div>{taskDisplay}</div>
      </div>
    );
  }
}

export default App;
