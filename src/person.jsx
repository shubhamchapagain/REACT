import React from "react";
const divStyle={
    width:'400px',
    padding:'1rem',
    border:'1px solid black',
};
const imgStyle={height:400,width:'100%'};

const Person=(props)=>{
    return(
        <div style={divStyle}>
            <img src={props.image} alt='' style={imgStyle}/>
            <h3>{props.name}</h3>
        </div>
    );
};
export default Person;