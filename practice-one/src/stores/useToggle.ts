import { create } from "zustand";
import { TOGGLE } from "../types/Toggle";
import { CustomProductProps } from "../types/Product";

type TToggleState = {
  toggle: TOGGLE;
  productInfo: CustomProductProps | null;
  inputValues: {
    id: string;
    name: string;
    image: string;
    price: number;
  };
  handleToggle: (product: CustomProductProps | null) => void;
  handleChangeInput: (field: string, value: string | number) => void;
};

export const useToggle = create<TToggleState>()((set) => ({
  toggle: TOGGLE.OFF,
  productInfo: null,
  inputValues: {
    id: "",
    name: "",
    image: "",
    price: 0,
  },
  handleToggle: (product) =>
    set((state) => ({
      toggle: state.toggle === TOGGLE.OFF ? TOGGLE.ON : TOGGLE.OFF,
      productInfo: product,
      inputValues: {
        ...state.inputValues,
        ...product,
      },
    })),
  handleChangeInput: (field, value) =>
    set((state) => ({
      inputValues: {
        ...state.inputValues,
        [field]: value,
      },
    })),
}));
