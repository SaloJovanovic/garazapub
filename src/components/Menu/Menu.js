import React, { useState } from "react";
import styles from "./Menu.module.scss";
import img1 from "../../images/prednja strana.jpg";
import img2 from "../../images/zadnja strana.jpg";

const Menu = () => {
  return (
    <div className={styles.container}>
      <img src={img1}/>
      <img src={img2}/>
    </div>
  );
};

export default Menu;