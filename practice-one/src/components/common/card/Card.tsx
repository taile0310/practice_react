import React from "react";
import "./Card.css";
import Input from "../input/Input";
import Button from "../button/Button";

const Card = () => {
  return (
    <section className="card-secondary">
      <h4 className="text-h4 font-family">Promo Code</h4>
      <Input />
      <div className="message"></div>
      <Button textBtn="Apply" className="text-large btn-apply" />
    </section>
  );
};

export default Card;
