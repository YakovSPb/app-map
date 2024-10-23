import { FC, ReactNode } from 'react';

interface RootWrapper {
  children: ReactNode;
}

const RootWrapper: FC<RootWrapper> = ({ children }) => {
  return <div style={rootStyle}>{children}</div>;
};

const rootStyle = {
  height: '100vh',
  width: '100vw',
  backgroundColor: '#0d6efd',
};


export default RootWrapper;
