import { renderHook, act } from "@testing-library/react";
import { alertStore } from "../AlertStore";
import { NOTIFY } from "../../constants";

describe("alertStore", () => {
  it("Show alert when showAlert is called", () => {
    const { result } = renderHook(() => alertStore());

    act(() => {
      result.current.showAlert(NOTIFY.SUCCESS);
    });

    expect(result.current.message).toBe(NOTIFY.SUCCESS);
    expect(result.current.isAlertVisible).toBe(true);
  });

  it("Hide alert when hideAlert is called", () => {
    const { result } = renderHook(() => alertStore());

    act(() => {
      result.current.showAlert(NOTIFY.SUCCESS);
    });

    act(() => {
      result.current.hideAlert();
    });

    expect(result.current.isAlertVisible).toBe(false);
  });
});
