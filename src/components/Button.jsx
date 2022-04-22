import classNames from 'classnames';
import React from 'react';

function Button({ children, ClassName, Type = 'button', onClick = () => {}, active }) {
  return (
    <button
      className={classNames('button', {
        'button-black': ClassName === 'black',
        'button-tab': ClassName === 'tab',
        'button-active': active,
      })}
      type={Type}
      onClick={() => onClick()}>
      {children}
    </button>
  );
}

export default Button;
