import React from "react";
import "./FeaturedProducts.scss";
import Card from "../Card/Card";

const FeaturedProducts = ({ type }) => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/3812433/pexels-photo-3812433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/338027/pexels-photo-338027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Testing shopping",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/6069556/pexels-photo-6069556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/6069566/pexels-photo-6069566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "brunette hair gal",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/8306371/pexels-photo-8306371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "brunette hair gal",
      isNew: false,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/5698852/pexels-photo-5698852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "brunette hair gal",
      isNew: false,
      oldPrice: 19,
      price: 12,
    },
  ];
  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos nemo
          libero perferendis eligendi aliquid autem distinctio sunt repudiandae
          neque facilis. Exercitationem fugit eius officiis omnis debitis sint
          corrupti ab? Natus et aliquid itaque nam neque.
        </p>
      </div>
      <div className="bottom">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};
export default FeaturedProducts;
