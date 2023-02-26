import React from "react";
import styles from "./navBar.module.css";

type NavBar = {
  title: string;
};

const NavBar: React.FC<NavBar> = ({ title }) => {
  return (
    <div className={styles.body}>
      <div className={styles.title}>
        <h4>Makalius</h4>
      </div>
    </div>
  );
};

export default NavBar;
