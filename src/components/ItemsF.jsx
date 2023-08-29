/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

function ItemsF(props) {
  const deleteBtnHandler = () => {
    alert('Items deleted!');
  };
  const btnHandler = (type) => {
    alert(`You click button ${type}`);
  };
  return (
    <div className="my-2 d-flex flex-row justify-content-between todo-container align-items-center">
      {props.todoData.actId}. {props.todoData.activity}
      <div>
        <div onClick={() => btnHandler('COMPLETE')} className="mx-1 btn btn-primary">
          Complete
        </div>
        <div onClick={deleteBtnHandler} className="mx-1 btn btn-danger">
          Delete
        </div>
      </div>
    </div>
  );
}
export default ItemsF;
