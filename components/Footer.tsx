import React from "react";
import styles from "../styles/Footer.module.scss";
import CenterContainer from "./CenterContainer";

export default function Footer() {
  return (
    <div className={styles.Footer}>
      {/* <CenterContainer> */}
      <span>Created with Next.js and Github Pages</span>
      {/* </CenterContainer> */}
    </div>
  );
}
