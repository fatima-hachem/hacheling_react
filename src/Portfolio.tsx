import { Button, Image, Modal, Container, Row, Col } from "react-bootstrap";
import category_01_img from "./assets/images/category_01.png";
import category_02_img from "./assets/images/category_02.png";
import category_03_img from "./assets/images/category_03.png";
import category_04_img from "./assets/images/category_04.png";
import category_05_img from "./assets/images/category_05.png";
import category_06_img from "./assets/images/category_06.png";
import "./App.css";

let images = [
  category_01_img,
  category_02_img,
  category_03_img,
  category_04_img,
  category_05_img,
  category_06_img,
];

function Portfolio({ category }) {
  return (
    <>
      <Container className={"mt-5 pt-5 portfolio_" + category} fluid>
        <Row className="justify-content-center">
          {images.map((image) => (
            <Col xl={4} md={6} sm={11}>
              <Image src={image} thumbnail />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Portfolio;
