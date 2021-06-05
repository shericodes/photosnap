import React from "react";
import * as styles from "./Button.module.scss";

const Button = ({ variant, children }) => {
  return (
    <button className={`${styles.btn} ${styles.primary}`}>{children}</button>
  );
};

export default Button;
