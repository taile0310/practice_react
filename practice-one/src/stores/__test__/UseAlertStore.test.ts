import { renderHook, act } from "@testing-library/react";
import { useAlertStore } from "../useAlertStore";
import { NOTIFY } from "../../constants";

describe("useAlertStore", () => {
  it("Show alert when showAlert is called", () => {
    const { result } = renderHook(() => useAlertStore());

    act(() => {
      result.current.showAlert(NOTIFY.SUCCESS);
    });

    expect(result.current.message).toBe(NOTIFY.SUCCESS);
    expect(result.current.isAlertVisible).toBe(true);
  });

  it("Hide alert when hideAlert is called", () => {
    const { result } = renderHook(() => useAlertStore());

    act(() => {
      result.current.showAlert(NOTIFY.SUCCESS);
    });

    act(() => {
      result.current.hideAlert();
    });

    expect(result.current.isAlertVisible).toBe(false);
  });
});
