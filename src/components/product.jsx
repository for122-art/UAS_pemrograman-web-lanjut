import "../styles/product.css";

import best1 from "../assets/best 1.jpeg";
import best2 from "../assets/best 2.jpeg";
import best3 from "../assets/best 3.jpeg";

import product1 from "../assets/produk 1.jpeg";
import product2 from "../assets/produk 2.jpeg";
import product3 from "../assets/produk 3.jpeg";
import product4 from "../assets/produk 4.jpeg";
import product5 from "../assets/produk 5.jpeg";
import product9 from "../assets/produk 9.jpeg";
import product10 from "../assets/og.jpeg";
import product11 from "../assets/cloud.jpeg";

function Product({ addToCart }) {
  const bestSeller = [
    {
      image: best1,
      name: "Coconut Matcha",
      price: 20000,
    },
    {
      image: best2,
      name: "Matcha Cookies",
      price: 18000,
    },
    {
      image: best3,
      name: "Choco Matcha",
      price: 18000,
    },
  ];

  const products = [
    {
      image: product1,
      name: "Taro Punch Matcha",
      price: 20000,
    },
    {
      image: product2,
      name: "Red Velvet Cloud",
      price: 20000,
    },
    {
      image: product4,
      name: "Hot Matcha Latte",
      price: 15000,
    },
    {
      image: product3,
      name: "Hot Honey Usucha",
      price: 15000,
    },
    {
      image: product5,
      name: "Orange Matcha",
      price: 18000,
    },
    {
      image: product9,
      name: "Honey Matcha",
      price: 17000,
    },
    {
      image: product10,
      name: "Match OG",
      price: 15000,
    },
    {
      image: product11,
      name: "Matcha Cloud",
      price: 17000,
    },
  ];

  return (
    <section className="product-section" id="product">
      <div className="product-container">

        <p className="product-tag">
          OUR PRODUCT
        </p>

        <h2 className="product-title">
          Best Seller Matcha Series
        </h2>

        {/* BEST SELLER */}
        <div className="best-grid">
          {bestSeller.map((item, index) => (
            <div className="best-card" key={index}>
              <div className="image-wrapper">
                <img
                  src={item.image}
                  alt={item.name}
                />
              </div>

              <p className="product-price">
                Rp {item.price.toLocaleString("id-ID")}
              </p>

              <button
                className="order-btn"
                onClick={() => addToCart(item)}
              >
                Tambah ke Keranjang
              </button>
            </div>
          ))}
        </div>

        <h3 className="all-product-title">
          Another Products
        </h3>

        {/* ALL PRODUCT */}
        <div className="product-grid">
          {products.map((item, index) => (
            <div
              className="product-card"
              key={index}
            >
              <div className="image-wrapper">
                <img
                  src={item.image}
                  alt={item.name}
                />
              </div>

              <p className="product-price">
                Rp {item.price.toLocaleString("id-ID")}
              </p>

              <button
                className="order-btn"
                onClick={() => addToCart(item)}
              >
                Tambah ke Keranjang
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Product;