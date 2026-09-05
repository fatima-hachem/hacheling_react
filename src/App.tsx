import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Portfolio from "./Portfolio.tsx";
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
          <Col>
            <h1>Hello World</h1>
          </Col>
          <Col>
            <Image src={hach_hero} fluid alt={"image of a girl waving"} />
          </Col>
        </Row>
      </Container>

      {/*
                PORTFOLIO SECTION
      */}

      <Portfolio category={categories[0]} />

      {/* {categories.map((category) => {
        <Portfolio category={category} />;
      })} */}
    </>
  );
}

export default App;
