// On récupère les éléments HTML nécessaires
const priceInput = document.getElementById("price");         // Champ pour entrer le prix
const discountInput = document.getElementById("discount");   // Champ pour entrer le pourcentage de remise
const btn = document.getElementById("calculate-btn");        // Bouton pour déclencher le calcul
const resultDiv = document.getElementById("result");         // Zone d'affichage du résultat

// On ajoute un événement au clic sur le bouton
btn.addEventListener("click", () => {
  // Récupérer les valeurs entrées par l'utilisateur
  const price = parseFloat(priceInput.value);         // convertir en nombre à virgule flottante
  const discount = parseFloat(discountInput.value);   // idem

  // Vérification de la validité des entrées
  if (isNaN(price) || isNaN(discount)) {
    resultDiv.textContent = "Entrez des valeurs valides.";
    resultDiv.style.color = "red";
    return;
  }

  // Calcul du montant de la remise
  const discountAmount = (price * discount) / 100;

  // Calcul du prix final
  const finalPrice = price - discountAmount;

  // Affichage du résultat
  resultDiv.textContent = "Prix final : " + finalPrice + " FCFA";
  resultDiv.style.color = "green";
});
