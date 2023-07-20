import React, { useState } from "react";
import { Container, Form, Table } from "react-bootstrap";
import AllCoins from "../components/AllCoins";

import { useNavigate } from "react-router-dom";
import { LinearProgress } from "@mui/material";

const CryptoList = () => {
  return (
    <>
      <Container style={{ padding: 30 }}>
        <CoinTable />
      </Container>
    </>
  );
};

function CoinTable() {
  const navigate = useNavigate();
  const { loading, coins, error } = AllCoins();
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.includes(search.toLowerCase())
  );

  if (error) {
    return <p>Something went wront: {error.message}</p>;
  }

  return (
    <>
      <div className="searchbar">
        <h1>Cryptocurrency Market Price</h1>
        <Form>
          <Form.Group className="mb-3 ">
            <Form.Label>__________________________</Form.Label>
            <Form.Control
              type="search"
              placeholder="Search by coin Symbol or Name, eg: btc or bitcoin:"
              onChange={handleChange}
              className="border border-primary"
            />
          </Form.Group>
        </Form>
      </div>

      {loading ? (
        <LinearProgress color="primary" />
      ) : (
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Name</th>
              <th>Price</th>
              <th>last 24h</th>
              <th>Volume</th>
              <th>Market Cap</th>
            </tr>
          </thead>
          <tbody>
            {filteredCoins.map((coin) => (
              <tr onClick={() => navigate(`/coin/${coin.id}`)} key={coin.id} >
                <td>
                  <img src={coin.image} alt="" style={{ width: 30 }} />
                  {coin.symbol.toUpperCase()}
                </td>
                <td>{coin.name}</td>
                <td>${coin.current_price.toLocaleString()}</td>
                {coin.price_change_percentage_24h < 0 ? (
                  <td className="text-danger">
                    {coin.price_change_percentage_24h.toFixed(2)}%
                  </td>
                ) : (
                  <td className="text-success">
                    {coin.price_change_percentage_24h.toFixed(2)}%
                  </td>
                )}

                <td>${coin.total_volume.toLocaleString()}</td>
                <td>${coin.market_cap.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
}

export default CryptoList;
