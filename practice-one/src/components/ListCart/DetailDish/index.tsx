type TDetailDish = {
  name: string;
  price: number;
};
const DetailDish = ({ name, price }: TDetailDish) => {
  return (
    <div className="detail-dish">
      <span className="text-medium">{name}</span>
      <span className="text-price">${price}.00</span>
    </div>
  );
};

export default DetailDish;
