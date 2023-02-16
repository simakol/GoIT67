const ENDPOINT = `https://newsapi.org/v2/everything`;
const options = {
  headers: {
    "X-Api-Key": "dd82ff3604224bf1b224da3ef75c9135",
  },
};

export default class NewsApiService {
  constructor() {
    this.page = 1;
    this.searchQuery = "";
  }

  async getNews() {
    const URL = `${ENDPOINT}?q=${this.searchQuery}&pageSize=5&page=${this.page}`;

    const response = await axios.get(URL, options);
    this.nextPage();
    return response.data.articles;

    // return fetch(URL, options)
    //   .then((response) => response.json())
    //   .then(({ articles }) => {
    //     this.nextPage();
    //     return articles;
    //   });

    // return axios.get(URL, options).then(({ data }) => {
    //   this.nextPage();
    //   return data.articles;
    // });
  }

  nextPage() {
    this.page += 1;
  }
  resetPage() {
    this.page = 1;
  }
}
