/* eslint-disable react/prop-types */
import React from 'react';

export default class Items extends React.Component {
  deleteBtnHandler() {
    alert('Items deleted!');
  }
  btnHandler(type) {
    alert(`You click button ${type}`);
  }
  render() {
    return (
      <div className="my-2 d-flex flex-row justify-content-between todo-container align-items-center">
        {this.props.todoData.actId}. {this.props.todoData.activity}
        <div>
          <div onClick={() => this.btnHandler('COMPLETE')} className="mx-1 btn btn-primary">
            Complete
          </div>
          <div onClick={() => this.props.deleteTodoHandler(this.props.todoData.actId)} className="mx-1 btn btn-danger">
            Delete
          </div>
        </div>
      </div>
    );
  }
}
