/* eslint-disable react/jsx-key */
import Items from '../components/Items';
// import ItemsF from './components/ItemsF';
import Axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';

class TodoList extends React.Component {
  state = {
    todoList: [],
    inputTodo: '',
  };

  fetchTodo = () => {
    Axios.get('http://localhost:3000/todo')
      .then((response) => {
        console.log(response.data);
        this.setState({ todoList: response.data }); //get data from db.json
        this.props.changeTodoCount(response.data.length);
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

  //Component did collection
  componentDidMount() {
    this.fetchTodo();
  }
  // componentDidUpdate() {
  //   alert('Component did Update');
  // }

  render() {
    // alert('Component Render!');
    return (
      <>
        <div>
          <h1>Todo List</h1>
          <button className="btn btn-info">Get my todo {this.props.todoGlobalState.todoCount}</button>
          {this.renderTodoList()}
          <div>
            <input onChange={this.inputHandler} type="text" className="mx-3 my-3"></input>
            <button onClick={this.addTodo} className="btn btn-primary">
              Add to do
            </button>
            <button onClick={this.props.incrementTodoCount} className="btn btn-info">
              Increment Todo
            </button>
            <button onClick={this.props.decrementTodoCount} className="btn btn-info">
              Decrement Todo
            </button>
            <button onClick={() => this.props.changeTodoCount(7)} className="btn btn-dark">
              Change Todo
            </button>
          </div>
          {/* With functional components */}
          {/* <ItemsF todoData={{ id: 4, activity: 'Running' }} /> */}
        </div>
      </>
    );
  }
}
const incrementTodoCount = () => {
  return {
    type: 'INCREMENT_TODO_COUNT',
  };
};
const decrementTodoCount = () => {
  return {
    type: 'DECREMENT_TODO_COUNT',
  };
};
const changeTodoCount = (newCount) => {
  return { type: 'CHANGE_TODO_COUNT', payload: newCount };
};
const mapStateToProps = (state) => {
  return {
    testingProps: 0,
    todoGlobalState: state.todo,
  };
};

const mapDispatchToProps = {
  // incrementTodo : incrementTodoCount,
  incrementTodoCount,
  decrementTodoCount,
  changeTodoCount,
};
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
