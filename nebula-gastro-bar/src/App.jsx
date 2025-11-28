import React from "react";
import { motion } from "motion/react";
import "./App.css";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

function App() {
  return (
    <div className="app">
      {/* NAVBAR */}
      <header className="navbar">
        <div className="nav-container">
          <div className="logo">
            <span className="logo-icon">✦</span>
            <span className="logo-text">Nebula Gastro Bar</span>
          </div>
          <nav>
            <ul className="nav-links">
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#menu">Menú</a></li>
              <li><a href="#experiencia">Experiencia</a></li>
              <li><a href="#reservas">Reservas</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <main>
        <section id="inicio" className="hero-section">
          <div className="hero-overlay" />
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="hero-tag">Experiencia culinaria nocturna</p>
            <h1>Nebula Gastro Bar</h1>
            <p className="hero-subtitle">
              Cocteles de autor, cocina creativa y una atmósfera inmersiva entre luces y sabores.
            </p>
            <div className="hero-buttons">
              <a href="#reservas" className="btn btn-primary">Reservar mesa</a>
              <a href="#menu" className="btn btn-outline">Ver menú</a>
            </div>
          </motion.div>
        </section>

        {/* SOBRE NOSOTROS */}
        <motion.section
          id="sobre"
          className="section section-light"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          variants={sectionVariants}
        >
          <div className="section-container two-columns">
            <div>
              <h2>Sobre Nebula</h2>
              <p>
                Nebula Gastro Bar fusiona cocina contemporánea con mixología de autor,
                creando un viaje de sabores inspirado en la noche y las luces de la ciudad.
              </p>
              <p>
                Nuestro equipo de chefs y bartenders diseña cada plato y coctel como
                una constelación única, cuidando cada detalle.
              </p>
            </div>
            <div className="sobre-highlight">
              <h3>Por qué elegirnos</h3>
              <ul>
                <li>Ambiente íntimo con iluminación ambiental y música chill.</li>
                <li>Menú rotativo con propuestas de temporada.</li>
                <li>Cocteles de autor inspirados en la astronomía.</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* MENÚ */}
        <motion.section
          id="menu"
          className="section section-dark"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          variants={sectionVariants}
        >
          <div className="section-container">
            <div className="section-header">
              <h2>Menú Estelar</h2>
              <p>Algunas de nuestras creaciones más destacadas de la carta.</p>
            </div>

            <div className="cards-grid">
              {[
                {
                  title: "Constelación de Tapas",
                  desc: "Selección de mini entradas para compartir.",
                  price: "$38.000",
                },
                {
                  title: "Risotto Nebulosa",
                  desc: "Risotto cremoso con langostinos y notas cítricas.",
                  price: "$45.000",
                },
                {
                  title: "Burger Galáctica",
                  desc: "Carne angus, queso madurado y aioli ahumado.",
                  price: "$39.000",
                },
                {
                  title: "Ceviche Aurora",
                  desc: "Pescado fresco, leche de tigre y maíz tostado.",
                  price: "$36.000",
                },
                {
                  title: "Coctel Supernova",
                  desc: "Gin infusionado, frutos rojos y espuma cítrica.",
                  price: "$28.000",
                },
                {
                  title: "Postre Eclipse",
                  desc: "Bizcocho de chocolate, helado artesanal y frutos rojos.",
                  price: "$24.000",
                },
              ].map((item, index) => (
                <motion.article
                  key={item.title}
                  className="card plate-card"
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 220, damping: 15 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transitionDelay={index * 0.05}
                >
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <span className="price">{item.price}</span>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.section>

        {/* EXPERIENCIA */}
        <motion.section
          id="experiencia"
          className="section section-light"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          variants={sectionVariants}
        >
          <div className="section-container experience">
            <div>
              <h2>Experiencia Nebula</h2>
              <p>
                Más que una cena: luces, texturas, aromas y sonidos se combinan para
                crear una velada inmersiva.
              </p>
              <p>
                Ideal para celebraciones, citas especiales o simplemente desconectarte de la rutina.
              </p>
            </div>
            <div className="experience-tags">
              <motion.div
                className="tag-pill"
                whileHover={{ scale: 1.06 }}
                transition={{ type: "spring", stiffness: 260, damping: 12 }}
              >
                ✦ Noches temáticas
              </motion.div>
              <motion.div
                className="tag-pill"
                whileHover={{ scale: 1.06 }}
                transition={{ type: "spring", stiffness: 260, damping: 12 }}
              >
                ✦ Live DJ sessions
              </motion.div>
              <motion.div
                className="tag-pill"
                whileHover={{ scale: 1.06 }}
                transition={{ type: "spring", stiffness: 260, damping: 12 }}
              >
                ✦ Maridajes guiados
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* RESERVAS */}
        <motion.section
          id="reservas"
          className="section section-dark"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          variants={sectionVariants}
        >
          <div className="section-container reservations">
            <div className="section-header">
              <h2>Reservas</h2>
              <p>Agenda tu mesa en pocos pasos.</p>
            </div>
            <form className="form">
              <div className="field">
                <label htmlFor="nombre">Nombre completo</label>
                <input id="nombre" type="text" placeholder="Tu nombre" required />
              </div>
              <div className="field-grid">
                <div className="field">
                  <label htmlFor="personas">Personas</label>
                  <input
                    id="personas"
                    type="number"
                    min="1"
                    max="20"
                    placeholder="2"
                    required
                  />
                </div>
                <div className="field">
                  <label htmlFor="fecha">Fecha</label>
                  <input id="fecha" type="date" required />
                </div>
                <div className="field">
                  <label htmlFor="hora">Hora</label>
                  <input id="hora" type="time" required />
                </div>
              </div>
              <div className="field">
                <label htmlFor="mensaje">Comentarios</label>
                <textarea
                  id="mensaje"
                  rows="3"
                  placeholder="Alergias, ocasión especial, tipo de mesa..."
                />
              </div>
              <button type="submit" className="btn btn-primary full-width">
                Enviar reserva
              </button>
            </form>
          </div>
        </motion.section>

        {/* TESTIMONIOS */}
        <motion.section
          id="testimonios"
          className="section section-light"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          variants={sectionVariants}
        >
          <div className="section-container">
            <div className="section-header">
              <h2>Lo que dicen nuestros clientes</h2>
            </div>
            <div className="cards-grid">
              {[
                {
                  text: "Ambiente increíble, ideal para una cita. Los cocteles son otro nivel.",
                  name: "Ana",
                },
                {
                  text: "Cada plato se siente diseñado con intención. Volveré sin duda.",
                  name: "Carlos",
                },
                {
                  text: "El lugar perfecto para cerrar el día con amigos y buena música.",
                  name: "Luisa",
                },
              ].map((t) => (
                <motion.article
                  key={t.name}
                  className="card testimonial-card"
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 220, damping: 16 }}
                >
                  <p>"{t.text}"</p>
                  <span>— {t.name}</span>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.section>

        {/* CONTACTO */}
        <motion.section
          id="contacto"
          className="section section-dark"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          variants={sectionVariants}
        >
          <div className="section-container contact-grid">
            <div>
              <h2>Contacto</h2>
              <p><strong>Teléfono:</strong> <a href="tel:239847478">239847478</a></p>
              <p><strong>Email:</strong> contacto@nebula-gastrobar.com</p>
              <p><strong>Dirección:</strong> Calle Principal 123, Ciudad</p>
              <p><strong>Horario:</strong> Lunes a domingo, 5:00 p.m. - 1:00 a.m.</p>
              <a href="tel:239847478" className="btn btn-outline">
                Llamar ahora
              </a>
            </div>
            <div className="map-placeholder">
              <p>Mapa del local (aquí puedes incrustar Google Maps)</p>
            </div>
          </div>
        </motion.section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-container">
          <p>© {new Date().getFullYear()} Nebula Gastro Bar. Todos los derechos reservados.</p>
          <p>@nebula.gastrobar · Instagram · TikTok</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
