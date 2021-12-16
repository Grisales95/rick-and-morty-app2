const fetchAPi = async (url) => {
  const getData = await fetch(url);
  const res = await getData.json();
  return res;
};

export default fetchAPi;
