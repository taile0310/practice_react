// CSS class
import "./Modal.css";
// Ract
import { FC, FormEvent, ReactElement, memo, useCallback } from "react";
// Component
import { Button, Error, Heading, Input, Label } from "..";
// Custom hooks
import { useFetch } from "../../hooks";
// Type and Store
import { VARIANT } from "../../types";
import { useToggleStore } from "../../stores";
import useSWRMutation from "swr/mutation";
import { useAlertStore } from "../../stores/useAlertStore";
const Modal: FC = (): ReactElement => {
  const {
    toggle,
    inputValues,
    title,
    btnSubmit,
    errors,
    onCloseModal,
    onChangeInput,
  } = useToggleStore();

  const { handleUpdateProduct, handleAddProduct } = useFetch();
  const { showAlert } = useAlertStore();
  const mutationFn = () => {
    btnSubmit === "Save Changes"
      ? handleUpdateProduct(inputValues.id)
      : handleAddProduct(inputValues);
  };
  const demo = btnSubmit === "Save Changes" ? inputValues.id : inputValues;

  const { trigger } = useSWRMutation(demo, mutationFn, {
    onSuccess: () => {
      onCloseModal();
    },
    onError: (error) => {
      showAlert(error.message);
      onCloseModal();
    },
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    trigger();
  };

  const handleChangeInput = useCallback(
    (name: string, value: string) => {
      onChangeInput(name, value);
    },
    [onChangeInput]
  );

  const handleCloseModal = useCallback(() => {
    onCloseModal();
  }, [onCloseModal]);

  return (
    <form
      className={`toggle-${toggle} form-container font-family`}
      onSubmit={handleSubmit}>
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
          <div className="field-container">
            <Input
              className="modal-input"
              type="text"
              name="name"
              id="name"
              value={inputValues.name}
              onChange={(e) => handleChangeInput("name", e.target.value)}
            />
            <Error className="messages-error" content={errors.name!} />
          </div>
        </div>
        <div className="modal-content">
          <div className="modal-label">
            <Label htmlFor="image" className="text-small" titleLabel="Image" />
          </div>
          <div className="field-container">
            <Input
              className="modal-input"
              type="text"
              name="image"
              id="image"
              value={inputValues.image}
              onChange={(e) => handleChangeInput("image", e.target.value)}
            />
            <Error className="messages-error" content={errors.image!} />
          </div>
        </div>
        <div className="modal-content">
          <div className="modal-label">
            <Label htmlFor="price" className="text-small" titleLabel="Price" />
          </div>

          <div className="field-container">
            <Input
              className="modal-input"
              type="number"
              name="price"
              id="price"
              value={inputValues.price}
              onChange={(e) => handleChangeInput("price", e.target.value)}
            />
            <Error className="messages-error" content={errors.price!} />
          </div>
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
          onClick={handleCloseModal}
        />
      </div>
    </form>
  );
};
export default memo(Modal);
