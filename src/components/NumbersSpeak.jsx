import React from "react";

function NumbersSpeak(props) {
  let data = props.allData;
  console.log(data);

  const items = data.map((item) => {
    return (
      <div key={item.id}>
        <div className="numbers " style={{ color: item.number_color }}>
          {item.number}
        </div>
        <div>{item.title}</div>
      </div>
    );
  });
  return (
    <section className="parent">
      <div className="container">{items}</div>
    </section>
  );
}

export default NumbersSpeak;
