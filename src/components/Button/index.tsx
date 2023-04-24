import React, { ReactElement } from 'react';
import './Button.css';

interface ButtonProps {
  children: ReactElement | string,
}

function Button({ children } : ButtonProps) {
  return (
    <button className='button'>{children}</button>
  );
}

export default Button;