import NewsApiService from "./NewsApiService.js";
import LoadMoreBtn from "./components/LoadMoreBtn.js";

const form = document.getElementById("form");
const newsWrapper = document.getElementById("newsWrapper");

const newsApiService = new NewsApiService();
const loadMoreBtn = new LoadMoreBtn({
  selector: "#loadMore",
  isHidden: true,
});

console.log(newsApiService);
console.log(loadMoreBtn);

form.addEventListener("submit", onSubmit);
loadMoreBtn.button.addEventListener("click", fetchArticles);

function onSubmit(e) {
  e.preventDefault();

  const form = e.currentTarget;
  const value = form.elements.news.value.trim();

  newsApiService.searchQuery = value;

  newsApiService.resetPage();
  clearNewsList();
  loadMoreBtn.show();
  fetchArticles().finally(() => form.reset());
}

async function fetchArticles() {
  loadMoreBtn.disable();

  try {
    const articles = await newsApiService.getNews();
    console.log("🚀 ~ articles", articles);
    if (articles.length === 0) throw new Error("No data");

    const markup = articles.reduce(
      (markup, article) => createMarkup(article) + markup,
      ""
    );

    appendNewsToList(markup);
    loadMoreBtn.enable();
  } catch (err) {
    console.error(err);
  }

  // return newsApiService
  //   .getNews()
  //   .then((articles) => {
  //     if (articles.length === 0) throw new Error("No data");

  //     return articles.reduce(
  //       (markup, article) => createMarkup(article) + markup,
  //       ""
  //     );
  //   })
  //   .then((markup) => {
  //     appendNewsToList(markup);
  //     loadMoreBtn.enable();
  //   })
  //   .catch(onError);
}

function appendNewsToList(markup) {
  newsWrapper.insertAdjacentHTML("beforeend", markup);
}

function clearNewsList() {
  newsWrapper.innerHTML = "";
}

function createMarkup({ author, title, description, url, urlToImage }) {
  return `
  <div class="article-card">
    <img src=${urlToImage} class="article-img" />
    <h2 class="article-title">${title}</h2>
    <h3 class="article-author">${author || "anonymous"}</h3>
    <p  class="article-description">${description}</p>
    <a href=${url} class="article-link" target="_blank">Read more</a>
  </div>
  `;
}

function onError(err) {
  console.error(err);
  loadMoreBtn.hide();
  appendNewsToList("<p>Articles not found</p>");
}
