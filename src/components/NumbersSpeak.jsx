import React from "react";

function NumbersSpeak(props) {
  let data = props.allData;

  function colorSelected(data) {
    var colorSection;
    switch (data.number_color) {
      case "red":
        colorSection = "#d55342";
        break;
      case "green":
        colorSection = "#3d9c85";
        break;
      case "yellow":
        colorSection = "#efc94c";
        break;

      default:
        break;
    }
    return colorSection;
  }

  console.log(data);

  const items = data.map((item) => {
    return (
      <div key={item.id} className="container">
        <span
          className="container__numbers "
          style={{ color: colorSelected(item) }}
        >
          <span>{item.number}</span>
          <span>{item.number_symbol}</span>
        </span>
        <h3 className="title">{item.title}</h3>
      </div>
    );
  });
  return (
    <section className="parentsection">
      <div className="parentsection__divs">{items}</div>
    </section>
  );
}

export default NumbersSpeak;
