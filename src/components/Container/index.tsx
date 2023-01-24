import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      {children}
    </div>
  );
};

export default Container;