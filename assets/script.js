"use strict";

let selectedItem;
const card = document.querySelector(".card");
const ratingHtml = `
<div class="icon">
    <img src="/images/icon-star.svg" />
  </div>
  <h2>How did we do?</h2>
  <div class="text">
    Please let us know how we did with your support request. All feedback is
    appreciated to help us improve our offering!
    </div>
    <form id="rating-form">
      <div class="wrapper">
        <span class="icon">1</span>
        <span class="icon">2</span>
        <span class="icon">3</span>
        <span class="icon">4</span>
        <span class="icon">5</span>
      </div>
      <button id="submit" type="submit">Submit</button>
    </form>
  `;

card.insertAdjacentHTML("beforeend", ratingHtml);
const ratingForm = document.querySelector("#rating-form");
const ratingWrapper = document.querySelector("#rating-form > .wrapper");
const icons = document.querySelectorAll(".icon");
let selectedRating;

ratingWrapper.addEventListener("click", (e) => {
  icons.forEach((icon) => {
    if (icon.classList.contains("selected")) {
      icon.classList.remove("selected");
    }
  });

  e.target.closest("span").classList.add("selected");
});

ratingForm.addEventListener("submit", (e) => {
  e.preventDefault();
  icons.forEach((icon) => {
    if (icon.classList.contains("selected")) {
      selectedRating = icon.innerHTML;
    }
  });

  card.innerHTML = "";

  card.insertAdjacentHTML(
    "beforeend",
    `
      <img src="/images/illustration-thank-you.svg" class="thank-you-img" alt="thank-you" />
      <div class="rating-output">You selected ${selectedRating} out of 5</div>
      <h2>Thank you!</h2>
      <div class="text">
      We appreciate you taking the time to give a rating. If you ever need
      more support, don’t hesitate to get in touch!
      </div>
  `
  );

  card.classList.add("text-center");
});
