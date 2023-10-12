import Navbar from "../common/navbar/Navbar";
import ListProduct from "../list-product/ListProduct";
import "./Menu.css";

const Menu = () => {
  return (
    <section className="component-layout ">
      <Navbar />
      <ListProduct />
    </section>
  );
};

export default Menu;
