export interface CustomBtnProps {
  textBtn: string;
  className?: string;
  isHomePage?: boolean;
  // onClick(event: React.MouseEvent): void; 
}

export interface CustomCardProps {
  titleCard: string;
  subtotalCard?: string;
  width?: number;
}

export interface CustomInputProps {
  placeholder?: string;
}

export interface CustomNavbarProps {
  isActice?: boolean;
  width?: number;
}
