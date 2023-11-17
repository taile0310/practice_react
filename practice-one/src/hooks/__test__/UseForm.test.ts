import { act, renderHook } from "@testing-library/react";
import "@testing-library/jest-dom";
import useForm from "../useForm";
import { ERROR_MESSAGES, NOTIFY } from "../../constants/Error";

jest.mock("react-router-dom");
describe("useForm", () => {
  it("Update values when handleChange is called", () => {
    const { result } = renderHook(() => useForm());
    act(() => {
      result.current.handleChange({
        target: { name: "name", value: "John" },
      } as React.ChangeEvent<HTMLInputElement>);
    });
    expect(result.current.values.name).toBe("John");
  });

  it("Update errors when handleChange is called with invalid input", () => {
    const { result } = renderHook(() => useForm());

    act(() => {
      result.current.handleChange({
        target: { name: "email", value: "invalid-email" },
      } as React.ChangeEvent<HTMLInputElement>);
    });
    expect(result.current.errors.email).toBe(ERROR_MESSAGES.EMAIL);
  });

  it("Validate the entire form when validateForm is called", () => {
    const { result } = renderHook(() => useForm());
    act(() => {
      result.current.validateForm();
    });
    expect(result.current.errors.name).toBe(ERROR_MESSAGES.FIELD_EMPTY);
    expect(result.current.errors.email).toBe(ERROR_MESSAGES.FIELD_EMPTY);
    expect(result.current.errors.phone).toBe(ERROR_MESSAGES.FIELD_EMPTY);
    expect(result.current.errors.address).toBe(ERROR_MESSAGES.FIELD_EMPTY);
  });

  it("Notify message faild when submitting invalid form", () => {
    const { result } = renderHook(() => useForm());
    jest.spyOn(result.current, "validateForm").mockImplementation(() => false);
    const alertMock = jest.spyOn(window, "alert").mockImplementation(() => {});
    act(() => {
      result.current.handleCheckoutSuccessful();
    });
    expect(alertMock).toHaveBeenCalledWith(NOTIFY.FAILD);
  });

  it("Notify message success when submitting valid form", () => {
    const alertMock = jest.spyOn(window, "alert").mockImplementation(() => {});
    const { result } = renderHook(() => useForm());
    jest.spyOn(result.current, "validateForm").mockImplementation(() => true);
    act(() => {
      result.current.handleCheckoutSuccessful();
    });
    expect(alertMock).toHaveBeenCalled();
  });
});
