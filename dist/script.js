const labelsArr = Array.from(document.querySelectorAll(".label"));

let touched = false;

function cardsMovements(label) {
  // Find the card number
  const number = label.querySelector(".process-number").textContent;
  console.log(number);
  let activeCard = document.querySelector(`#card${number}`);
  console.log(activeCard);

  // find the previous active card and set it as closed
  let oldActive = document.querySelector(".active");
  console.log(oldActive);

  /////// check it isn't the same card as before
  if (oldActive !== activeCard) {
    oldActive.classList.remove("active");
    oldActive.classList.add("closed");

    // set the new active card as active
    activeCard.classList.remove("closed");
    activeCard.classList.add("active");
  } else {
    // if the card is the same as the old one (third click on the same card)
    //remove closed
    activeCard.classList.toggle("closed");
  }
}

labelsArr.forEach((label) => {
  label.addEventListener("click", function (e) {
    cardsMovements(label);
  });
});

labelsArr.forEach((label) => {
  label.addEventListener("touchstart", function (e) {
    e.preventDefault(); // without it, the desktop version will detect multiple clicks / touchstart, closing immediately after the card
    if (!touched) {
      touched = true;
      cardsMovements(label);
      setTimeout(function () {
        touched = false;
      }, 400);
    }
  });
});