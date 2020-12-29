import React from "react";
import { useRouter } from "next/router";
import styles from "../../styles/GalleryPage.module.scss";
import { getProps } from "../../lib";
import { InferGetStaticPropsType } from "next";
import NavigationBar from "../../components/NavigationBar";
import CenterContainer from "../../components/CenterContainer";
import cn from "classnames";
import ImageHeader from "../../components/ImageHeader";
import Footer from "../../components/Footer";
import ImageGallery from "../../components/ImageGallery";

type GalleryProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function GalleryPage(props: GalleryProps) {
  const { galleries } = props;
  const router = useRouter();
  const { id } = router.query;
  const gallery = galleries.find((g) => g.id === id);
  if (!gallery) {
    return <div>Error</div>;
  }

  return (
    <div className={styles.GalleryPage}>
      <NavigationBar />
      <ImageHeader
        title={`Gallery - ${gallery.id}`}
        subTitle="Check out all our photos here"
        backgroundSrc="/assets/index-gallery.jpg"
      />
      <ImageGallery title={""} images={gallery.images} />
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  return { props: getProps() };
}

export async function getStaticPaths() {
  return {
    paths: getProps().galleries.map(({ id }) => ({ params: { id } })),
    fallback: false,
  };
}
