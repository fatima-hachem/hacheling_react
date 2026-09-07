import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import PortfolioItem from "./PortfolioItem.tsx";
import "./App.css";

import hach_hero from "./assets/Screenshot 2026-09-05 002052.png";

const categories = ["animation", "graphicDesign", "webdev", "charaDesign"];

function App() {
  return (
    <>
      {/*
                HERO SECTION
      */}
      <Container fluid>
        <Row>
          <Col sm={12} md={8}>
            <h1>Hello World</h1>
          </Col>
          <Col sm={12} md={4}>
            <Image src={hach_hero} fluid alt={"image of a girl waving"} />
          </Col>
        </Row>
      </Container>

      {/*
                PORTFOLIO AND ABOUT SECTION
      */}
      <PortfolioItem category={categories[0]} />

      <Container fluid className="me-5 pe-5">
        <Row>
          <h1 className="text-end">About</h1>
        </Row>
        <Row className="justify-space-around">
          <Col className="portfolio_graphicDesign me-2">
            <h3>Boring Stuff</h3>
          </Col>
          <Col>
            <Row>
              <Col className="portfolio_animation mx-0">
                <h3>Interests</h3>
              </Col>
              <Col className="portfolio_charaDesign">
                <h3>Current Projects</h3>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      {/*
        BLOG SECTION
      */}
      <Container fluid>
        <Row></Row>
      </Container>

      {/* {categories.map((category) => {
        <Portfolio category={category} />;
      })} */}
    </>
  );
}

export default App;
