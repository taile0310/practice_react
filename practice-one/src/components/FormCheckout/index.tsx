// React
import React, { useState } from "react";

// Components
import { Card, Footer, Heading, Input, Label } from "..";

import {
  isValidAddress,
  isValidEmail,
  isValidName,
  isValidPhone,
} from "../../helpers/validation";
import "./form-checkout.css";
import { ERROR_MESSAGES } from "../../constant/error";
import { CustomFormCheckoutProps } from "../../types";

const FormCheckout: React.FC<CustomFormCheckoutProps> = ({ navigate }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [addressError, setAddressError] = useState("");

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

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setAddress(value);
    if (!value) {
      setAddressError(ERROR_MESSAGES.FIELD_EMPTY);
    } else if (!isValidAddress(value)) {
      setAddressError(ERROR_MESSAGES.ADDRESS);
    } else {
      setAddressError("");
    }
  };

  const isCheckoutSuccessful = () => {
    const nameErrorExists = !name || !isValidName(name);
    const emailErrorExists = !email || !isValidEmail(email);
    const phoneErrorExists = !phone || !isValidPhone(phone);
    const addressErrorExists = !address || !isValidAddress(address);

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
      alert("Checkout failed. Please check your information.");
    } else {
      alert("Checkout successful!");
      localStorage.clear();
      navigate?.("/");
    }
  };

  return (
    <section className="checkout-cart font-family">
      <Heading className="text-h2" element="h2" content="Checkout" />
      <hr className="dash dash-checkout" />
      <div className="checkout-container">
        <form className="form-checkout">
          <Label className="text-medium" titleLabel="Full Name" />
          <Input
            className="form-input"
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleNameChange}
          />
          {nameError && <p className="messages-error">{nameError}</p>}

          <Label className="text-medium" titleLabel="Email" />
          <Input
            className="form-input"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
          />
          {emailError && <p className="messages-error">{emailError}</p>}

          <Label className="text-medium" titleLabel="Phone Number" />
          <Input
            className="form-input"
            type="text"
            id="phone"
            name="phone"
            value={phone}
            onChange={handlePhoneChange}
          />
          {phoneError && <p className="messages-error">{phoneError}</p>}

          <Label className="text-medium" titleLabel="Address" />
          <Input
            className="form-input"
            type="text"
            id="address"
            name="address"
            value={address}
            onChange={handleAddressChange}
          />
          {addressError && <p className="messages-error">{addressError}</p>}

          <Label className="text-medium" titleLabel="Description" />
          <textarea
            className="form-input textarea-size"
            name="description"
            id="description"></textarea>

          <Label className="text-medium" titleLabel="Payment Method" />
          <select
            className="form-input"
            id="payment-method"
            name="payment-method">
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
            onSubmit={isCheckoutSuccessful}
          />
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default FormCheckout;
