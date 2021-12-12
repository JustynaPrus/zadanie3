import React from "react";

const Text = (props) => {
  const texts = props.texts.map((text, index) => (
    <div key={index}>
      <p>{text.quote}</p>
      <p>{text.author}</p>
    </div>
  ));

  return <div>{texts}</div>;
};

const Quote = (props) => {
  const randomText =
    props.texts[Math.floor(Math.random() * props.texts.length)];
  console.log(randomText);

  const quote = (
    <div>
      <p>{props.texts[3].quote}</p>
      <p>{props.texts[3].author}</p>
    </div>
  );

  return <div>{quote}</div>;
};

export default Text;
