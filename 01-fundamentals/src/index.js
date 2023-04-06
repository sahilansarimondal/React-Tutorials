import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const books = [
  {
    title: "Atomic Habits",
    img: "https://m.media-amazon.com/images/I/41r6F2LRf8L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    author: "James Clear",
    id: 1,
  },
  {
    title: "The Richest Man In Babylon",
    img: "./images/bookimg.jpg",
    author: "George S. Clason",
    id: 2,
  },
];

const EventExamples = () => {
  const handleFormInput = () => {
    console.log("Handle form input")
  }
  const handleButtonClick = () => {
    alert("Button Clicked")
  }
  return (
    <section>
      <form>
        <h2>Typical form</h2>
        <input type="text" onChange={handleFormInput}  name="example" style={{ margin: "1rem 0" }} />
      </form>
      <button onClick={handleButtonClick} >Click Me</button>
    </section>
  );
};

const BookList = () => {
  return (
    <section className="bookList">
      <EventExamples />
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
};

const Book = ({ title, img, author }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4 style={{ fontSize: ".75rem", color: "lightblue" }}>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <BookList />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
