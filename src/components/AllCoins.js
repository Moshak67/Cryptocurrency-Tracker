import { useEffect, useState } from "react";
import { CoinList } from "../Utility/ApiAddress";

async function getCoinList(search) {
  let res = await fetch(CoinList());
  let data = await res.json();

  return data;
}

const AllCoins = () => {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
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

  return { loading, coins, error };
};

export default AllCoins;
