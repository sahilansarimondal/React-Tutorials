import React from 'react'

export const Book = ({ title, img, author, number }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button type="button" onClick={(e) => console.log(title)}>
        Log Title
      </button>
      <h4>{author}</h4>
      <span>{`# ${number + 1}`}</span>
    </article>
  );
};


