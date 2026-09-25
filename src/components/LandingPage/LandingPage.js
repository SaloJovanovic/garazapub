import React from "react";
import { motion } from "framer-motion";
import styles from "./LandingPage.module.scss";
import { FaHome, FaHamburger, FaBeer } from "react-icons/fa";

const LandingPage = () => {
  return (
    <div className={styles.landingPage}>
      {/* Hero Section */}
      <motion.div
        className={styles.hero}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className={styles.title}>Dobrodošli u Garaža Pub</h1>
        <p className={styles.subtitle}>
          Mesto gde počinju najbolje priče, uz dobru muziku, hranu i piće!
        </p>
        <motion.button
          className={styles.ctaButton}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {window.location.href='/menu'}}
        >
          Pogledaj Meni
        </motion.button>
      </motion.div>

      {/* Features Section */}
      <motion.div
        className={styles.features}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 1 } },
        }}
      >
        <div className={styles.feature}>
          <FaHome/>
          <h3>Prijatna atmosfera</h3>
          <p>Mesto gde se svako oseća kao kod kuće</p>
        </div>
        <div className={styles.feature}>
          <FaHamburger/>
          <h3>Ukusna hrana</h3>
          <p>Specijaliteti za svačiji ukus.</p>
        </div>
        <div className={styles.feature}>
          <FaBeer/>
          <h3>Širok izbor pića</h3>
          <p>Craft piva, kokteli i još mnogo toga.</p>
        </div>
      </motion.div>

      {/* Footer */}
      {/* <footer className={styles.footer}>
        <p>&copy; 2024 Garaža Pub. Sva prava zadržana.</p>
      </footer> */}
    </div>
  );
};

export default LandingPage;
