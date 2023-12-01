// Library
import { create } from "zustand";

// Types and constants
import { TOGGLE } from "../types/Toggle";
import { CustomProductProps } from "../types/Product";
import { ERROR_MESSAGES } from "../constants";

// Define props for Toggle
type TProductState = {
  toggle: TOGGLE;
  title: string;
  onSubmit: string;
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
  productId: string;
  isVisible: boolean;
  children: string;
  showConfirm: (
    productId: string,
    children: string,
    product: CustomProductProps | null
  ) => void;
  hideConfirm: () => void;
  onCloseModal: () => void;
  setErrors: (errors: {
    name: string | null;
    image: string | null;
    price: string | null;
  }) => void;
  handleToggleUpdateProduct: (product: CustomProductProps | null) => void;
  onToggleAddProduct: () => void;
  onChangeInput: (field: string, value: string | number) => void;
};

export const productStore = create<TProductState>()((set) => ({
  toggle: TOGGLE.OFF,
  title: "",
  onSubmit: "",
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
  isVisible: false,
  productId: "",
  children: "",

  /**
   * Displays a confirmation box with product information and a confirmation button.
   * @param id
   * @param children
   * @param product
   * @returns
   */
  showConfirm: (id, children, product) =>
    set({ productId: id, isVisible: true, children, productInfo: product }),

  // Hide confirm
  hideConfirm: () => set({ isVisible: false }),

  // * Closes the modal by toggling the 'toggle' state between ON and OFF.
  onCloseModal: () =>
    set((state) => ({
      ...state,
      toggle: state.toggle === TOGGLE.OFF ? TOGGLE.ON : TOGGLE.OFF,
    })),

  /**
   * Toggles and sets up the state for updating a product.
   * @param product - The product information for updating.
   * @returns The updated state.
   */
  handleToggleUpdateProduct: (product) =>
    set((state) => ({
      toggle: state.toggle === TOGGLE.OFF ? TOGGLE.ON : TOGGLE.OFF,
      productInfo: product,
      title: "UPDATE PRODUCT",
      onSubmit: "Save Changes",
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

  /**
   * Toggles and sets up the state for adding a new product.
   * @returns The updated state.
   */
  onToggleAddProduct: () =>
    set((state) => ({
      title: "ADD PRODUCT",
      onSubmit: "Save Product",
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

  /**
   * Handles changes in input values and updates errors accordingly.
   * @param field - The field being updated.
   * @param value - The new value for the field.
   * @returns The updated state.
   */
  onChangeInput: (field, value) =>
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

  /**
   * Sets errors in the state.
   * @param errors - The error object containing name, image, and price errors.
   * @returns The updated state.
   */
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
