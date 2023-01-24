import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  size?: string;
};

const Container = ({ children, size }: ContainerProps) => {
  return (
    <div className={`${size === 'xl' ? 'max-w-screen-xl' : 'max-w-screen-2xl' } mx-auto`}>
      {children}
    </div>
  );
};

export default Container;