export interface CustomProductProps {
  id: string;
  name: string;
  price: number | undefined;
  image: string;
  quantity: number | undefined;
  isExist?: boolean;
  errorQuantity?: string;
}
