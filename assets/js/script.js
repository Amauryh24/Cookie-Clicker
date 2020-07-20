let displayScore = document.getElementById("affichage");
let clickButton = document.getElementById("click");
let multiplicateurButton = document.getElementById("multiplier");
let autoclickerButton = document.getElementById("autoclick");
let bonusButton = document.getElementById("bonus");
let score = 0;
let bonusScore = 0;
let multiplicateur = 1;
let prixMultiplicateur = 50;
let prixAutoClicker = 500;
let prixBonus = 5000;

window.addEventListener("load", () => {
  init();
});

init = () => {
  multiplicateurButton.innerText =
    "Mult x" + multiplicateur + "\nPrix:" + prixMultiplicateur;
  autoclickerButton.innerText = "Autoclick\nPrix:" + prixAutoClicker;
  bonusButton.innerText = "Bonus\nPrix:" + prixBonus;

  displayButton();
};
displayButton = () => {
  display = (prix, bouton) => {
    score < prix
      ? bouton.setAttribute("disabled", "")
      : bouton.removeAttribute("disabled", "");
  };
  display(prixMultiplicateur, multiplicateurButton);
  display(prixAutoClicker, autoclickerButton);
  display(prixBonus, bonusButton);
};
augmenterMultiplicateur = () => {
  score = score - prixMultiplicateur;
  prixMultiplicateur = prixMultiplicateur * 2;
  multiplicateur++;
  displayScore.innerText = score;
};
augmenterScore = () => {
  bonusScore = bonusScore * multiplicateur;
  score = score + 1 * multiplicateur + bonusScore;
  displayScore.innerText = score;
};
augmenterBonus = () => {
  score = score - prixBonus;
  displayScore.innerText = score;
};
autoclick = () => {
  score = score - prixAutoClicker;
  displayScore.innerText = score;
  var intervalAutoClick = setInterval(function () {
    augmenterScore();
  }, 1000);
};
clickButton.addEventListener("click", () => {
  augmenterScore();
  displayButton();
});

multiplicateurButton.addEventListener("click", (e) => {
  augmenterMultiplicateur();
  multiplicateurButton.innerText =
    "Mult x" + multiplicateur + "\nPrix:" + prixMultiplicateur;
  displayButton();
});

autoclickerButton.addEventListener("click", (e) => {
  autoclick();
  e.target.setAttribute("disabled", "");
  displayButton();
});
bonusButton.addEventListener("click", (e) => {
  augmenterBonus();

  e.target.setAttribute("disabled", "");
  let secondes = 5;
  var intervalBonusClick = setInterval(function () {
    augmenterScore();
    secondes--;
    console.log(secondes);
    if (secondes <= 0) {
      e.target.removeAttribute("disabled", "");
      secondes = 5;
      clearInterval(intervalBonusClick);
    }
  }, 1000);
});
