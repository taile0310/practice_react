import { act, renderHook } from "@testing-library/react";
import { productStore } from "..";
import { CustomProductProps, TOGGLE } from "../../types";
import { NOTIFY } from "../../constants";

describe("productStore", () => {
  const product = {
    id: "1",
    name: "Yin & Yang",
    image: "https://sushi-restaurant-phi.vercel.app/item1.fb0267f5.jpg",
    price: 10,
  };

  it("Initialize with default values", () => {
    const { result } = renderHook(() => productStore());

    expect(result.current.toggle).toBe(TOGGLE.OFF);
    expect(result.current.title).toBe("");
    expect(result.current.onSubmit).toBe("");
    expect(result.current.productInfo).toBeNull();
    expect(result.current.inputValues).toEqual({
      id: "",
      name: "",
      image: "",
      price: 0,
    });
  });

  it("Handle toggle for updating product", () => {
    const { result } = renderHook(() => productStore());

    act(() => {
      result.current.handleToggleUpdateProduct(product);
    });

    expect(result.current.toggle).toBe(TOGGLE.ON);
    expect(result.current.title).toBe("UPDATE PRODUCT");
    expect(result.current.onSubmit).toBe("Save Changes");
    expect(result.current.productInfo).toEqual(product);
    expect(result.current.inputValues).toEqual(product);
  });

  it("Handle toggle for adding product", () => {
    const { result } = renderHook(() => productStore());

    act(() => {
      result.current.onToggleAddProduct();
    });

    expect(result.current.toggle).toBe(TOGGLE.OFF);
    expect(result.current.title).toBe("ADD PRODUCT");
    expect(result.current.onSubmit).toBe("Save Product");
    expect(result.current.inputValues).toEqual({
      id: "",
      name: "",
      image: "",
      price: 1,
    });
  });

  it("Handle input changes", () => {
    const { result } = renderHook(() => productStore());

    act(() => {
      result.current.onChangeInput("name", "New Product");
    });

    expect(result.current.inputValues.name).toBe("New Product");
  });
  it("Confirm with correct data when showConfirm is called", () => {
    const { result } = renderHook(() => productStore());

    const product: CustomProductProps = {
      id: "1",
      name: "Test Product",
      image: "test-image.jpg",
      price: 10,
    };

    act(() => {
      result.current.showConfirm("1", NOTIFY.ADD_PRODUCT, product);
    });

    expect(result.current.productId).toBe("1");
    expect(result.current.isVisible).toBe(true);
    expect(result.current.children).toBe(NOTIFY.ADD_PRODUCT);
    expect(result.current.productInfo).toEqual(product);
  });

  it("Hide confirmation when hideConfirm is called", () => {
    const { result } = renderHook(() => productStore());

    act(() => {
      result.current.showConfirm("1", NOTIFY.ADD_PRODUCT, null);
    });

    act(() => {
      result.current.hideConfirm();
    });

    expect(result.current.isVisible).toBe(false);
  });
});
