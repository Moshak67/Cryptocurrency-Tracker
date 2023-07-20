import React from "react";
import { Row, Col, Card, Badge } from "react-bootstrap";

const CoinCard = (props) => {
  return (
    <>
      <Row xs={1} md={2} className="g-4">
        <Col>
          <Card
            style={{ width: "18rem", marginBottom: 10 }}
            bg="light"
            key={props.url}
          >
            <Card.Header>
              <h3>
                <Badge bg="light" text="dark">
                  {props.name}
                </Badge>
              </h3>
            </Card.Header>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
              <Card.Title>
                <Badge bg="primary">Symbol: {props.symbol.toUpperCase()}</Badge>
              </Card.Title>
              <Card.Title>
                <Badge bg="warning">Price:</Badge>&nbsp;
                <Badge bg="warning">
                  {" "}
                  ${props.current_price.toLocaleString()}
                </Badge>
              </Card.Title>
              <Card.Title>
                <Badge bg="info">Market Cap Rank:</Badge>&nbsp;
                <Badge bg="info">{props.market_cap_rank}</Badge>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default CoinCard;
