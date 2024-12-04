import React from "react";

const Score = (props) => {
  return (
    <div
      style={{
        border: props.runs >= 100 ? "5px solid red" : "1px solid black",
        borderRadius: "1rem",
        width: 300,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "1rem",
      }}
    >
      <h2>{props.name}</h2>
      <h2>Run:{props.runs}</h2>
      <h2>City:{props.city}</h2>
      {props.runs >= 100 && <h4 style={{ color: "red" }}>StarPlayer</h4>}
    </div>
  );
};

export default Score;
