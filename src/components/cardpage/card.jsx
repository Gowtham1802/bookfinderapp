import React from "react";

const CardPage = ({ book }) => {
  return (
    <>
      {book.map((item, index) => {
        let thumbnail =
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.smallThumbnail;
        thumbnail = !thumbnail
          ? "https://pics.craiyon.com/2023-07-04/7ef326780d064781a329cc1f7dd9a2b3.webp"
          : thumbnail;

        return (
          <div className="card" key={index}>
            <div>
              <img src={thumbnail} alt="img_not_found" />
            </div>
            <div className="bottom">
              <h3 className="title">{item.volumeInfo.title} </h3>
              <p className="amount">
                {}
                {item.saleInfo.listPrice === undefined
                  ? "Not for sales"
                  : "\u20B9 " + item.saleInfo.listPrice.amount}
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CardPage;
