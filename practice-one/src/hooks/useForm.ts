// Library
import { useShallow } from "zustand/react/shallow";

// React
import { useState, useCallback, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

// Constants and helpers
import { ERROR_MESSAGES, NOTIFY } from "../constants/Error";
import {
  isValidEmail,
  isValidName,
  isValidPhone,
} from "../helpers/Validations";

// Store
import { cartStore } from "../stores";

// Define props for useForm
type FormValues = {
  name: string;
  email: string;
  phone: string;
  address: string;
};

const useForm = () => {
  // Use hooks to get functions
  const { clearCarts } = cartStore(
    useShallow((state) => ({
      clearCarts: state.clearCarts,
    }))
  );
  const navigate = useNavigate();

  const [values, setValues] = useState<FormValues>({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [errors, setErrors] = useState<FormValues>({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  // Function to handle events when the value of a form field changes
  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
    let errorMessage = "";
    // Check the name field and update the error message accordingly
    if (name === "name") {
      errorMessage = !value
        ? ERROR_MESSAGES.FIELD_EMPTY
        : !isValidName(value)
        ? ERROR_MESSAGES.NAME
        : "";
      setErrors((prevErrors) => ({ ...prevErrors, name: errorMessage }));
    }

    // Check the email field and update the error message accordingly
    if (name === "email") {
      errorMessage = !value
        ? ERROR_MESSAGES.FIELD_EMPTY
        : !isValidEmail(value)
        ? ERROR_MESSAGES.EMAIL
        : "";
      setErrors((prevErrors) => ({ ...prevErrors, email: errorMessage }));
    }

    // Check the phone field and update the error message accordingly
    if (name === "phone") {
      errorMessage = !value
        ? ERROR_MESSAGES.FIELD_EMPTY
        : !isValidPhone(value)
        ? ERROR_MESSAGES.PHONE
        : "";
      setErrors((prevErrors) => ({ ...prevErrors, phone: errorMessage }));
    }

    // Check the address field and update the error message accordingly
    if (name === "address") {
      errorMessage = !value ? ERROR_MESSAGES.FIELD_EMPTY : "";
      setErrors((prevErrors) => ({ ...prevErrors, address: errorMessage }));
    }
  }, []);

  // Function to check the validity of the entire form
  const validateForm = useCallback(() => {
    const nameErrorExists = !values.name || !isValidName(values.name);
    const emailErrorExists = !values.email || !isValidEmail(values.email);
    const phoneErrorExists = !values.phone || !isValidPhone(values.phone);
    const addressErrorExists = !values.address;

    // Update error message if any
    if (nameErrorExists) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: values.name ? ERROR_MESSAGES.NAME : ERROR_MESSAGES.FIELD_EMPTY,
      }));
    }

    if (emailErrorExists) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: values.email ? ERROR_MESSAGES.EMAIL : ERROR_MESSAGES.FIELD_EMPTY,
      }));
    }

    if (phoneErrorExists) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phone: values.phone ? ERROR_MESSAGES.PHONE : ERROR_MESSAGES.FIELD_EMPTY,
      }));
    }

    if (addressErrorExists) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        address: values.address
          ? ERROR_MESSAGES.ADDRESS
          : ERROR_MESSAGES.FIELD_EMPTY,
      }));
    }

    return (
      !nameErrorExists ||
      !emailErrorExists ||
      !phoneErrorExists ||
      !addressErrorExists
    );
  }, [values]);

  // Method check whether the payment process was successful or not
  const handleCheckoutSuccessful = () => {
    const formIsValid = validateForm();
    if (formIsValid) {
      alert(NOTIFY.SUCCESS);
      clearCarts();
      navigate("/");
    } else {
      alert(NOTIFY.FAILD);
    }
  };

  return {
    values,
    errors,
    navigate,
    validateForm,
    handleChange,
    handleCheckoutSuccessful,
  };
};

export default useForm;
