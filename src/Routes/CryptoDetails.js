import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { HistoricalChart } from "../Utility/ApiAddress";
import { Line } from "react-chartjs-2";

const CryptoDetails = (coin) => {
  const [loading, setLoading] = useState(true);
  const [historicalData, setHistoricalData] = useState();
  const [days, setDays] = useState(1);
  const [error, setError] = useState(null);

  const fetchCoin = async () => {
    let res = await fetch(HistoricalChart(coin.id, days));
    let data = await res.json();

    return data;
  };

  useEffect(() => {
    (async () => {
      try {
        setHistoricalData(await fetchCoin());

        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    })();
  }, [days]);

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Line />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CryptoDetails;
