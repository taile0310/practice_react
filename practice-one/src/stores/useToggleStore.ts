import { create } from "zustand";
import { TOGGLE } from "../types/Toggle";
import { CustomProductProps } from "../types/Product";
import { ERROR_MESSAGES } from "../constants";
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
  errors: {
    name: string | null;
    image: string | null;
    price: string | null;
  };

  handleCloseModal: () => void;
  setErrors: (errors: {
    name: string | null;
    image: string | null;
    price: string | null;
  }) => void;
  handleToggleUpdateProduct: (product: CustomProductProps | null) => void;
  handleToggleAddProduct: () => void;
  handleChangeInput: (field: string, value: string | number) => void;
};
export const useToggleStore = create<TToggleState>()((set) => ({
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
  errors: {
    name: null,
    image: null,
    price: null,
  },
  handleCloseModal: () =>
    set((state) => ({
      ...state,
      toggle: state.toggle === TOGGLE.OFF ? TOGGLE.ON : TOGGLE.OFF,
    })),
  handleToggleUpdateProduct: (product) =>
    set((state) => ({
      toggle: state.toggle === TOGGLE.OFF ? TOGGLE.ON : TOGGLE.OFF,
      productInfo: product,
      title: "UPDATE PRODUCT",
      btnSubmit: "Save Changes",
      inputValues: {
        ...state.inputValues,
        ...product,
      },
      errors: {
        name: null,
        image: null,
        price: null,
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
        price: 1,
      },
      errors: {
        name: null,
        image: null,
        price: null,
      },
    })),
  handleChangeInput: (field, value) =>
    set((state) => {
      const errors = { ...state.errors };

      if (value === "" || value === null) {
        errors[field as keyof typeof errors] = `${ERROR_MESSAGES.FIELD_EMPTY}`;
      } else {
        errors[field as keyof typeof errors] = null;
      }
      if (field === "price" && +value <= 0) {
        errors[field] = `${ERROR_MESSAGES.PRICE}`;
      }

      return {
        ...state,
        errors,
        inputValues: {
          ...state.inputValues,
          [field]: value,
        },
      };
    }),

  setErrors: (errors: {
    name: string | null;
    image: string | null;
    price: string | null;
  }) =>
    set((state) => ({
      ...state,
      errors,
    })),
}));
