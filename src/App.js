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

    firestore
      .collection("tasks")
      .add({
        todo: this.state.task
      })
      .then(r => {
        const tasks = [
          ...this.state.tasks,
          { todo: this.state.task, id: r.id }
        ];

        this.setState({
          tasks,
          task: ""
        });
      });
  };

  // to way binding
  onChangeHandler = e => {
    this.setState({
      task: e.target.value
    });
  };

  deleteHandler = id => {
    firestore
      .collection("tasks")
      .doc(id)
      .delete()
      .then(() => {
        const tasks = this.state.tasks.filter(task => task.id !== id);

        this.setState({
          tasks
        });
      });

    // const tasks = this.state.tasks.filter((task, i) => i !== idx);

    // this.setState({
    //   tasks
    // });
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
