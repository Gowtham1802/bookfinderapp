import React, { useState } from "react";
import "./book.css";
import { FaSearch } from "react-icons/fa";
import CardPage from "../cardpage/card";
import axios from "axios";

const BookFinder = () => {
  const [search, setSearch] = useState("");
  console.log(search);
  const [bookData, setData] = useState([]);
  const searchBook = (evt) => {
    if (evt.key === "Enter") {
      axios
        .get(
          "https://www.googleapis.com/books/v1/volumes?q=" +
            search +
            "&key=AIzaSyBVeHQeoGrqwb1gdQhpvvWlgSE2nrZBJ34"
        )
        .then((res) => setData(res.data.items))
        .catch((err) => console.log(err));
    }
  };
  return (
    <>
      <div className="header">
        <div className="head-row1">
          <h1 className="find">
            {" "}
            A Room Without Books Is Like <br /> A Body Without a Soul{" "}
          </h1>
        </div>
        <div className="head-row2">
          <h2> Find Your Books </h2>
          <div className="search">
            <input
              type="text"
              placeholder="Enter Your Book Name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={searchBook}
            />
            <button className="search-btn">
              {" "}
              <FaSearch />{" "}
            </button>
            <div>
              <img src="./public/image/bgp.png" alt="" className="image-box" />
            </div>
          </div>
        </div>
      </div>
      <div className="container">{<CardPage book={bookData} />}</div>
    </>
  );
};

export default BookFinder;
