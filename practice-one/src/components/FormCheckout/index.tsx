// CSS
import "./form-checkout.css";

// React Hooks
import { useState } from "react";

// Constants
import { ERROR_MESSAGES } from "../../constants/error";

// Component
import { Card, Footer, Input, Label } from "..";

// Validations
import {
  isValidAddress,
  isValidEmail,
  isValidName,
  isValidPhone,
} from "../../helper/validation";

// Component FormCheckout
const FormCheckout = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [addressError, setAddressError] = useState("");

  const isNameEmpty = name.trim();
  const isEmailEmpty = email.trim();
  const isPhoneEmpty = phone.trim();
  const isAddressEmpty = address.trim();

  // Handle when the user leaves the input
  const handleNameBlur = () => {
    const isValid = isValidName(isNameEmpty);

    // If the name is left blank and the validation is invalid, an error will be reported
    isNameEmpty === ""
      ? setNameError(ERROR_MESSAGES.emptyError)
      : !isValid
      ? setNameError(ERROR_MESSAGES.nameError)
      : setNameError("");
  };

  // Handle when the user leaves the input
  const handleEmailBlur = () => {
    const isValid = isValidEmail(isEmailEmpty);

    // If the email is left blank and the validation is invalid, an error will be reported
    isEmailEmpty === ""
      ? setEmailError(ERROR_MESSAGES.emptyError)
      : !isValid
      ? setEmailError(ERROR_MESSAGES.emailError)
      : setEmailError("");
  };

  const handlePhoneBlur = () => {
    const isValid = isValidPhone(isPhoneEmpty);

    // If the phone is left blank and the validation is invalid, an error will be reported
    isPhoneEmpty === ""
      ? setPhoneError(ERROR_MESSAGES.emptyError)
      : !isValid
      ? setPhoneError(ERROR_MESSAGES.phoneError)
      : setPhoneError("");
  };

  // Handle when the user leaves the input
  const handleAddressBlur = () => {
    const isValid = isValidAddress(isAddressEmpty);

    // If the address is left blank and the validation is invalid, an error will be reported
    isAddressEmpty === ""
      ? setAddressError(ERROR_MESSAGES.emptyError)
      : !isValid
      ? setAddressError(ERROR_MESSAGES.addressError)
      : setAddressError("");
  };

  // Hanlde when the user click button
  const handleSubmit = () => {
    // If the address is left blank and the validation is invalid, an error will be reported
    if (
      isNameEmpty === "" ||
      isEmailEmpty === "" ||
      isPhoneEmpty === "" ||
      isAddressEmpty === ""
    ) {
      alert("Please enter complete information");
    } else if (nameError || emailError || phoneError || addressError) {
      alert("Please enter information in the correct boxes");
    } else {
      // Otherwise, if there is no error, checkout is allowed and a success notification is reported
      alert("Checkout successful");
      const homeUrl = `${window.location.origin}/home`;
      window.location.replace(homeUrl);
      localStorage.clear();
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
            onSubmit={handleSubmit}
          />
        </div>
      </div>
      <Footer className="copyright" />
    </section>
  );
};

export default FormCheckout;
