import React from "react";
import "./cardComponents.css";
import { FaCartPlus, FaEye } from "react-icons/fa";

const CardEcommerce = ({ img, title, description, price, pages }) => {
  return (
    <div className="col-12 col-md-6 col-lg-4 col-xl-3  mb-4">
      <div className="card h-100 ">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title} </h5>
          <p className="price">{price}</p>
          <div className="botones">
            <a href=" " className="btn btn-primary">
              <FaEye />
            </a>
            <a href=" " className="btn btn-primary">
              <FaCartPlus />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardEcommerce;
