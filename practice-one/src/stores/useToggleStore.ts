import { create } from "zustand";
import { TOGGLE } from "../types/Toggle";
import { CustomProductProps } from "../types/Product";

type TToggleState = {
  toggle: TOGGLE;
  title: string;
  btnSubmit: string;
  productInfo: CustomProductProps | null;
  inputValues: {
    id: string;
    name: string;
    image: string;
    price: number;
  };
  handleToggle: (product: CustomProductProps | null) => void;
  handleToggleAddProduct: () => void;
  handleChangeInput: (field: string, value: string | number) => void;
};

export const useToggle = create<TToggleState>()((set) => ({
  toggle: TOGGLE.OFF,
  title: "",
  btnSubmit: "",
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
      title: "UPDATE PRODUCT",
      btnSubmit: "Save Changes",
      inputValues: {
        ...state.inputValues,
        ...product,
      },
    })),

  handleToggleAddProduct: () =>
    set((state) => ({
      title: "ADD PRODUCT",
      btnSubmit: "Save Product",
      toggle: state.toggle === TOGGLE.OFF ? TOGGLE.ON : TOGGLE.OFF,
      inputValues: {
        id: "",
        name: "",
        image: "",
        price: 0,
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
