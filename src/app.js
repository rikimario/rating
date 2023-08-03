import page from "../node_modules/page/page.mjs";
import { html, render } from "../node_modules/lit-html/lit-html.js";
import { showThankYou } from "./thankYou.js";

let selectedValue = null;
let ratingPage = (user, onsubmit, onCircleButtonClick, selectedValue) => html`

    <div class="starContainer">
      <span class="starSpan">
        <img src="./images/icon-star.svg" alt="star">
      </span>
       </div>
    <div class="main">
      <!-- Rating state start -->
      <h2 class="h2">How did we do?</h2>
<p class="paragraph">Please let us know how we did with your support request. All feedback is appreciated 
  to help us improve our offering!</p>
  <br>
  <div class="circleBtns">
    <!-- Add selectedValue parameter to each circle button -->
    <span class=${`circleBtn ${selectedValue === "1" ? "checked" : ""}`} @click=${() => onCircleButtonClick("1", selectedValue)}>1</span>
    <span class=${`circleBtn ${selectedValue === "2" ? "checked" : ""}`} @click=${() => onCircleButtonClick("2", selectedValue)}>2</span>
    <span class=${`circleBtn ${selectedValue === "3" ? "checked" : ""}`} @click=${() => onCircleButtonClick("3", selectedValue)}>3</span>
    <span class=${`circleBtn ${selectedValue === "4" ? "checked" : ""}`} @click=${() => onCircleButtonClick("4", selectedValue)}>4</span>
    <span class=${`circleBtn ${selectedValue === "5" ? "checked" : ""}`} @click=${() => onCircleButtonClick("5", selectedValue)}>5</span>
  </div>
  <br>
  <button class="submit" id="submit" @click=${onsubmit}>SUBMIT</button>
</div>
`

export function rating(ctx, next) {
  const user = ctx.user;
  render(ratingPage(user, onsubmit, onCircleButtonClick), document.querySelector('.container'));

  async function onsubmit(e) {
    e.preventDefault();

    localStorage.setItem("selectedValue", selectedValue);
    page.redirect('/thankYou');
  }

  function onCircleButtonClick(value, currentValue) {
    if (currentValue === value) {
      // If the button is already checked, uncheck it
      selectedValue = null;
    } else {
      // Otherwise, check the button
      selectedValue = value;
    }

    render(ratingPage(user, onsubmit, onCircleButtonClick, selectedValue), document.querySelector('.container'));

    console.log("Selected value:", selectedValue);
  }
  next();
}

page(rating)


page('/thankYou', showThankYou);

page.start();