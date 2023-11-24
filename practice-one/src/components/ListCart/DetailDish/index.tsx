// React
import { FC, ReactElement, memo } from "react";

type TDetailDish = {
  name: string;
  price: number;
  className?: string;
};

const DetailDish: FC<TDetailDish> = memo(
  ({ name, price, className }): ReactElement => {
    return (
      <div className={`detail-dish ${className}`}>
        <span className="text-medium">{name}</span>
        <span className="text-price">${price}.00</span>
      </div>
    );
  }
);

export default DetailDish;
