import React from "react";

function Volunteers(props) {
  if (props.volunteersDAta) {
    console.log(props.volunteersDAta[1].title);
    var title = props.volunteersDAta[1].title;
    var number = props.volunteersDAta[1].number;
  }
  return (
    <div className="container midlle">
      <div className="numbers numVolunteers"> {number}+</div>
      <div>{title}</div>
    </div>
  );
}

export default Volunteers;
