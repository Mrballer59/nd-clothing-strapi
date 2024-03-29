import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro odit
            alias explicabo enim. Veritatis accusamus molestiae soluta totam
            doloribus nostrum facilis eius fugit consequuntur voluptates?
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro odit
            alias explicabo enim. Veritatis accusamus molestiae soluta totam
            doloribus nostrum facilis eius fugit consequuntur voluptates?
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          {/* <span className="logo">ND Clothing</span> */}
          <span className="copyright">
            {" "}
            Copyright {new Date().getFullYear()} All Rights Reserved N.D
            Clothing
          </span>
        </div>
        <div className="right">
          <img src="/img/payment-footer.png" alt="logo"></img>
        </div>
      </div>
    </div>
  );
};

export default Footer;
