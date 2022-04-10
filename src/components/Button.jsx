import classNames from 'classnames';
import React from 'react';

function Button({ children, ClassName, onClick = () => console.log('click btn'), active }) {
  return (
    <button
      className={classNames('button', {
        'button-black': ClassName === 'black',
        'button-tab': ClassName === 'tab',
        'button-active': active,
      })}
      onClick={() => onClick()}>
      {children}
    </button>
  );
}

export default Button;
