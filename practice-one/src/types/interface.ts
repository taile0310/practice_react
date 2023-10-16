import { ChangeEventHandler, MouseEventHandler } from "react";

export interface CustomBtnProps {
  textBtn?: string;
  className?: string;
  isHomePage?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

export interface CustomCardProps {
  showInput?: boolean;
  className?: string;
  titleCard: string;
  total?: string;
  width?: number;
  titleButton: string;
  onSubmit?: (() => void) | undefined;
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
  setCartLength: (length: number) => void;
}

export interface ListProductProps {
  setCartLength: (length: number) => void;
}

export interface NavbarProps extends CustomNavbarProps {
  cartLength?: number;
}
