import React from "react";
import "./card.css";
import Input from "../input/Input";
import Button from "../button/Button";
import { CustomCardProps } from "../../../types/interface";

const Card = ({ titleCard, width }: CustomCardProps) => {
  const widthCard = {
    width: `${width}px`,
  };

  return (
    <section className="card-secondary font-family" style={widthCard}>
      <h4 className="text-h4">{titleCard}</h4>
      <Input placeholder="enter promo code" />
      <div className="message"></div>
      <Button textBtn="Apply" className="text-large btn-apply" />
    </section>
  );
};

export default Card;
