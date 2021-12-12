import React from "react";

const Quote = (props) => {
  return (
    <div>
      <p>{props.quotes.quote}</p>
      <p>{props.quotes.author}</p>
    </div>
  );
};

export default Quote;
