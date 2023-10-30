import { REGEX } from "../constants/Regex";

// Method checks input for name
export const isValidName = (name: string) => {
  const regexName = REGEX.name;
  return regexName.test(name);
};

// Method checks input for email
export const isValidEmail = (email: string) => {
  const regexEmail = REGEX.email;
  return regexEmail.test(email);
};

// Method checks input for phone
export const isValidPhone = (phone: string) => {
  const regexPhone = REGEX.phone;
  return regexPhone.test(phone);
};
