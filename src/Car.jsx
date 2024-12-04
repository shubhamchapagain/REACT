import React from "react";

export const Car = (props) => {
  return (
    <div
      style={{
        border: props.price >= 10000000 ? "5px solid red" : "1px solid black",
        width: 400,
        height: 700,
      }}
    >
      <img
        style={{
          width: "100%",
          height: "400px",
        }}
        src={props.image}
        alt=""
      />
      <h2 style={{ padding: "1rem" }}>{props.name}</h2>
      <h3 style={{ padding: "1rem" }}>
        Rs:{props.price}
        {props.price >= 10000000 && (
          <h4 style={{ color: "red" }}>Expensive Car</h4>
        )}
      </h3>
    </div>
  );
};
export default Car;
