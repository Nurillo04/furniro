import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto px-5 py-5">
      <h1 className="text-3xl">Contact</h1>
      <button
        className="btn btn-primary"
        onClick={() => navigate("order-summery")}
      >
        Place order
      </button>
    </div>
  );
};

export default Contact;
