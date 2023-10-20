import { ChangeEventHandler, MouseEventHandler } from "react";

export interface CustomBtnProps {
  textBtn?: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  variants?: boolean;
}

export interface CustomCardProps {
  showInput?: boolean;
  className?: string;
  titleCard: string;
  total?: string;
  width?: number;
  titleButton: string;
  onSubmit?: () => void;
}

export interface CustomInputProps {
  placeholder?: string;
  className?: string;
  type?: string;
  id?: string;
  name?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: ChangeEventHandler<HTMLInputElement>;
}

export interface CustomNavbarProps {
  isActive?: boolean;
  width?: number;
  className?: string;
  cartLength?: number;
}

export interface CustomImageProps {
  src: string;
  alt?: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLImageElement>;
}

export interface CustomProductProps {
  id: string;
  name: string;
  price?: number;
  image?: string;
  quantity?: number;
  isExist?: boolean;
  errorQuantity?: string;
}

export interface CustomFooterProps {
  className?: string;
}

export interface CustomLabelProps {
  className?: string;
  titleLabel?: string;
}

export interface ListCartProps {
  className?: string;
  handleUpdateQuantity: (productId: string, action: Action) => void;
  removeFromCart: (productId: string) => void;
  carts: CustomProductProps[];
}

export interface ListProductProps {
  addToCart: (product: CustomProductProps) => void;
  removeFromCart: (productId: string) => void;
  isInCart: (productId: string) => CustomProductProps | undefined;
  showMorePoducts: () => void;
  error: boolean;
  isLoading: boolean;
  products: CustomProductProps[];
  defaultValue: number;
  isFull: boolean;
}

export interface CartContextValue {
  setCartLength: React.Dispatch<React.SetStateAction<number>>;
}

export interface HeadingProps {
  element: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  content: React.ReactNode;
  className?: string;
}

export type Action = "increase" | "decrease";
