import React from "react";
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = () => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/2112651/pexels-photo-2112651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/338027/pexels-photo-338027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Testing shopping",
      desc: "Testing shopping",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/8306371/pexels-photo-8306371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "brunette hair gal",
      desc: "Testing shopping",
      isNew: false,
      oldPrice: 19,
      price: 12,
    },
  ];
  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <h1>{item.title}</h1>
          <p>{item.desc?.substring(0, 100)}</p>
          <div className="price">1 x €{item.price}</div>
          <DeleteOutlinedIcon className="delete" />
        </div>
      ))}
      <div className="total">
        <span>SubTotal</span>
        <span>€123</span>
      </div>
      <button>Proceed To Checkout</button>
    </div>
  );
};

export default Cart;
