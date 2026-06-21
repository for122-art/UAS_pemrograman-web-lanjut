import { useState, useEffect } from "react";
import "../styles/hero.css";

import product1 from "../assets/og.jpeg";
import product2 from "../assets/cloud.jpeg";
import product3 from "../assets/produk 3.jpeg";
import product4 from "../assets/produk 4.jpeg";

const products = [
  { image: product1, name: "Matcha OG", desc: "Rasa matcha original premium dengan tekstur lembut dan aroma alami." },
  { image: product2, name: "Matcha Cloud", desc: "Perpaduan matcha dan cream macchiato yang seimbang dan nikmat." },
  { image: product3, name: "Hot Honey Usucha", desc: "Rasa matcha umami yang dipadukan dengan madu, disajikan hangat untuk sensasi menenangkan." },
  { image: product4, name: "Hot Matcha Latte", desc: "Memadukan antara matcha umami dengan susu panas yang creamy." },
];

function Hero() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + products.length) % products.length);
  };

 

  return (
    <section className="hero">
      <div className="hero-wrapper">

        <button className="nav-btn left" onClick={prevSlide}>❮</button>

        <div className="slider-window">

          <div
            className="slider-track"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {products.map((item, i) => (
              <div className="slide" key={i}>
                <div className="product-box">

                  <div className="product-image-side card">
                    <img src={item.image} alt={item.name} className="product-image" />
                  </div>

                  <div className="product-desc-side">
                    <span className="badge">For You</span>
                    <h2>{item.name}</h2>
                    <p>{item.desc}</p>

                    <ul className="features">
                      <li>✔ 100% Real Matcha</li>
                      <li>✔ Fresh Brew Everyday</li>
                      <li>✔ Less Sugar Option</li>
                      <li>✔ Smooth & Creamy Taste</li>
                    </ul>

                    
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>

        <button className="nav-btn right" onClick={nextSlide}>❯</button>

      </div>

      <div className="dots">
        {products.map((_, i) => (
          <span
            key={i}
            className={index === i ? "dot active" : "dot"}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;