import React, { useEffect, useState } from "react";

import "./listProduct.css";
import Button from "../common/button/Button";
import { BASE_URL } from "../../constants/base-url";
import { CustomProductProps } from "../../types/interface";
import Image from "../common/image/Image";
import Footer from "../footer/Footer";

const ListProduct = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState<CustomProductProps[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchData(BASE_URL);
  }, []);

  async function fetchData(url: string) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = (await response.json()) as CustomProductProps[];
        console.log("%cListProduct.tsx line:23 data", "color: #007acc;", data);
        setProducts(data);
        setIsLoading(false);
      } else {
        setError(true);
        setIsLoading(false);
      }
    } catch (error) {
      setError(true);
      setIsLoading(false);
    }
  }

  if (error) {
    return (
      <h3>
        An error occurred when fetching data. Please check the API and try
        again.
      </h3>
    );
  }

  if (isLoading) {
    return <div>Loading....</div>;
  }

  return (
    <section className="section-menu font-family">
      <h3 className="text-h3">Sushi food</h3>
      <hr className="dash dash-menu"></hr>
      <ul className="list-menu">
        {products.map((product) => {
          return (
            <li className="menu-item" key={product.id}>
              <Image
                className="img-rectangle"
                src={`${product.image}`}
                alt={product.name}
              />
              <span className="text-small">{product.name}</span>
            </li>
          );
        })}
      </ul>
      <Button textBtn="Load more" className="btn-item secondary-text-btn" />
      <Footer className="copyright-text" />
    </section>
  );
};

export default ListProduct;
