/* eslint-disable react/jsx-key */
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Items from './components/Items';
// import ItemsF from './components/ItemsF';
import React from 'react';

export default class App extends React.Component {
  state = {
    todoList: [
      { actId: 1, activity: 'Lets Code' },
      { actId: 2, activity: 'Game' },
      { actId: 3, activity: 'Cleaning' },
    ],
    inputTodo: '',
  };
  deleteTodo = (actId) => {
    this.setState({
      todoList: this.state.todoList.filter((item) => {
        return item.actId !== actId;
        // return console.log(item.actId !== actId);
      }),
    });
  };
  renderTodoList = () => {
    return this.state.todoList.map((item) => {
      return <Items deleteTodoHandler={this.deleteTodo} todoData={item} />;
    });
  };
  addTodo = () => {
    this.setState({
      todoList: [...this.state.todoList, { activity: this.state.inputTodo, actId: this.state.todoList.length + 1 }],
    });
  };
  inputHandler = (event) => {
    //event.target.value is saved value from input
    this.setState({ inputTodo: event.target.value });
  };

  render() {
    return (
      <>
        <div>
          <h1>Todo List</h1>
          {this.renderTodoList()}
          <div>
            <input onChange={this.inputHandler} type="text" className="mx-3 my-3"></input>
            <button onClick={this.addTodo} className="btn btn-primary">
              Add to do
            </button>
          </div>
          {/* With functional components */}
          {/* <ItemsF todoData={{ actId: 4, activity: 'Running' }} /> */}
        </div>
      </>
    );
  }
}
