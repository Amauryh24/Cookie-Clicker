let displayScore = document.getElementById("affichage");
let multiplicateurButton = document.getElementById("multiplier");
let autoclickButton = document.getElementById("autoclick");
console.log(autoclick);
let score = 0;
let multiplicateur = 1;
let prixMultiplicateur = 50;
let prixAutoClicker = 500;
window.addEventListener("load", () => {
  init();
});

init = () => {
  multiplicateurButton.innerText =
    "Multiplicateur x" + multiplicateur + "\nPrix:" + prixMultiplicateur;

  displayButton();
};

// scoreNegatif = () => {
//   if (score < 0) {
//     score = 0;
//     displayScore.innerText = score;
//   }
// };

displayButton = () => {
  if (score < prixMultiplicateur) {
    multiplicateurButton.setAttribute("disabled", "");
  } else {
    multiplicateurButton.removeAttribute("disabled", "");
  }

  if (score < prixAutoClicker) {
    autoclickButton.setAttribute("disabled", "");
  } else {
    autoclickButton.removeAttribute("disabled", "");
  }
};

augmenterMultiplicateur = () => {
  score = score - prixMultiplicateur;
  prixMultiplicateur = prixMultiplicateur * 2;
  console.log(prixMultiplicateur);
  //   scoreNegatif();
  multiplicateur++;
  displayScore.innerText = score;
  console.log(multiplicateur);
};

augmenterScore = () => {
  //   scoreNegatif();
  score = score + 1 * multiplicateur;
  displayScore.innerText = score;

  displayButton();
};

autoclick = () => {
  score = score - prixAutoClicker;
  //   scoreNegatif();
  displayScore.innerText = score;
  var intervalAutoClick = setInterval(function () {
    augmenterScore();
  }, 1000);
};
document.getElementById("click").addEventListener("click", () => {
  augmenterScore();
});

multiplicateurButton.addEventListener("click", (e) => {
  augmenterMultiplicateur();
  multiplicateurButton.innerText =
    "Multiplicateur x" + multiplicateur + "\nPrix:" + prixMultiplicateur;
  displayButton();
});

autoclickButton.addEventListener("click", (e) => {
  autoclick();
  e.target.setAttribute("disabled", "");
  displayButton();
});
