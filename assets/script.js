const quotes = [
  {
    text:
      "Go confidently in the direction of your dreams. Live the life you have imagined.",
    color: "#2a13ac83",
    author: "- Earl Nightingale"
  },
  {
    text: "Fall seven times and stand up eight.",
    color: "rgb(44, 62, 80)",
    author: "- Japanese Proverb"
  },
  {
    text: "It is never too late to be what you might have been.",
    color: "rgb(189, 187, 153)",
    author: "- George Eliot"
  },
  {
    text: "I attribute my success to this: I never gave or took any excuse.",
    color: "rgb(115, 168, 87)",
    author: "- Florence Nightingale"
  },
  {
    text: "Life shrinks or expands in proportion to one’s courage.",
    color: "rgb(155, 89, 182)",
    author: "- Anais Nin"
  },
  {
    text: "Start where you are. Use what you have. Do what you can.",
    color: "rgb(115, 168, 87)",
    author: "- Arthur Ashe"
  },
  {
    text: "Life shrinks or expands in proportion to one’s courage.",
    color: "rgb(155, 89, 182)",
    author: "- Anais Nin"
  },
  {
    text: "An unexamined life is not worth living.",
    color: "rgb(71, 46, 50)",
    author: "- Socrates"
  },
  {
    text:
      "It is not what you do for your children, but what you have taught them to do for themselves, that will make them successful human beings.",
    color: "rgb(155, 89, 182)",
    author: "- Ann Landers"
  },
  {
    text: "Everything you’ve ever wanted is on the other side of fear.",
    color: "rgb(115, 168, 87)",
    author: "- George Addair"
  },
  {
    text:
      "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.",
    color: "rgb(231, 76, 60)",
    author: "- Henry Ford"
  }
];

const body = document.querySelector("body");
const quoteBox = document.querySelector("#quote-box");
const text = quoteBox.querySelector("#text");
const author = quoteBox.querySelector("#author");
const newQuote = quoteBox.querySelector("#new-quote");
const buttons = quoteBox.querySelectorAll(".footer__button");
const tweetQuote = quoteBox.querySelector("#tweet-quote");
const content = quoteBox.querySelector(".content");

function randomize() {
  return Math.floor(Math.random() * quotes.length);
}

function changeQuote(e) {
  const randomNumber = randomize();
  e.preventDefault(); 
  tweetQuote.href = `https://twitter.com/intent/tweet?hashtags=ulalala&text="${
    quotes[randomNumber].text
  }"`;
  content.style.opacity = 0;
  setTimeout(() => {
    setTimeout(() => {
      text.textContent = quotes[randomNumber].text;
      author.textContent = quotes[randomNumber].author;
    }, 300);
    body.style.color = `${quotes[randomNumber].color}`;
    body.style.background = `${quotes[randomNumber].color}`;
    buttons.forEach(
      button => (button.style.background = quotes[randomNumber].color)
    );
  }, 500);
}



newQuote.addEventListener("click", changeQuote);
document.addEventListener("DOMContentLoaded", changeQuote);
content.addEventListener("transitionend", () => {
  content.style.opacity = 1;
});
