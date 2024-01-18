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

// Function to perform image search and display results
function imageSearch() {
  let keyword = search.value;

  if (!keyword) {
    alert("Please enter a search term.");
  }

  // Constructing the URL for making requests to the Unsplash API based on user input
  const fetchUrl = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${access_key}&per_page=12`;

  fetch(`${fetchUrl}`)
    .then((res) => res.json())
    .then((images) => {
      if (page === 1) {
        clearImages();
      }
      const pictures = images.results;

      // Checking if the Unsplash API returned no results for the given search query
      if (pictures.length === 0) {
        alert("No results found. Please try a different search term.");
      }

      // Iterating through the array of pictures received from the Unsplash API response
      for (let picture of pictures) {
        // Constructing HTML for each image and appending it to the cards container
        const pictureCard = `<div class="card">
    <div class="card_image">
      <img src="${picture.urls.small}" alt="${picture.alt_description}" title="${picture.alt_description}" />
    </div>
    <div class="card_title title-pink">
    <button type="button" onclick="saveImage('${picture.urls.small}', '${picture.alt_description}', ${picture.likes}, event)">
      <i class="fa fa-download" aria-hidden="true" title="Save the image"></i>
    </button>
  </form>
    </div>
  </div>`;
        cards.insertAdjacentHTML("beforeend", pictureCard);
      }
    })
    .catch((error) => {
      console.log(error.message);
    });
}

// Event listener for the form submit
form.addEventListener("submit", (event) => {
  event.preventDefault();
  page = 1;
  clearImages();
  imageSearch();
});

// Event listener for the "See More" button
seeMoreButton.addEventListener("click", () => {
  page++;
  imageSearch();
});
