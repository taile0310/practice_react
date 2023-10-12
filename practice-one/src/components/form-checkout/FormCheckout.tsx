import Card from "../common/card/Card";
import Input from "../common/input/Input";
import Label from "../common/label/Label";
import "./form-checkout.css";

const FormCheckout = () => {
  return (
    <section className="checkout-cart detail-layout">
      <h3 className="text-h3">Checkout</h3>
      <hr className="dash dash-checkout"></hr>
      <div className="checkout-container">
        <form className="form-checkout">
          <Label className="text-medium" titleLabel="Full name" />
          <span className="required-input">*</span>

          <Input className="form-input" type="text" id="name" name="name" />
          <span className="message-name error"></span>

          <Label className="text-medium" titleLabel="Email" />
          <span className="required-input">*</span>

          <Input className="form-input" type="email" id="email" name="email" />
          <span className="message-email error"></span>

          <Label className="text-medium" titleLabel="Phone Number" />
          <span className="required-input">*</span>

          <Input className="form-input" type="text" id="phone" name="phone" />
          <span className="message-phone error"></span>

          <Label className="text-medium" titleLabel="Address" />
          <span className="required-input">*</span>

          <Input
            className="form-input"
            type="text"
            id="address"
            name="address"
          />
          <span className="message-address error"></span>

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
            <option value="bank-transfer">Bank Transfer</option>
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
