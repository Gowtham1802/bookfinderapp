import React from "react";
import "./book.css";
import { FaSearch } from "react-icons/fa";
import CardPage from "../cardpage/card";

const BookFinder = () => {
  return (
    <>
      <div className="header">
        <div className="head-row1">
          <h1>
            {" "}
            A Room Without Books Is Like <br /> A Body Without a Soul{" "}
          </h1>
        </div>
        <div className="head-row2">
          <h2> Find Your Books </h2>
          <div className="search">
            <input type="text" placeholder="Enter Your Book Name" />
            <button className="search-btn">
              {" "}
              <FaSearch />{" "}
            </button>
            <div>
              <img src="./public/image/bgp.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <CardPage></CardPage>
        <CardPage></CardPage>
        <CardPage></CardPage>
        <CardPage></CardPage>
        <CardPage></CardPage>
        <CardPage></CardPage>
        <CardPage></CardPage>
        <CardPage></CardPage>
      </div>
    </>
  );
};

export default BookFinder;
