import { useState } from "react";
import Card from "../common/card/Card";
import Input from "../common/input/Input";
import Label from "../common/label/Label";
import "./form-checkout.css";
import { ERROR_MESSAGES } from "../../constants/error";
import { REGEX } from "../../constants/regex";

const FormCheckout = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [addressError, setAddressError] = useState("");

  const isValidName = (name: string) => {
    const regexName = REGEX.name;
    return regexName.test(name);
  };

  const isValidEmail = (email: string) => {
    const regexEmail = REGEX.email;
    return regexEmail.test(email);
  };

  const isValidPhone = (phone: string) => {
    const regexPhone = REGEX.phone;
    return regexPhone.test(phone);
  };

  const isValidAddress = (address: string) => {
    const regexAddress = REGEX.address;
    return regexAddress.test(address);
  };

  const handleNameBlur = () => {
    const trimmedName = name.trim();
    const isValid = isValidName(trimmedName);
    if (trimmedName === "") {
      setNameError(ERROR_MESSAGES.emptyError);
    } else if (!isValid) {
      setNameError(ERROR_MESSAGES.nameError);
    } else {
      setNameError("");
    }
  };

  const handleEmailBlur = () => {
    const trimmedEmail = email.trim();
    const isValid = isValidEmail(trimmedEmail);
    if (trimmedEmail === "") {
      setEmailError(ERROR_MESSAGES.emptyError);
    } else if (!isValid) {
      setEmailError(ERROR_MESSAGES.emailError);
    } else {
      setEmailError("");
    }
  };

  const handlePhoneBlur = () => {
    const trimmedPhone = phone.trim();
    const isValid = isValidPhone(trimmedPhone);
    if (trimmedPhone === "") {
      setPhoneError(ERROR_MESSAGES.emptyError);
    } else if (!isValid) {
      setPhoneError(ERROR_MESSAGES.phoneError);
    } else {
      setPhoneError("");
    }
  };

  const handleAddressBlur = () => {
    const trimmedAddress = address.trim();
    const isValid = isValidAddress(trimmedAddress);
    if (trimmedAddress === "") {
      setAddressError(ERROR_MESSAGES.emptyError);
    } else if (!isValid) {
      setAddressError(ERROR_MESSAGES.addressError);
    } else {
      setAddressError("");
    }
  };

  return (
    <section className="checkout-cart">
      <h3 className="text-h3">Checkout</h3>
      <hr className="dash dash-checkout"></hr>
      <div className="checkout-container">
        <form className="form-checkout">
          <Label className="text-medium" titleLabel="Full Name" />

          <Input
            className="form-input"
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={handleNameBlur}
          />
          {nameError && <p className="messages-error">{nameError}</p>}

          <Label className="text-medium" titleLabel="Email" />

          <Input
            className="form-input"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={handleEmailBlur}
          />
          {emailError && <p className="messages-error">{emailError}</p>}

          <Label className="text-medium" titleLabel="Phone Number" />

          <Input
            className="form-input"
            type="text"
            id="phone"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            onBlur={handlePhoneBlur}
          />
          {phoneError && <p className="messages-error">{phoneError}</p>}

          <Label className="text-medium" titleLabel="Address" />

          <Input
            className="form-input"
            type="text"
            id="address"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            onBlur={handleAddressBlur}
          />
          {addressError && <p className="messages-error">{addressError}</p>}

          <Label className="text-medium" titleLabel="Description" />
          <textarea
            className="form-input textarea-size"
            name="description"
            id="description"></textarea>

          <Label className="text-medium" titleLabel=" Payment Method" />
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
            className="card-primary"
            titleButton="Checkout"
          />
        </div>
      </div>
    </section>
  );
};

export default FormCheckout;
