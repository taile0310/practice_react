import { MouseEventHandler } from "react";

export interface CustomBtnProps {
  textBtn?: string;
  className?: string;
  isHomePage?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface CustomCardProps {
  showInput?: boolean;
  className?: string;
  titleCard: string;
  total?: string;
  width?: number;
  titleButton: string;
}

export interface CustomInputProps {
  placeholder?: string;
  className?: string;
  type?: string;
  id?: string;
  name?: string;
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
  className?: string;
}

export interface CustomFooterProps {
  className?: string;
}

export interface CustomLabelProps {
  className?: string;
  titleLabel?: string;
}

export interface CustomCartProps {
  [productId: string]: CustomProductProps;
}
