import React from "react";

const CardPage = () => {
  return (
    <div className="card">
      <div>
        <img src="public/image/book.jpg" alt="" />
      </div>
      <div className="bottom">
        <h3 className="title">React JS</h3>
        <p className="amount">{"\u20B9"} 3250</p>
      </div>
    </div>
  );
};

export default CardPage;
