import { FC } from 'react';

interface ButtonProps {
  text: string
  addProcess: () => void
}

const Button: FC<ButtonProps> = ({ text, addProcess }) => {
  return <button
    className="m-1.5 p-2.5 px-3.75 bg-white border-none rounded cursor-pointer shadow-md"
    onClick={addProcess}
  >{text}</button>
};


export default Button