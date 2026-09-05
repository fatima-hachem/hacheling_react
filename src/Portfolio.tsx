import { Button, Image, Modal, Container, Row, Col } from "react-bootstrap";

function Portfolio({ subcategory, categories }) {
  return (
    <>
      <Container>
        <Row>
          <Col>
            {categories.map((category) => {
              <Button className={category}>{category}</Button>;
            })}
          </Col>
          <Col>
            <h2>Portfolio</h2>
          </Col>
          <Col>
            <h3>{Subcategory}</h3>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Portfolio;
