import React from "react";

const Container: React.FC<{ className?: string; style?: {} }> = (props) => {
  return (
    <div className={`container  ${props.className}`} style={props.style}>
      {props.children}
    </div>
  );
};

export default Container;
