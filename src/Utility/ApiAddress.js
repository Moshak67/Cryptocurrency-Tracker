export const CoinList = () =>
  'https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud&order=market_cap_desc&per_page=100&page=1&sparkline=false';

export const SingleCoin = (coinId) =>
  `https://api.coingecko.com/api/v3/coins/${coinId}`;


export const TrendingCoins = () =>
  'https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud&order=gecko_desc&per_page=12&page=1&sparkline=false&price_change_percentage=24h';
