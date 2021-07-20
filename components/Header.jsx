import React, { useState } from "react";
import Link from "next/link";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import headerStyles from "../styles/Header.module.css";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleClick = () => {
    setShowMenu(!showMenu);
  };
  const closeMobileMenu = () => setShowMenu(false);

  return (
    <nav className={headerStyles.navbar}>
      <div className={headerStyles.container}>
        <div className={headerStyles.navbar_logo}>
          <Link href="/">
            <a>
              CMS<span> Portofolio.</span>
            </a>
          </Link>
          <h4>A Backoffice Site</h4>
        </div>
        <div onClick={handleClick} className={headerStyles.menubtn}>
          {showMenu ? (
            <CloseIcon style={{ color: "#555", fontSize: "2rem" }} />
          ) : (
            <MenuIcon style={{ color: "#555", fontSize: "2rem" }} />
          )}
        </div>
        <ul
          className={
            showMenu
              ? `${headerStyles.navbar_menu} ${headerStyles.active}`
              : `${headerStyles.navbar_menu}`
          }
        >
          <li>
            <Link href="/" passHref>
              <a className={headerStyles.navbar_toggle}> Projects</a>
            </Link>
          </li>
          <li>
            <Link href="/about" passHref>
              <a className={headerStyles.navbar_toggle}> About</a>
            </Link>
          </li>
          <li>
            <Link href="/projects" passHref>
              <a className={headerStyles.navbar_toggle}> New Project</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
