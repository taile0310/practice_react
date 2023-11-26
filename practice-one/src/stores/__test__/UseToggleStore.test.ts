import { act, renderHook } from "@testing-library/react";
import { useToggleStore } from "..";
import { TOGGLE } from "../../types";

describe("useToggleStore", () => {
  it("Initialize with default values", () => {
    const { result } = renderHook(() => useToggleStore());

    expect(result.current.toggle).toBe(TOGGLE.OFF);
    expect(result.current.title).toBe("");
    expect(result.current.btnSubmit).toBe("");
    expect(result.current.productInfo).toBeNull();
    expect(result.current.inputValues).toEqual({
      id: "",
      name: "",
      image: "",
      price: 0,
    });
  });

  it("Handle toggle for updating product", () => {
    const { result } = renderHook(() => useToggleStore());

    act(() => {
      result.current.handleToggleUpdateProduct({
        id: "1",
        name: "Product 1",
        image: "image.jpg",
        price: 10,
      });
    });

    expect(result.current.toggle).toBe(TOGGLE.ON);
    expect(result.current.title).toBe("UPDATE PRODUCT");
    expect(result.current.btnSubmit).toBe("Save Changes");
    expect(result.current.productInfo).toEqual({
      id: "1",
      name: "Product 1",
      image: "image.jpg",
      price: 10,
    });
    expect(result.current.inputValues).toEqual({
      id: "1",
      name: "Product 1",
      image: "image.jpg",
      price: 10,
    });
  });

  it("Handle toggle for adding product", () => {
    const { result } = renderHook(() => useToggleStore());

    act(() => {
      result.current.handleToggleAddProduct();
    });

    expect(result.current.toggle).toBe(TOGGLE.ON);
    expect(result.current.title).toBe("ADD PRODUCT");
    expect(result.current.btnSubmit).toBe("Save Product");
    expect(result.current.productInfo).toBeNull();
    expect(result.current.inputValues).toEqual({
      id: "",
      name: "",
      image: "",
      price: 0,
    });
  });

  it("Handle input changes", () => {
    const { result } = renderHook(() => useToggleStore());

    act(() => {
      result.current.handleChangeInput("name", "New Product");
    });

    expect(result.current.inputValues.name).toBe("New Product");
  });
});
