import { FC, ReactNode } from 'react';

interface NodeWrapperProps {
  children: ReactNode;
}

const NodeWrapper: FC<NodeWrapperProps> = ({ children }) => {
  return <div style={nodeStyle}>{children}</div>;
};

const nodeStyle = {
  padding: '10px',
  border: '1px solid #000',
  borderRadius: '4px',
  backgroundColor: '#fff',
  width: '150px',
};

export default NodeWrapper;
