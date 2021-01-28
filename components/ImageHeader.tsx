import React from "react";
import styles from "../styles/ImageHeader.module.scss";
import CenterContainer from "./CenterContainer";
import cn from "classnames";
import ReactMarkdown from "react-markdown";

type ImageHeaderProps = {
  title: string;
  subTitle: string;
  backgroundSrc: string;
};

export default function ImageHeader(props: ImageHeaderProps) {
  return (
    <div className={styles.ImageHeader}>
      <CenterContainer className={styles.headerText}>
        <h1 className={cn("display-1")}>{props.title}</h1>
        <ReactMarkdown className={styles.subTitle}>
          {props.subTitle}
        </ReactMarkdown>
      </CenterContainer>
      <div
        className={styles.headerBackground}
        style={{ backgroundImage: `url("${props.backgroundSrc}")` }}
      />
    </div>
  );
}
