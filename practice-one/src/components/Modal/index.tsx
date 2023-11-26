// CSS class
import "./Modal.css";
// Ract
import { FC, FormEvent, ReactElement, memo } from "react";
// Component
import { Button, Heading, Input, Label } from "..";
// Custom hooks
import { useFetch } from "../../hooks";
// Type and Store
import { VARIANT } from "../../types";
import { useToggleStore } from "../../stores";
const Modal: FC = (): ReactElement => {
  const {
    toggle,
    inputValues,
    title,
    btnSubmit,
    handleToggleUpdateProduct,
    handleChangeInput,
  } = useToggleStore();
  const { handleUpdateProduct, handleAddProduct } = useFetch();
  return (
    <form
      className={`toggle-${toggle} form-container`}
      onSubmit={(e: FormEvent) => {
        e.preventDefault();
        btnSubmit === "Save Changes"
          ? (handleUpdateProduct(inputValues.id),
            handleToggleUpdateProduct(null))
          : (handleAddProduct(inputValues), handleToggleUpdateProduct(null));
      }}>
      <div className="modal-header">
        <Heading className="text-h4" element="h4">
          {title}
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
          children={btnSubmit}
          type="submit"
        />
        <Button
          className="text-small"
          variants={VARIANT.TRANSPARENT}
          typeText="uppercase"
          children="Close"
          onClick={() => handleToggleUpdateProduct(null)}
        />
      </div>
    </form>
  );
};
export default memo(Modal);
