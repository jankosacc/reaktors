import React from 'react';

const Label = ({ element, text }) => {
  return (
  <label htmlFor={element} className="py-1 px-2 m-1">{text}</label>
  );
}

export default Label;
