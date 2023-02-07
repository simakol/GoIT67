import fetchData from "./api.js";

const form = document.getElementById("form");
const newsWrapper = document.getElementById("newsWrapper");

form.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();

  const form = e.currentTarget;
  const value = form.elements.news.value.trim();

  fetchData(value)
    .then(({ articles }) => {
      if (articles.length === 0) throw new Error("No data");

      return articles.reduce(
        (markup, article) => createMarkup(article) + markup,
        ""
      );
    })
    .then(updateNewsList)
    .catch(onError)
    .finally(() => form.reset());
}

function updateNewsList(markup) {
  newsWrapper.innerHTML = markup;
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
  updateNewsList("<p>Articles not found</p>");
}
