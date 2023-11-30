// CSS class
import "./Modal.css";

// Ract
import { FC, FormEvent, ReactElement, memo, useCallback } from "react";

// Library
import useSWRMutation from "swr/mutation";
import { useShallow } from "zustand/react/shallow";

// Component
import { Button, Error, Heading, Input, Label } from "..";

// Custom hooks
import { useFetch } from "../../hooks";

// Type, Constants and Store
import { VARIANT } from "../../types";
import { useToggleStore } from "../../stores";
import { useAlertStore } from "../../stores/useAlertStore";
import { ERROR_MESSAGES, NOTIFY } from "../../constants";

const Modal: FC = (): ReactElement => {
  // Use hooks to get functions
  const { handleUpdateProduct, handleAddProduct } = useFetch();

  const {
    toggle,
    inputValues,
    title,
    btnSubmit,
    errors,
    onCloseModal,
    setErrors,
    onChangeInput,
  } = useToggleStore(
    useShallow((state) => ({
      toggle: state.toggle,
      inputValues: state.inputValues,
      title: state.title,
      btnSubmit: state.btnSubmit,
      errors: state.errors,
      onCloseModal: state.onCloseModal,
      setErrors: state.setErrors,
      onChangeInput: state.onChangeInput,
    }))
  );

  const { showAlert } = useAlertStore(
    useShallow((state) => ({
      showAlert: state.showAlert,
    }))
  );

  // Handle mutation function for useSWRMutation
  const mutationFn = () => {
    btnSubmit === "Save Changes"
      ? handleUpdateProduct(inputValues.id)
      : handleAddProduct(inputValues);
  };
  // Handle key for useSWRMutation
  const key = btnSubmit === "Save Changes" ? inputValues.id : inputValues;

  // Use useSWRMutation to handle mutations and update the UI
  const { trigger } = useSWRMutation(key, mutationFn, {
    onSuccess: () => {
      showAlert(NOTIFY.SUCCESS);
      onCloseModal();
    },
    onError: (error) => {
      showAlert(error.message);
      onCloseModal();
    },
  });

  // Handle when the form is submitted
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Check and display errors if information fields are invalid
    if (
      !inputValues.name ||
      !inputValues.image ||
      !inputValues.price ||
      inputValues.price <= 0
    ) {
      setErrors({
        name: !inputValues.name ? `${ERROR_MESSAGES.FIELD_EMPTY}` : null,
        image: !inputValues.image ? `${ERROR_MESSAGES.FIELD_EMPTY}` : null,
        price: !inputValues.price
          ? `${ERROR_MESSAGES.FIELD_EMPTY}`
          : inputValues.price <= 0
          ? `${ERROR_MESSAGES.PRICE}`
          : null,
      });
      return;
    }
    // Call the trigger function to execute the mutation
    trigger();
  };

  // Handle when the input value changes
  const handleChangeInput = useCallback(
    (name: string, value: string) => {
      onChangeInput(name, value);
    },
    [onChangeInput]
  );

  // Handle when closing the modal
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
