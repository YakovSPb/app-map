import {  FC } from 'react';

interface ButtonProps {
    text: string
    addProcess: () => void
}

const Button:FC<ButtonProps> = ({text, addProcess}) => {
    return <button style={buttonStyle} onClick={addProcess}>{text}</button>
  };

  const buttonStyle = {
    margin: '5px',
    padding: '10px 15px',
    backgroundColor: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
  };
  

  export default Button