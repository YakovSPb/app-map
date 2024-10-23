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
      style={inputStyle}
    />
  );
};

const inputStyle = {
  width: '140px',
  marginBottom: '5px',
  padding: '5px',
  border: '1px solid #ccc',
  borderRadius: '4px',
};

export default Input;
