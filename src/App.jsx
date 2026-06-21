import Navbar from "./components/navbar";
import About from "./components/about";
import Product from "./components/product";
import Footer from "./components/footer";
import Hero from "./components/hero";

import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";

import background from "./assets/back.png";

import "./App.css";

function App() {
  // ==========================
  // STATE KERANJANG
  // ==========================
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // ==========================
  // TAMBAH KE KERANJANG
  // ==========================
  const addToCart = (product) => {
    const currentCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    const existingItem = currentCart.find(
      (item) => item.name === product.name
    );

    let updatedCart;

    if (existingItem) {
      updatedCart = currentCart.map((item) =>
        item.name === product.name
          ? {
              ...item,
              qty: item.qty + 1,
            }
          : item
      );
    } else {
      updatedCart = [
        ...currentCart,
        {
          ...product,
          qty: 1,
        },
      ];
    }

    setCart(updatedCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );

    window.dispatchEvent(
      new Event("cartUpdated")
    );
  };

  return (
    <>
      <Navbar />

      <Routes>
        {/* HOME */}
        <Route
          path="/"
          element={
            <div
              className="page"
              style={{
                backgroundImage: `url(${background})`,
              }}
            >
              {/* HEADER */}
              <section className="hero-section">
                <p className="small-text">
                  Premium Matcha Lifestyle
                </p>

                <h1 className="headline">
                  JUST MATCHA NO DRAMA
                </h1>

                <div className="about-matcha">
                  <h2>Apa Itu MamaMatcha?</h2>

                  <p>
                    Mamamatcha adalah minuman
                    matcha premium yang menawarkan
                    perpaduan rasa autentik,
                    creamy, dan estetik dengan
                    harga terjangkau.
                    Menggunakan bubuk matcha
                    impor Jepang berkualitas.
                  </p>
                </div>
              </section>

              <Hero />

              {/* INFO */}
              <section className="bottom-section">
                <div className="info-box">
                  <h3>Premium Quality</h3>
                  <p>
                    Menggunakan matcha pilihan
                    berkualitas tinggi.
                  </p>
                </div>

                <div className="info-box">
                  <h3>Fresh Everyday</h3>
                  <p>
                    Dibuat saat dipesan agar rasa
                    tetap maksimal.
                  </p>
                </div>

                <div className="info-box">
                  <h3>Healthy Choice</h3>
                  <p>
                    Pilihan tepat untuk gaya
                    hidup sehat modern.
                  </p>
                </div>
              </section>

              <About />

              {/* PRODUCT */}
              <Product addToCart={addToCart} />

              <Footer />
            </div>
          }
        />

        {/* CART */}
        <Route
          path="/cart"
          element={<Cart />}
        />
      </Routes>
    </>
  );
}

export default App;