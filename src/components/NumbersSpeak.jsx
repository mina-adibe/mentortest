import React from "react";

function NumbersSpeak(props) {
  let data = props.allData;
  console.log(data);

  const items = data.map((item) => {
    return (
      <div key={item.id} className="container">
        <span
          className="container__numbers "
          style={{ color: item.number_color }}
        >
          {item.number}
        </span>
        <h1 className="title">{item.title}</h1>
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
