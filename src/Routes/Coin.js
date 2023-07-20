import React, { useEffect, useState } from "react";
import { Badge, Col, Container, Row, Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { SingleCoin } from "../Utility/ApiAddress";
import { LinearProgress } from "@mui/material";
import parse from "html-react-parser";
const Coin = () => {
  const { coinId } = useParams();
  const [loading, setLoading] = useState(true);
  const [coin, setCoin] = useState({});
  const [error, setError] = useState(null);

  const fetchCoin = async () => {
    let res = await fetch(SingleCoin(coinId));
    let data = await res.json();

    return data;
  };

  useEffect(() => {
    (async () => {
      try {
        setCoin(await fetchCoin());

        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    })();
  });
  if (error) {
    <p>Something went Wrong: {error.message}</p>;
  }

  return (
    <div>
      {loading ? (
        <LinearProgress color="primary" />
      ) : (
        <Container>
          <Row>
            <Col>
              {coin.image ? <img src={coin.image.large} alt="" /> : null}
              <h1>{coin.name}</h1>
            </Col>
            <Col></Col>
            <Col></Col>
          </Row>
          <Row>
            <Col>
              <h3>
                <Badge bg="warning">Price:</Badge>&nbsp;
                <Badge bg="warning">
                  {" "}
                  ${coin.market_data?.current_price.aud.toLocaleString()}
                </Badge>
              </h3>
            </Col>
            <Col lg>
              <h2>
                <Badge bg="info">Market Cap Rank:</Badge>&nbsp;
                <Badge bg="info">{coin.market_cap_rank}</Badge>
              </h2>
            </Col>
            <Col lg>
              <h3>
                <Badge bg="info">Market Cap:</Badge>&nbsp;
                <Badge bg="info">
                  ${coin.market_data?.market_cap.aud.toLocaleString()}
                </Badge>
              </h3>
              &nbsp;
            </Col>
          </Row>
          <Row>
            <Col lg>
              <h1>Description:</h1>&nbsp;
              <p className="fs-6">
                {parse(coin.description ? coin.description.en : "")}
              </p>
            </Col>
          </Row>
          <Row>
            <h1>Price Change:</h1>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>1h</th>
                  <th>24h</th>
                  <th>7d</th>
                  <th>14d</th>
                  <th>30d</th>
                  <th>1year</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    %
                    {coin.market_data?.price_change_percentage_1h_in_currency.aud.toLocaleString()}
                  </td>
                  <td>
                    %
                    {coin.market_data?.price_change_percentage_24h_in_currency.aud.toLocaleString()}
                  </td>
                  <td>
                    %
                    {coin.market_data?.price_change_percentage_7d_in_currency.aud.toLocaleString()}
                  </td>
                  <td>
                    %
                    {coin.market_data?.price_change_percentage_14d_in_currency.aud.toLocaleString()}
                  </td>
                  <td>
                    %
                    {coin.market_data?.price_change_percentage_30d_in_currency.aud.toLocaleString()}
                  </td>
                  <td>
                    %
                    {coin.market_data?.price_change_percentage_1y_in_currency.aud.toLocaleString()}
                  </td>
                </tr>
              </tbody>
            </Table>
          </Row>
          <Row>
            <h1>Other Info:</h1>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>high24</th>
                  <th>low24</th>

                  <th>circulating supply</th>
                  <th>total volume</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>${coin.market_data?.high_24h.aud.toLocaleString()}</td>
                  <td>${coin.market_data?.low_24h.aud.toLocaleString()}</td>

                  <td>
                    {coin.market_data?.circulating_supply.toLocaleString()}
                  </td>

                  <td>
                    ${coin.market_data?.total_volume.aud.toLocaleString()}
                  </td>
                </tr>
              </tbody>
            </Table>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default Coin;
