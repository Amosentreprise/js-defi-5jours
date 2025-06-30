// On définit un tableau de citations, chaque citation est un objet avec deux propriétés : text et author
const quotes = [
    {
      text: "Le succès n’est pas la clé du bonheur. Le bonheur est la clé du succès.",
      author: "Albert Schweitzer"
    },
    {
      text: "Fais de ta vie un rêve, et d’un rêve, une réalité.",
      author: "Antoine de Saint-Exupéry"
    },
    {
      text: "La vie, c’est comme une bicyclette, il faut avancer pour ne pas perdre l’équilibre.",
      author: "Albert Einstein"
    },
    {
      text: "La meilleure façon de prédire l’avenir est de le créer.",
      author: "Peter Drucker"
    },
    {
      text: "L’échec est simplement l’opportunité de recommencer, cette fois de manière plus intelligente.",
      author: "Henry Ford"
    }
  ];
  
  // On récupère les éléments HTML dont on aura besoin pour interagir
  const btn = document.getElementById("generate-btn");   // Le bouton pour générer une nouvelle citation
  const quoteText = document.getElementById("quote");    // Le paragraphe où s’affichera le texte de la citation
  const authorText = document.getElementById("author");  // Le paragraphe où s’affichera l’auteur
  
  // On ajoute un écouteur d’événement sur le bouton
  btn.addEventListener("click", () => {
    // 1. Générer un index aléatoire entre 0 et la longueur du tableau - 1
    const randomIndex = Math.floor(Math.random() * quotes.length);
  
    // 2. Récupérer l’objet citation correspondant
    const selected = quotes[randomIndex];
  
    // 3. Mettre à jour le contenu de la page avec la citation et l’auteur
    quoteText.textContent = selected.text;        // Met à jour le texte de la citation
    authorText.textContent = " — " + selected.author;     // Met à jour l’auteur avec un tiret
  });
  