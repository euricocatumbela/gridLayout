import React from "react";

function Card(props) {
  return (
    <div className="Card">
      <img alt="" src={props.image} />
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </div>
  );
}

export default Card;
