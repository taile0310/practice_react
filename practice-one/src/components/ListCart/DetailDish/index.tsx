type TDetailDish = {
  name: string;
  price: number;
  className?: string;
};

// Component DeatailDish
const DetailDish = ({ name, price, className }: TDetailDish) => {
  return (
    <div className={`detail-dish ${className}`}>
      <span className="text-medium">{name}</span>
      <span className="text-price">${price}.00</span>
    </div>
  );
};

export default DetailDish;
