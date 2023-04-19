import React, { useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const images = [
    "https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
  ];
  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={(e) => setSelectedImg(0)} />
          <img src={images[1]} alt="" onClick={(e) => setSelectedImg(1)} />
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className="price">€50</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          possimus consequuntur velit, ducimus cumque harum.
        </p>
        <div className="quantity">
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button className="add">
          <AddShoppingCartIcon /> ADD TO Cart
        </button>
        <div className="link">
          <div className="item">
            <FavoriteBorderIcon /> ADD TO WishList
          </div>
          <div className="item">
            <BalanceIcon /> ADD TO Compare
          </div>
        </div>
        <div className="info">
          <span>Vendor:Polo</span>
          <span>Product Type: T-shirt</span>
          <span>Tag: T-shirt, Women, Top</span>
        </div>
        <hr />
        <div className="details">
          <span>Description</span>
          <hr />
          <span>Additional Information</span>
          <hr />
          <span>FAQs</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
