import { FC, ReactNode } from 'react';

interface NodeWrapperProps {
  children: ReactNode;
}

const NodeWrapper: FC<NodeWrapperProps> = ({ children }) => {
  return <div className='p-2 border border-black rounded bg-white w-[190px]'>{children}</div>;
};


export default NodeWrapper;
