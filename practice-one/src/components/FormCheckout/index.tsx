// CSS
import "./FormCheckout.css";

// React
import React from "react";

// Components
import { Card, Heading, Input, Label } from "..";

// Helpers and Constants
import { NOTIFY } from "../../constants/Error";
import { useNavigate } from "react-router-dom";
import { VARIANT } from "../../types/Variant";
import useForm from "../../hooks/useForm";

const FormCheckout: React.FC = (): React.ReactElement => {
  const { values, errors, handleChange, validateForm } = useForm();
  const navigate = useNavigate();

  const handleCheckoutSubmit = () => {
    const formIsValid = validateForm();
    if (formIsValid) {
      const confirmed = window.confirm(NOTIFY.SUCCESS);
      if (confirmed) {
        localStorage.clear();
        navigate("/");
      }
    } else {
      alert(NOTIFY.FAILD);
    }
  };

  return (
    <section className="checkout-cart font-family">
      <Heading className="text-h2 dash" element="h2">
        Checkout
      </Heading>
      <div className="checkout-container">
        <form className="form-checkout">
          <Label className="text-medium" titleLabel="Full Name" />
          <Input
            className="form-input"
            type="text"
            value={values.name}
            name="name"
            onChange={handleChange}
          />
          {errors.name && <p className="messages-error">{errors.name}</p>}

          <Label className="text-medium" titleLabel="Email" />
          <Input
            className="form-input"
            type="email"
            value={values.email}
            name="email"
            onChange={handleChange}
          />
          {errors.email && <p className="messages-error">{errors.email}</p>}

          <Label className="text-medium" titleLabel="Phone Number" />
          <Input
            className="form-input"
            type="text"
            value={values.phone}
            name="phone"
            onChange={handleChange}
          />
          {errors.phone && <p className="messages-error">{errors.phone}</p>}

          <Label className="text-medium" titleLabel="Address" />
          <Input
            className="form-input"
            type="text"
            value={values.address}
            name="address"
            onChange={handleChange}
          />
          {errors.address && <p className="messages-error">{errors.address}</p>}

          <Label className="text-medium" titleLabel="Description" />
          <textarea
            className="form-input textarea-size"
            name="description"
            id="description"></textarea>

          <Label className="text-medium" titleLabel="Payment Method" />
          <select className="form-input">
            <option value="credit-card">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="bank-transfer">Bank Transfer</option>
          </select>
        </form>
        <div className="card-checkout">
          <Card
            titleCard="Your total"
            className="card"
            titleButton="Checkout"
            variants={VARIANT.PRIMARY}
            onSubmit={handleCheckoutSubmit}
          />
        </div>
      </div>
    </section>
  );
};

export default FormCheckout;
