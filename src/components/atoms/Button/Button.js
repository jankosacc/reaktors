import React from 'react';

const Button = ({ children, onClickFunc }) => {
  return (
    <button onClick={onClickFunc} className="py-2 px-4 m-1 bg-gray-100 border border-solid border-gray-500">{children}</button>
  );
}

export default Button;
