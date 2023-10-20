import { ChangeEventHandler, MouseEvent, MouseEventHandler } from "react";

export type CustomBtnProps = {
  textBtn?: string;
  className?: string;
  disabled?: boolean;
  size?: TButtonSize;
  variants?: Type;
  typeText?: TButtonText;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export type CustomCardProps = {
  showInput?: boolean;
  className?: string;
  titleCard: string;
  total?: string;
  width?: number;
  titleButton: string;
  variants?: Type;
  onSubmit?: () => void;
};

export type CustomInputProps = {
  placeholder?: string;
  className?: string;
  type?: string;
  id?: string;
  name?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: ChangeEventHandler<HTMLInputElement>;
};

export type CustomNavbarProps = {
  width?: number;
  className?: string;
  cartLength?: number;
  navigationHandle?: (event: MouseEvent<HTMLAnchorElement>) => void;
};

export type CustomImageProps = {
  src: string;
  alt?: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLImageElement>;
};

export type CustomProductProps = {
  id: string;
  name: string;
  price?: number;
  image?: string;
  quantity?: number;
  isExist?: boolean;
  errorQuantity?: string;
};

export type CustomLabelProps = {
  className?: string;
  titleLabel?: string;
};

export type ListCartProps = {
  className?: string;
  carts: CustomProductProps[];
  handleUpdateQuantity: (productId: string, action: Action) => void;
  removeFromCart: (productId: string) => void;
};

export type ListProductProps = {
  error: boolean;
  isLoading: boolean;
  defaultValue: number;
  isFull: boolean;
  products: CustomProductProps[];
  addToCart: (product: CustomProductProps) => void;
  removeFromCart: (productId: string) => void;
  isInCart: (productId: string) => CustomProductProps | undefined;
  showMorePoducts: () => void;
};

export type CartContextValue = {
  setCartLength: React.Dispatch<React.SetStateAction<number>>;
};

export type HeadingProps = {
  className?: string;
  element: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  content: React.ReactNode;
};

export type Action = "increase" | "decrease";
export type TButtonSize = "x-huge" | "huge" | "large" | "medium" | "small";
export type Type = "primary" | "secondary";
export type TButtonText = "uppercase" | "capitalize";
