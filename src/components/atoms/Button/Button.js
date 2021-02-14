import React from 'react';

const Button = ({ children, onClickFunc }) => {
  return (
    <button onClick={onClickFunc} className="py-1 px-2 m-1">{children}</button>
  );
}

export default Button;
