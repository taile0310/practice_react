export interface CustomProductProps {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity?: number;
  isExist?: boolean;
  errorQuantity?: string;
}
