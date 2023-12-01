import { renderHook, act } from "@testing-library/react";
import { CustomProductProps } from "../../types";
import { productStore } from "../ConfirmStores";
import { NOTIFY } from "../../constants";

describe("productStore", () => {
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
