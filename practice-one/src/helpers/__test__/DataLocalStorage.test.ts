import { beforeEach } from "node:test";
import { getListCart, setListCart } from "../DataLocalStorage";

describe("Get and Set Data in LocalStorage", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("Returns an empty array when CartProducts is not set in localStorage", () => {
    const getList = getListCart();
    expect(getList).toEqual([]);
  });

  it("Returns an array with values ​​when CartProducts is set in localStorage", () => {
    const carts = [
      {
        id: "1",
        name: "Yin & Yang",
        image: "https://sushi-restaurant-phi.vercel.app/item1.fb0267f5.jpg",
        quantity: 1,
        price: 10,
      },
    ];
    setListCart(carts);
    const getList = getListCart();
    expect(getList).toEqual(carts);
  });
});
