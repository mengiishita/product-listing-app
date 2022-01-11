import React from "react";

export const Grid: React.FC<{ id?: string; style?: {}; className?: string }> = (
  props
) => {
  return (
    <div
      id={props.id}
      style={props.style ? props.style : {}}
      className={`row${props.className ? ` ${props.className}` : ""}`}
    >
      {props.children}
    </div>
  );
};
