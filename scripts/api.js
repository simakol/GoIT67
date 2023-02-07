const options = {
  headers: {
    "X-Api-Key": "dd82ff3604224bf1b224da3ef75c9135",
  },
};

function fetchData(query) {
  const URL = `https://newsapi.org/v2/everything?q=${query}`;

  return fetch(URL, options).then((response) => response.json());
}

export default fetchData;
