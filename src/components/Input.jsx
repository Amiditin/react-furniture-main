import React from 'react';

function Input({ placeholder, type }) {
  return <input className="input" type={type} placeholder={placeholder} />;
}

export default Input;
