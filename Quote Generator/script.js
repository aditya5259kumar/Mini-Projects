const quote = document.getElementById("quote");
const author = document.getElementById("author");
const apiURL = "https://api.quotable.io/random";

const apiEndpoint = apiURL;

async function getQuote(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
  } catch (err) {
    console.error("Fetch error:", err);
    quote.innerHTML = "Oops! Could not fetch a quote.";
    author.innerHTML = "";
  }
}

getQuote(apiEndpoint);

function tweet() {
  const text = encodeURIComponent(`${quote.innerText} — ${author.innerText}`);
  const tweetUrl = `https://twitter.com/intent/tweet?text=${text}`;
  window.open(tweetUrl, "tweet window", "width=600,height=500");
}
