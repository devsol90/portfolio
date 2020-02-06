/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable arrow-body-style */
/* eslint-disable prefer-object-spread */
import React from 'react';

const INCREMENT = 'INCREMENT';

const increase = (diff) => {
  // console.log(diff);
  return {
    type: INCREMENT,
    addBy: diff,
  };
};

const Contact = (props) => {
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div onClick={() => { props.store.dispatch(increase(1)); }}>
      <h1> {props.store.getState().value} </h1>
    </div>
  );
};

export default Contact;
