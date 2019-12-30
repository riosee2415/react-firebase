import React from "react";
import { firestore } from "./firebase";
import TaskAdd from "./components/TaskAdd";
import TaskDisplay from "./components/TaskDisplay";

class App extends React.Component {
  state = {
    tasks: [],
    task: ""
  };

  componentDidMount() {
    const tasks = [...this.state.tasks];

    firestore
      .collection("tasks")
      .get()
      .then(docs => {
        docs.forEach(doc => {
          tasks.push({
            todo: doc.data().todo,
            id: doc.id
          });
        });
        this.setState({
          tasks
        });
      });
  }

  onClickHandler = e => {
    e.preventDefault();

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

  deleteHandler = idx => {
    const tasks = this.state.tasks.filter((task, i) => i !== idx);

    this.setState({
      tasks
    });
  };

  render() {
    const { task } = this.state;

    return (
      <div className="App">
        {/* INPUT */}
        <TaskAdd
          value={task}
          changeHandler={this.onChangeHandler}
          clickHandler={this.onClickHandler}
        />

        {/* OUTPUT */}
        <div>
          <TaskDisplay
            tasks={this.state.tasks}
            deleteHandler={this.deleteHandler}
          />
        </div>
      </div>
    );
  }
}

export default App;
