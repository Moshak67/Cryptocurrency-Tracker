import { LinearProgress } from "@mui/material";
import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import CoinCard from "../components/CoinCard";
import TrendingCryptos from "../components/TrendingCryptos";
const Home = () => {
    const reduceRecipes = (acc, cur, index) => {
        const groupIndex = Math.floor(index / 3);
        if (!acc[groupIndex]) acc[groupIndex] = [];
        acc[groupIndex].push(cur);
        console.log(acc);
        return acc;
    };
  const { loading, trendingCoins, error } = TrendingCryptos();


  if (error) {
    <p>Something Went Wrong! {error.message}</p>;
  }
  if (loading){
      <LinearProgress color="success" />
  }
  return (
    <>
      <Container style={{ padding: 30 }}>
        <Row xs={1} md={2} className="g-4">
          <Col>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: 30,
                marginLeft: 30,

                height: 300,
                width: "100%",
              }}
            >
              <h1>Trending Crypto Currencies In Today's Market :</h1>

              <h4>
                <br />
                The list bellow represents Cryptocurrensies based on their
                Market Capitalization Rank.
              </h4>
            </div>
          </Col>
        </Row>

        <Container>


              <Carousel>
                  {trendingCoins.reduce(reduceRecipes, []).map((item, index) => (
                      <Carousel.Item key={index}>
                          <div className="d-flex justify-content-center gap-3">
                              {item.map((coins, index) => {
                                  return (
                                      <CoinCard
                    key={coins.id}
                    name={coins.name}
                    symbol={coins.symbol}
                    image={coins.image}
                    market_cap_rank={coins.market_cap_rank}
                    current_price={coins.current_price}
                />
                                  );
                              })}
                          </div>
                      </Carousel.Item>
                  ))}
              </Carousel>
        </Container>
      </Container>
    </>
  );
};

export default Home;
