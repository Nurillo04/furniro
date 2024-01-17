import React from "react";
import { useNavigate } from "react-router-dom";

const OrderSummery = () => {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto px-5 py-5">
      <h1 className="text-3xl">Order confirmed!</h1>
      <button onClick={() => navigate(-1)} className="btn btn-outline-dark">
        Go Back!
      </button>
    </div>
  );
};

export default OrderSummery;
