import React from "react";

const Mobile = (props) => {
  return (
    <div>
      {props.name}
      <p>{props.price}</p>
      <p>{props.children}</p>
    </div>
  );
};

export default Mobile;
