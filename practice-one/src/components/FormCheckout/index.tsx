// CSS
import "./FormCheckout.css";

// React
import React, { useState } from "react";

// Components
import { Card, Footer, Heading, Input, Label } from "..";

// Helpers and Constants
import {
  isValidEmail,
  isValidName,
  isValidPhone,
} from "../../helpers/Validations";
import { ERROR_MESSAGES, NOTIFY } from "../../constants/Error";
import { useNavigate } from "react-router-dom";

const FormCheckout: React.FC = (): React.ReactElement => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [addressError, setAddressError] = useState("");

  const navigate = useNavigate();

  // Method handle changes in the input for the name field
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value);
    if (!value) {
      setNameError(ERROR_MESSAGES.FIELD_EMPTY);
    } else if (!isValidName(value)) {
      setNameError(ERROR_MESSAGES.NAME);
    } else {
      setNameError("");
    }
  };

  // Method handle changes in the input for the email field
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    if (!value) {
      setEmailError(ERROR_MESSAGES.FIELD_EMPTY);
    } else if (!isValidEmail(value)) {
      setEmailError(ERROR_MESSAGES.EMAIL);
    } else {
      setEmailError("");
    }
  };

  // Method handle changes in the input for the phone field
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPhone(value);
    if (!value) {
      setPhoneError(ERROR_MESSAGES.FIELD_EMPTY);
    } else if (!isValidPhone(value)) {
      setPhoneError(ERROR_MESSAGES.PHONE);
    } else {
      setPhoneError("");
    }
  };

  // Method handle changes in the input for the address field
  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setAddress(value);
    if (!value) {
      setAddressError(ERROR_MESSAGES.FIELD_EMPTY);
    } else {
      setAddressError("");
    }
  };

  // Method check whether the payment process was successful or not
  const handleCheckoutSuccessful = () => {
    const nameErrorExists = !name || !isValidName(name);
    const emailErrorExists = !email || !isValidEmail(email);
    const phoneErrorExists = !phone || !isValidPhone(phone);
    const addressErrorExists = !address;

    if (nameErrorExists) {
      setNameError(name ? ERROR_MESSAGES.NAME : ERROR_MESSAGES.FIELD_EMPTY);
    }

    if (emailErrorExists) {
      setEmailError(email ? ERROR_MESSAGES.EMAIL : ERROR_MESSAGES.FIELD_EMPTY);
    }

    if (phoneErrorExists) {
      setPhoneError(phone ? ERROR_MESSAGES.PHONE : ERROR_MESSAGES.FIELD_EMPTY);
    }

    if (addressErrorExists) {
      setAddressError(
        address ? ERROR_MESSAGES.ADDRESS : ERROR_MESSAGES.FIELD_EMPTY
      );
    }

    if (
      nameErrorExists ||
      emailErrorExists ||
      phoneErrorExists ||
      addressErrorExists
    ) {
      alert(NOTIFY.FAILD);
    } else {
      const confirmed = confirm(NOTIFY.SUCCESS);
      if (confirmed) {
        localStorage.clear();
        navigate("/");
      }
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
            value={name}
            name="name"
            onChange={handleNameChange}
          />
          {nameError && <p className="messages-error">{nameError}</p>}

          <Label className="text-medium" titleLabel="Email" />
          <Input
            className="form-input"
            type="email"
            value={email}
            name="email"
            onChange={handleEmailChange}
          />
          {emailError && <p className="messages-error">{emailError}</p>}

          <Label className="text-medium" titleLabel="Phone Number" />
          <Input
            className="form-input"
            type="text"
            value={phone}
            name="phone"
            onChange={handlePhoneChange}
          />
          {phoneError && <p className="messages-error">{phoneError}</p>}

          <Label className="text-medium" titleLabel="Address" />
          <Input
            className="form-input"
            type="text"
            value={address}
            name="address"
            onChange={handleAddressChange}
          />
          {addressError && <p className="messages-error">{addressError}</p>}

          <Label className="text-medium" titleLabel="Description" />
          <textarea
            className="form-input textarea-size"
            name="description"
            id="description"></textarea>

          <Label className="text-medium" titleLabel="Payment Method" />
          <select className="form-input">
            <option value="credit-card">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="bank-transfer">Bank TransferBank Transfer</option>
          </select>
        </form>
        <div className="card-checkout">
          <Card
            titleCard="Your total"
            className="card"
            titleButton="Checkout"
            variants="primary"
            onSubmit={handleCheckoutSuccessful}
          />
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default FormCheckout;
