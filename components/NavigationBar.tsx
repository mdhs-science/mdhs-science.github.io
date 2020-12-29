import React, { useEffect, useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import styles from "../styles/NavigationBar.module.scss";
import cn from "classnames";

function isScrollTop() {
  return window.scrollY < 100;
}

export default function NavigationBar() {
  const [transparent, setTransparent] = useState(true);

  useEffect(() => {
    const handler = () => setTransparent(() => isScrollTop());
    handler();
    window.addEventListener("scroll", handler);
    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("scroll", handler);
      window.removeEventListener("resize", handler);
    };
  }, []);

  return (
    <Navbar
      className={cn(styles.NavigationBar, {
        [styles.transparent]: transparent,
      })}
      bg="dark"
      variant="dark"
      expand="lg"
      fixed={"top"}
    >
      <Navbar.Brand href="/" className={styles.brand}>
        <img alt="logo" className={styles.logo} src="/assets/logo.png" /> MDHS
        Science Club
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className={styles.nav}>
          <Nav.Link href="/#about">About</Nav.Link>
          <Nav.Link href="/gallery">Gallery</Nav.Link>
          <Nav.Link href="/#contact-us">Contact Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
