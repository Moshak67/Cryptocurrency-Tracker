import React from "react";
import { Container, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";

import { Routes, Route, Link } from "react-router-dom";

import Home from "../Routes/Home";
import Coin from "../Routes/Coin";
import CryptoList from "../Routes/CryptoList";

const Navigation = () => {
  return (
    <>
      <Container style={{ padding: 30 }}>
        <Navbar bg="transparent" variant={"dark"} expand="lg">
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mr-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/">
                <mark>Home</mark>
              </Nav.Link>
              <Nav.Link as={Link} to="/allcoins">
                Crypto list
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/allcoins" element={<CryptoList />} />

        <Route path="/coin" element={<Coin />}>
          <Route path=":coinId" element={<Coin />} />
        </Route>
      </Routes>
    </>
  );
};

export default Navigation;
