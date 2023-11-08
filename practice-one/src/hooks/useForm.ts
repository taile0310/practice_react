import { useState, useCallback, ChangeEvent } from "react";

import { ERROR_MESSAGES } from "../constants/Error";
import {
  isValidEmail,
  isValidName,
  isValidPhone,
} from "../helpers/Validations";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  address: string;
};

const useForm = () => {
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

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
    let errorMessage = "";

    if (name === "name") {
      errorMessage = !value
        ? ERROR_MESSAGES.FIELD_EMPTY
        : !isValidName(value)
        ? ERROR_MESSAGES.NAME
        : "";
      setErrors((prevErrors) => ({ ...prevErrors, name: errorMessage }));
    } else if (name === "email") {
      errorMessage = !value
        ? ERROR_MESSAGES.FIELD_EMPTY
        : !isValidEmail(value)
        ? ERROR_MESSAGES.EMAIL
        : "";
      setErrors((prevErrors) => ({ ...prevErrors, email: errorMessage }));
    } else if (name === "phone") {
      errorMessage = !value
        ? ERROR_MESSAGES.FIELD_EMPTY
        : !isValidPhone(value)
        ? ERROR_MESSAGES.PHONE
        : "";
      setErrors((prevErrors) => ({ ...prevErrors, phone: errorMessage }));
    } else if (name === "address") {
      errorMessage = !value ? ERROR_MESSAGES.FIELD_EMPTY : "";
      setErrors((prevErrors) => ({ ...prevErrors, address: errorMessage }));
    }
  }, []);

  const validateForm = useCallback(() => {
    const nameErrorExists = !values.name || !isValidName(values.name);
    const emailErrorExists = !values.email || !isValidEmail(values.email);
    const phoneErrorExists = !values.phone || !isValidPhone(values.phone);
    const addressErrorExists = !values.address;

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

  return { values, errors, handleChange, validateForm };
};

export default useForm;
