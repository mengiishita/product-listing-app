import React from "react";

export const Column: React.FC<{ id?: string; style?: {}; className?: string }> =
  (props) => {
    return (
      <div
        className={`col${props.className ? ` ${props.className}` : ""}`}
        style={props.style ? props.style : {}}
      >
        {props.children}
      </div>
    );
  };
