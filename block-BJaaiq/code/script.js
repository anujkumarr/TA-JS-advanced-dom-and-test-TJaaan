let infinite = document.querySelector(".infinite");
alert("The DOM Content is loading");

function loadMore() {
  quotes.forEach((elm) => {
    let parentDiv = document.createElement("div");
    parentDiv.classList.add("parentDiv");
    let quote = document.createElement("h2");
    quote.innerHTML = elm.quoteText;

    let author = document.createElement("span");
    author.innerHTML = elm.quoteAuthor;

    parentDiv.append(quote, author);
    infinite.append(parentDiv);
  });
}
loadMore();
 
infinite.addEventListener("scroll", () => {
  if (infinite.scrollTop + infinite.clientHeight >= infinite.scrollHeight) {
    loadMore();
  }
})

