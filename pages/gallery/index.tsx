import { InferGetStaticPropsType } from "next";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../../components/Footer";
import ImageHeader from "../../components/ImageHeader";
import NavigationBar from "../../components/NavigationBar";
import { getProps } from "../../lib";
import styles from "../../styles/Gallery.module.scss";

type GalleryPreviewProps = {
  id: string;
};

function GalleryPreview(props: GalleryPreviewProps) {
  return (
    <a className={styles.galleryPreviewWrapper} href={`/gallery/${props.id}`}>
      <div className={styles.GalleryPreview}>
        <div className={styles.imgWrapper}>
          <div
            className={styles.img}
            style={{ backgroundImage: `url("/assets/index-gallery.jpg")` }}
          />
        </div>
        <h1 className={styles.text}>{props.id}</h1>
      </div>
    </a>
  );
}

type GalleryProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function Gallery(props: GalleryProps) {
  const { galleries } = props;

  return (
    <div className={styles.Gallery}>
      <NavigationBar />
      <ImageHeader
        title="Gallery"
        subTitle="Check out all our photos here"
        backgroundSrc="/assets/index-gallery.jpg"
      />
      <Container fluid className={styles.galleryPreviews}>
        <Row>
          {galleries.map((g) => (
            <Col xs={12} md={6} lg={4} key={g.id}>
              <GalleryPreview id={g.id} />
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  return { props: getProps() };
}
