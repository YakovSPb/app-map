import { FC, ChangeEvent } from 'react';

interface InputProps {
  value: string;
  onChange: (value: string) => void;
}

const Input: FC<InputProps> = ({ value, onChange }) => {
  return (
    <input
      value={value}
      onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
      className="w-[170px] mb-1.5 p-1 border border-gray-300 rounded"
    />
  );
};

export default Input;
