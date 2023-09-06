/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Navbar extends Component {
  render() {
    return (
      <div className="d-flex flex-row justify-content-between bg-dark p-3 text-white align-align-items-center">
        <h5>Todo List App</h5>
        <h5>You have {this.props.todoGlobalState.todoCount} Todo items(s)</h5>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    todoGlobalState: state.todo,
  };
};
export default connect(mapStateToProps)(Navbar);
