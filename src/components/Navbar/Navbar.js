import React, {useState} from "react";
import style from './Navbar.module.scss';
import logo from "../../images/Garaza-logo-transparent-siva-slova-1.png";
import logo2 from "../../images/Garaza-logo-transparent-zelena-slova-1.png";

const Navbar = () => {

  const[scroll, setScroll] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100)
      setScroll(true)
    else
      setScroll(false)
  })

  const[menuClicked, setMenuClicked] = useState(false);

  const menuClick = () => {
    if (menuClicked)
      setMenuClicked(false)
    else
      setMenuClicked(true)
  }

  return (
    <div className={scroll ? style.header + " " + style.scroll : style.header}>
      <a href={'#'} className={style.logo}>
        <img src={logo2}/>
      </a>
      <a onClick={menuClick} className={menuClicked ? style.menu + " " + style.clicked : style.menu}>
        <div id={style.firstLine} className={style.line}></div>
        <div id={style.secondLine} className={style.line}></div>
        <div id={style.thirdLine} className={style.line}></div>
      </a>
      <ul className={menuClicked ? style.navigation + " " + style.shown : style.navigation}>
        <li>
          <a onClick={menuClick} href={'/'}>Početna</a>
        </li>
        <li>
          <a onClick={menuClick} href={'/menu'}>Meni</a>
        </li>
        <li>
          <a onClick={menuClick} href={'/afterwork'}>After Work</a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar;