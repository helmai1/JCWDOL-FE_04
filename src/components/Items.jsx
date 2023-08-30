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
        {this.props.todoData.id}. {this.props.todoData.activity}
        <div>
          <button
            disabled={this.props.todoData.isComplete}
            onClick={() => this.props.completeTodoHandler(this.props.todoData.id)}
            className="mx-1 btn btn-primary"
          >
            {
              /*this.props.todoData.isComplete ? <strong>Finished</strong> : <em>Complete</em>*/
              this.props.todoData.isComplete ? 'Finished' : 'Complete' /*if ternary*/
            }
          </button>
          <button onClick={() => this.props.deleteTodoHandler(this.props.todoData.id)} className="mx-1 btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    );
  }
}
