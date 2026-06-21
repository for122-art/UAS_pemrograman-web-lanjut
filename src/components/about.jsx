import '../styles/about.css'

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-left">
          <p className="about-tag">ABOUT OUR MATCHA</p>
          <h2>Healthy Energy, Pure Taste</h2>

          <p className="about-text">
            Kami menghadirkan minuman matcha premium dengan bahan pilihan,
            rasa autentik, dan kualitas terbaik untuk menemani aktivitas harian.
          </p>

          <p className="about-text">
            Setiap sajian dibuat fresh, seimbang, dan cocok untuk gaya hidup
            modern yang aktif serta sadar kesehatan.
          </p>
          <a 
              href="https://drive.google.com/file/d/1sGLd8u372I5FY0f-ciIfG-rgwmwbXcvf/view?usp=drivesdk" 
              target="_blank"
              rel="noopener noreferrer"
            >
          <button className="btn-oval">Explore Menu</button>
          </a>
        </div>

        <div className="about-right">
          <div className="about-card">
            <h3>100% Premium Matcha</h3>
            <p>Bubuk matcha berkualitas dengan aroma alami.</p>
          </div>

          <div className="about-card">
            <h3>Fresh Everyday</h3>
            <p>Dibuat saat dipesan agar rasa tetap maksimal.</p>
          </div>

          <div className="about-card">
            <h3>Modern Lifestyle</h3>
            <p>Teman terbaik untuk kerja, belajar, dan santai.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About