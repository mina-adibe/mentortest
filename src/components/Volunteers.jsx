import React from "react";

function Volunteers(props) {
  var title = props.volunteersDAta[1].title;
  var number = props.volunteersDAta[1].number;

  return (
    <div className="container midlle">
      <div className="numbers numVolunteers"> {number}+</div>
      <div>{title}</div>
    </div>
  );
}

export default Volunteers;
