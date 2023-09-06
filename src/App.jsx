/* eslint-disable react/jsx-key */
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
// import ItemsF from './components/ItemsF';
import React from 'react';
import TodoList from './pages/TodoList';
import Navbar from './components/Navbar';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <TodoList />
      </div>
    );
  }
}
