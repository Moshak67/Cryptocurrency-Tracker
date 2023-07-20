import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./Routes/Home";
import {Route, Routes} from "react-router-dom";
import CryptoList from "./Routes/CryptoList";
import Coin from "./Routes/Coin";
import React from "react";


function App() {
  return (
    <div className="App">
        <Navigation />
        <Routes>
            <Route exact path="/Cryptocurrency-Tracker" element={<Home />} />
            <Route path="/allcoins" element={<CryptoList />} />
            <Route path="/coin" element={<Coin />}>
                <Route path=":coinId" element={<Coin />} />
            </Route>
        </Routes>

    </div>
  );
}

export default App;
