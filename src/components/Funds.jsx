import React from "react";

function Funds(props) {
  var title = props.fundsDAta[2].title;
  var number = props.fundsDAta[2].number;

  return (
    <div className="container">
      <div className="numbers numFunds">{number}K</div>
      <div>{title}</div>
    </div>
  );
}

export default Funds;
