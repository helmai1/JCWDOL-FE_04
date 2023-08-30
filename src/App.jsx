/* eslint-disable react/jsx-key */
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Items from './components/Items';
// import ItemsF from './components/ItemsF';
import Axios from 'axios';
import React from 'react';

export default class App extends React.Component {
  state = {
    todoList: [],
    inputTodo: '',
  };

  fetchTodo = () => {
    Axios.get('http://localhost:3000/todo')
      .then((response) => {
        console.log(response.data);
        this.setState({ todoList: response.data }); //get data from db.json
      })
      .catch((err) => {
        console.log(`Server error : ${err}`);
      });
  };

  deleteTodo = (id) => {
    Axios.delete(`http://localhost:3000/todo/${id}`)
      .then(() => {
        alert('Todo Deleted!');
        this.fetchTodo();
      })
      .catch((err) => {
        console.log(`Server error : ${err}`);
      });
  };
  renderTodoList = () => {
    return this.state.todoList.map((item) => {
      return <Items completeTodoHandler={this.completeTodo} deleteTodoHandler={this.deleteTodo} todoData={item} />;
    });
  };
  addTodo = () => {
    Axios.post('http://localhost:3000/todo', {
      activity: this.state.inputTodo,
      isComplete: false,
    })
      .then(() => {
        alert('Success add todo!');
        this.fetchTodo();
      })
      .catch((err) => {
        console.log(`Server error : ${err}`);
      });
  };
  completeTodo = (id) => {
    Axios.patch(`http://localhost:3000/todo/${id}`, {
      isComplete: true,
    })
      .then(() => {
        alert('Todo Completed!');
        this.fetchTodo();
      })
      .catch((err) => {
        console.log(`Server error : ${err}`);
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
          <button onClick={this.fetchTodo} className="btn btn-info">
            Get to do
          </button>
          {this.renderTodoList()}
          <div>
            <input onChange={this.inputHandler} type="text" className="mx-3 my-3"></input>
            <button onClick={this.addTodo} className="btn btn-primary">
              Add to do
            </button>
          </div>
          {/* With functional components */}
          {/* <ItemsF todoData={{ id: 4, activity: 'Running' }} /> */}
        </div>
      </>
    );
  }
}
