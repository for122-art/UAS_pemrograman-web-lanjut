import React from "react";
import '../styles/footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* ALAMAT */}
        <div className="footer-address">
          <h3>Alamat</h3>
          <p>
            Jl. Parit Haji Husin 1, Pontianak
          </p>
        </div>

        {/* SOCIAL */}
        <div className="footer-social">
          <h3>Follow Us</h3>

          <a
            href="https://www.instagram.com/mamamatcha.ptk.paris1?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="ig-link"
          >
            {/* Instagram SVG icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="ig-icon"
            >
              <path d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2zm0 2A3.76 3.76 0 0 0 4 7.75v8.5A3.76 3.76 0 0 0 7.75 20h8.5A3.76 3.76 0 0 0 20 16.25v-8.5A3.76 3.76 0 0 0 16.25 4h-8.5z"/>
              <path d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/>
              <circle cx="17.5" cy="6.5" r="1.2"/>
            </svg>

            <span>@mamamatcha.ptk.paris1</span>
          </a>

        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Mama Matcha. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;