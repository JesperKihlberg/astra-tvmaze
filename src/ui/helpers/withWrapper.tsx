import React from "react";

// a higher order components that adds a wrapper to the component
interface WithWrapperProps {
  wrapper: React.FC<{ children: React.ReactNode }>;
}
export const withWrapper = <P extends object>(Component: React.ComponentType<P>) => {
  const WithWrapper: React.FC<P & WithWrapperProps> = ({ wrapper: Wrapper = ({ children }) => <>{children}</>, ...props }) => {
    return <Wrapper>{<Component {...(props as P)} />}</Wrapper>;
  };
  return WithWrapper;
};
