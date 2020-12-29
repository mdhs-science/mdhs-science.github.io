import React from "react";
import { Container, Row, Col } from "react-bootstrap";

type CenterContainerProps = {
  id?: string;
  className?: string;
  outerClassName?: string;
  children?: React.ReactNode;
};

export default function CenterContainer(props: CenterContainerProps) {
  return (
    <Container className={props.outerClassName} id={props.id}>
      <Row>
        <Col xs={0} lg={1} />
        <Col xs={12} lg={10} className={props.className}>
          {props.children}
        </Col>
        <Col xs={0} lg={1} />
      </Row>
    </Container>
  );
}
