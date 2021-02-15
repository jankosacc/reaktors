import React from 'react';

const Label = ({ element, children }) => {
  return (
  <label htmlFor={element} className="py-1 px-2 m-1">{children}</label>
  );
}

export default Label;
