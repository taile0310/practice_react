import { isValidEmail, isValidName, isValidPhone } from "../Validations";

describe("Function Validations", () => {
  it("Returns true for a valid name", () => {
    const validName = "Nguyen Van A";
    const isValid = isValidName(validName);
    expect(isValid).toBe(true);
  });
  it("Returns true for a valid email", () => {
    const validEmail = "lht@gmail.com";
    const isValid = isValidEmail(validEmail);
    expect(isValid).toBe(true);
  });
  it("Returns true for a valid phone", () => {
    const validPhone = "0363580858";
    const isValid = isValidPhone(validPhone);
    expect(isValid).toBe(true);
  });
  it("Returns false for a invalid name", () => {
    const validName = "Nguyen Van A111";
    const isValid = isValidName(validName);
    expect(isValid).toBe(false);
  });
  it("Returns false for a invalid email", () => {
    const validEmail = "lht";
    const isValid = isValidEmail(validEmail);
    expect(isValid).toBe(false);
  });
  it("Returns false for a valid phone", () => {
    const validPhone = "0163580858";
    const isValid = isValidPhone(validPhone);
    expect(isValid).toBe(false);
  });
});
