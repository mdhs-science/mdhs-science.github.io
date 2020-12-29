import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../styles/ImageGallery.module.scss";
import cn from "classnames";

type Image = {
  src: string;
  description: string;
};

type ImageGalleryProps = {
  title: string;
  images: Image[];
};

export default function ImageGallery(props: ImageGalleryProps) {
  const [popupImage, setPopupImage] = useState<number | null>(null);
  return (
    <>
      <div className={styles.ImageGallery}>
        <Container>
          <Row>
            <Col>
              <h1 className={styles.title}>{props.title}</h1>
            </Col>
          </Row>
          <Row>
            {props.images.map((img, i) => (
              <Col xs={12} sm={6} md={4} lg={3} key={i}>
                <Image src={img.src} onClick={() => setPopupImage(i)} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <ImagePopup
        image={props.images[popupImage ?? 0]}
        onClose={() => setPopupImage(null)}
        shown={popupImage !== null}
      />
    </>
  );
}

type ImageProps = {
  src: string;
  onClick: () => void;
};

function Image(props: ImageProps) {
  return (
    <div className={styles.image} onClick={props.onClick}>
      <div
        className={styles.imageInner}
        style={{ backgroundImage: `url("${props.src}")` }}
      />
    </div>
  );
}

type ImagePopupProps = {
  image: Image;
  shown: boolean;
  onClose: () => void;
};

function ImagePopup(props: ImagePopupProps) {
  return (
    <div className={cn(styles.ImagePopup, { [styles.hidden]: !props.shown })}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url("${props.image.src}")` }}
      />
      <p className={styles.label}>{props.image.description}</p>
      <button
        type="button"
        className={cn("close", styles.close)}
        aria-label="Close"
        onClick={props.onClose}
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
}
