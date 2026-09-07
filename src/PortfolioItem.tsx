import { Button, Image, Modal, Container, Row, Col } from "react-bootstrap";
import category_01_img from "./assets/images/category_01.png";
import category_02_img from "./assets/images/category_02.png";
import category_03_img from "./assets/images/category_03.png";
import category_04_img from "./assets/images/category_04.png";
import category_05_img from "./assets/images/category_05.png";
import category_06_img from "./assets/images/category_06.png";
import "./App.css";

let imageObj = {
  animation: category_01_img,
  graphicDesgn: category_02_img,
  webdev: category_03_img,
  charaDesign: category_04_img,
};

let images = ["image", "image", "image", "image", "image", "image"];

function PortfolioItem({ category }) {
  return (
    <>
      <Col
        xs={12}
        sm={12}
        md={10}
        lg={11}
        xl={11}
        className={"w-100 mt-5 pt-5 portfolio_" + category}
      >
        <Row className="justify-content-center">
          {images.map((image) => (
            <Col
              xl={3}
              md={5}
              sm={11}
              className="mx-2 my-3"
              max-height="200-px"
            >
              <Image src={imageObj[category]} thumbnail />
            </Col>
          ))}
        </Row>
      </Col>
    </>
  );
}

export default PortfolioItem;
