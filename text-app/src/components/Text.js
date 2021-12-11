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

export default Text;
