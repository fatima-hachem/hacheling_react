import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "./App.css";

import hach_hero from "./assets/Screenshot 2026-09-05 002052.png";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
