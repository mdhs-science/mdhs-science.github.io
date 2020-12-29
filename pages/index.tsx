import cn from "classnames";
import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import CenterContainer from "../components/CenterContainer";
import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.Home}>
      <NavigationBar />
      <div className={styles.banner}>
        <div className={styles.bannerTitle}>
          <h1 className={cn("display-1")}>Welcome to Science Club!</h1>
          <h3 className={cn("")}>Join us every Wednesday in room 251</h3>
        </div>
        <div
          className={styles.bannerBackground}
          style={{
            backgroundImage: `url("/assets/index-title-background.jpg")`,
          }}
        />
      </div>
      <a id="about" className={styles.anchor} />
      <CenterContainer className={styles.about}>
        <Container fluid>
          <Row>
            <Col>
              <h1>About Us</h1>
            </Col>
          </Row>
          <Row>
            <Col xs={12} lg={6}>
              <Image fluid src={"/assets/index-about.jpg"} />
            </Col>
            <Col xs={12} lg={6}>
              <p>
                Science Club explores the world of science outside what is
                regularly taught in the classroom. We run weekly experiments,
                host fun events, discuss interesting topics and much more!
                <br />
                Year-end events include participation in a science fair and/or
                written science contests. Stay tuned!
              </p>
              <p>
                Join our club discord!{" "}
                <a
                  href="https://discord.gg/3gq6sXZ"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  https://discord.gg/3gq6sXZ
                </a>
                <br />
                Follow us on Instagram!{" "}
                <a
                  href="https://www.instagram.com/mdhsscienceclub/"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  @mdhsscienceclub
                </a>
              </p>
            </Col>
          </Row>
        </Container>
      </CenterContainer>
      <div className={styles.gallery}>
        <CenterContainer className={styles.galleryText}>
          <h1>Gallery</h1>
          <p>Check out our gallery</p>
          <Button>View Gallery</Button>
        </CenterContainer>
        <div
          className={styles.galleryBackground}
          style={{ backgroundImage: `url("/assets/index-gallery.jpg")` }}
        />
      </div>
      <a id="contact-us" className={styles.anchor} />
      <CenterContainer className={styles.contacts}>
        <Container fluid>
          <Row>
            <Col>
              <h1>Our Contacts</h1>
            </Col>
          </Row>
          <Row>
            <Col xs={12} lg={6}>
              <h2>Address</h2>
              <p>
                Our Club runs at Markham District High School 89 Church St,
                Markham, ON L3P 2M3
              </p>
              <p> We meet every Wednesday after school in room 251</p>
            </Col>
            <Col xs={12} lg={6}>
              <h2>Club Contacts</h2>
              <p>
                If you have any questions about the club, want to join, or just
                want to have a chat (preferably about science 😜), feel free to
                contact us at any time!
              </p>
              <dl>
                <dt>Naira W. - President</dt>
                <dd>Email: 341027159@gapps.yrdsb.ca</dd>
                <dt>Bryan C. - Vice President</dt>
                <dd>Email: 341027159@gapps.yrdsb.ca</dd>
                <dt>Jane N. - Executive</dt>
                <dd>Email: 341027159@gapps.yrdsb.ca</dd>
                <dt>Sarah H. - Executive</dt>
                <dd>Email: 341027159@gapps.yrdsb.ca</dd>
                <dt>Ms. Ahmed - Teacher Advisor</dt>
                <dd>Email: jabeen.ahmed@yrdsb.ca</dd>
              </dl>
            </Col>
          </Row>
        </Container>
      </CenterContainer>
      <Footer />
    </div>
  );
}
