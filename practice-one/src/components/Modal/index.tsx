// CSS class
import "./Modal.css";

import { FC, FormEvent, ReactElement } from "react";
import { Button, Heading, Input, Label } from "..";
import { VARIANT } from "../../types/Variant";
import { useToggle } from "../../stores/useToggle";
import useFetch from "../../hooks/useFetch";

const Modal: FC = (): ReactElement => {
  const { toggle, inputValues, handleToggle, handleChangeInput } = useToggle();

  const { handleUpdateProduct } = useFetch();

  return (
    <form
      className={`toggle-${toggle} form-container`}
      onSubmit={(e: FormEvent) => e.preventDefault()}>
      <div className="modal-header">
        <Heading className="text-h4" element="h4">
          UPDATE PRODUCT
        </Heading>
      </div>
      <div className="modal-body">
        <div className="modal-content">
          <div className="modal-label">
            <Label htmlFor="name" className="text-small" titleLabel="Name" />
          </div>
          <Input
            className="modal-input"
            type="text"
            name="name"
            id="name"
            value={inputValues.name}
            onChange={(e) => handleChangeInput("name", e.target.value)}
          />
        </div>

        <div className="modal-content">
          <div className="modal-label">
            <Label htmlFor="image" className="text-small" titleLabel="Image" />
          </div>
          <Input
            className="modal-input"
            type="text"
            name="image"
            id="image"
            value={inputValues.image}
            onChange={(e) => handleChangeInput("image", e.target.value)}
          />
        </div>

        <div className="modal-content">
          <div className="modal-label">
            <Label htmlFor="price" className="text-small" titleLabel="Price" />
          </div>
          <Input
            className="modal-input"
            type="number"
            name="price"
            id="price"
            value={inputValues.price}
            onChange={(e) => handleChangeInput("price", e.target.value)}
          />
        </div>
      </div>

      <div className="modal-footer">
        <Button
          className="text-small"
          variants={VARIANT.TRANSPARENT}
          typeText="uppercase"
          children="Save changes"
          type="submit"
          onClick={() => {
            handleUpdateProduct(inputValues.id);
            handleToggle(null);
          }}
        />
        <Button
          className="text-small"
          variants={VARIANT.TRANSPARENT}
          typeText="uppercase"
          children="Close"
          onClick={() => handleToggle(null)}
        />
      </div>
    </form>
  );
};

export default Modal;
