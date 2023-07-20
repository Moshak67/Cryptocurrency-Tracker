import { useEffect, useState } from "react";
import { TrendingCoins } from "../Utility/ApiAddress";

async function getCoinList(search) {
  let res = await fetch(TrendingCoins());
  let data = await res.json();

  return data;
}

const TrendingCryptos = () => {
  const [loading, setLoading] = useState(true);
  const [trendingCoins, setCoins] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setCoins(await getCoinList());

        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    })();
  }, []);

  return { loading, trendingCoins, error };
};

export default TrendingCryptos;
