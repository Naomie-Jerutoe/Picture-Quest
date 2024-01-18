// Unsplash API access key for making requests. Don't steal it!
const access_key = "we4W1RavqwCJN0fYi301S3Re5SfAIrkDZc559-aqQ0A";

// DOM elements references
const form = document.querySelector(".my-form");
const search = document.querySelector("#search");
const cards = document.querySelector(".cards-list");
const seeMoreButton = document.querySelector(".see-more");

let keyword = ""; // Variable to store the current search keyword
let page = 1; // Variable to keep track of the current page number for pagination

// Function to clear images in the cards container
function clearImages() {
  cards.innerHTML = "";
}
