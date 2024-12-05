import React from "react";
import styles from "./Footer.module.scss";
import logo from "../../images/Garaza-logo-transparent-siva-slova-1.png";
import logo2 from "../../images/Garaza-logo-transparent-zelena-slova-1.png";
import logo3 from "../../images/Garaza-logo-transparent-zelena-slova-1-removebg-preview.png"
import logo4 from "../../images/Garaza-logo-transparent-siva-slova-1-removebg-preview.png"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>
          <img src={logo4} alt="Garaža Pub Logo" />
        </div>

        {/* Contact Info */}
        <div className={styles.info}>
          <p>Adresa: Vladike Nikolaja 1, Beograd 11000</p>
          <p>
            Telefon:{" "}
            <a href="tel:+381677005000" className={styles.link}>
              067 7005000
            </a>
          </p>
        </div>

        {/* Google Map */}
        <div className={styles.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3552.1206840104405!2d20.55099997672333!3d44.76359797990985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4759ed31ef7cdd3d%3A0x399f0df4a165b020!2sGaraza%20Pub!5e1!3m2!1sen!2srs!4v1733420839235!5m2!1sen!2srs"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
