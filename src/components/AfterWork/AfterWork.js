import React from "react";
import styles from "./AfterWork.module.scss";

const AfterWork = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>AFTER WORK</h1>
        <p>Svakog petka od 17h</p>
      </div>
      <div className={styles.content}>
        <p>
          Petak veče je oduvek bilo rezervisano za provod i druženje! Uz naš
          koncept <strong>AFTER WORK</strong>, vikend počinje ranije, tačnije
          odmah nakon posla. 🥳
        </p>
        <p>
          Umesto da razmišljate šta kuvati nakon posla, <strong>mi preuzimamo tu ulogu</strong> i
          spremamo za vas potpuno besplatno:
        </p>
        <div className={styles.features}>
          <div className={styles.featureItem}>
            <span className={styles.emoji}>🍱</span>
            <p>Buffet na račun kuće</p>
          </div>
          <div className={styles.featureItem}>
            <span className={styles.emoji}>🍻</span>
            <p>Piće dobrodošlice</p>
          </div>
          {/* <div className={styles.featureItem}>
            <span className={styles.emoji}>🎈</span>
            <p>Program povodom otvaranja</p>
          </div> */}
        </div>
        {/* <p>Ovog petka u znaku domaćeg:</p>
        <ul className={styles.list}>
          <li>👉 Domaća kuhinja</li>
          <li>👉 Domaća rakija</li>
        </ul> */}
        <p className={styles.ending}>
          <strong>JER VIKEND POČINJE KOD NAS 🤗</strong>
        </p>
      </div>
    </div>
  );
};

export default AfterWork;
