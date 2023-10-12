import React from "react";

export interface CustomBtnProps {
  textBtn?: string;
  className?: string;
  isHomePage?: boolean;
  onClick?: () => void;
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
  isActice?: boolean;
  width?: number;
}

export interface CustomImageProps {
  src: string;
  alt?: string;
  className?: string;
}

export interface CustomProductProps {
  id: string;
  name: string;
  price?: number;
  image?: string;
}

export interface CustomFooterProps {
  className?: string;
}

export interface CustomLabelProps {
  className?: string;
  titleLabel?: string;
}
