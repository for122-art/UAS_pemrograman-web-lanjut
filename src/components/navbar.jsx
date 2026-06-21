import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/navbar.css";
import logo from "../assets/logo.png";
import { FaShoppingCart } from "react-icons/fa";

function Navbar() {
  const navigate = useNavigate();

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Badge Keranjang
  const [totalItems, setTotalItems] = useState(0);

  // =========================
  // SHOW / HIDE NAVBAR
  // =========================
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // =========================
  // UPDATE BADGE CART
  // =========================
  useEffect(() => {
    const updateBadge = () => {
      const cart =
        JSON.parse(localStorage.getItem("cart")) || [];

      const total = cart.reduce(
        (sum, item) => sum + item.qty,
        0
      );

      setTotalItems(total);
    };

    updateBadge();

    window.addEventListener(
      "cartUpdated",
      updateBadge
    );

    return () =>
      window.removeEventListener(
        "cartUpdated",
        updateBadge
      );
  }, []);

  return (
    <nav className={`navbar ${show ? "show" : "hide"}`}>
      {/* BRAND */}
      <div className="nav-brand">
        <img
          src={logo}
          alt="Logo"
          className="nav-logo-img"
        />

        <div className="nav-text">
          <span className="nav-top">
            MAMA
          </span>

          <span className="nav-bottom">
            MATCHA
          </span>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="nav-right">

        {/* OPENING HOURS */}
        <div className="opening-hours">
          <h4>Opening Hours</h4>
          <p>Senin - Jumat: 08.00 - 22.00</p>
        </div>

        {/* CART */}
      <div
  className="cart-icon"
  onClick={() => navigate("/cart")}
>
  <FaShoppingCart />

  {totalItems > 0 && (
    <span className="cart-badge">
      {totalItems}
    </span>
  )}
</div>

      </div>
    </nav>
  );
}

export default Navbar;