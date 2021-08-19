import React from "react";

const Book = ({ img, title, author }) => {
  // attribute, eventHandler
  //onClick, onMouseOver
  const clickHandler = (e) => {
    console.log("I was clicked");
    console.log(e.target);
  };
  const complexExample = (author) => {
    console.log(author);
  };
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Example Button
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        complex
      </button>
    </article>
  );
};

export default Book;
