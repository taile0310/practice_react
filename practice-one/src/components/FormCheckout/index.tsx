// CSS
import "./FormCheckout.css";

// React
import { FC, ReactElement, memo } from "react";

// Components
import { Card, Error, Heading, Input, Label } from "..";

// Custom hooks
import { useForm } from "../../hooks";

// Type
import { VARIANT } from "../../types";

const FormCheckout: FC = (): ReactElement => {
  // Use hooks to get functions
  const { values, errors, handleChange, handleCheckoutSuccessful } = useForm();

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
          <Error className="messages-error" content={errors.name!} />

          <Label className="text-medium" titleLabel="Email" />
          <Input
            className="form-input"
            type="email"
            value={values.email}
            name="email"
            onChange={handleChange}
          />
          <Error className="messages-error" content={errors.email!} />

          <Label className="text-medium" titleLabel="Phone Number" />
          <Input
            className="form-input"
            type="text"
            value={values.phone}
            name="phone"
            onChange={handleChange}
          />
          <Error className="messages-error" content={errors.phone!} />

          <Label className="text-medium" titleLabel="Address" />
          <Input
            className="form-input"
            type="text"
            value={values.address}
            name="address"
            onChange={handleChange}
          />
          <Error className="messages-error" content={errors.address!} />

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
            onSubmit={handleCheckoutSuccessful}
          />
        </div>
      </div>
    </section>
  );
};

export default memo(FormCheckout);
