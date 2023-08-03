import { html, render } from "../node_modules/lit-html/lit-html.js";

let thankYouTemplate = (selectedValue) => html`
${console.log(selectedValue)}
<div class="thankYouImg">
    <img src="./images/illustration-thank-you.svg" alt="thank-you">
   </div>
    <div class="main">
      <div class="ratingParagraph">
        <p class="selectParagraph">You selected ${selectedValue} out of 5</p>
      </div>
      <h2 class="thankYouH2">
        Thank you!
      </h2>
      <p class="thankYouP">
        We appreciate you taking the time to give a rating. If you ever need more support, 
        don’t hesitate to get in touch!
      </p>
</div>
`;

export async function showThankYou(ctx) {
  const selectedValue = localStorage.getItem('selectedValue')
  render(thankYouTemplate(selectedValue), document.querySelector('.container'));
}

