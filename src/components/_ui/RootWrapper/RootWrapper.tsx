import { FC, ReactNode } from 'react';

interface RootWrapper {
  children: ReactNode;
}

const RootWrapper: FC<RootWrapper> = ({ children }) => {
  return <div className='h-screen w-screen bg-blue-600'>{children}</div>;
};

export default RootWrapper;
