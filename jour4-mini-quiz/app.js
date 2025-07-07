// Tableau d’objets : chaque objet = une question
const quizData = [
    {
      question: "Quelle méthode ajoute un élément à la fin d’un tableau ?",
      options: ["push()", "shift()", "unshift()"],
      correct: "push()"
    },
    {
      question: "Quelle est la bonne syntaxe pour un commentaire sur une ligne en JS ?",
      options: ["# commentaire", "// commentaire", "<!-- commentaire -->"],
      correct: "// commentaire"
    },
    {
      question: "Comment déclare-t-on une constante en JS ?",
      options: ["let", "const", "var"],
      correct: "const"
    }
  ];
  
  // On sélectionne l’élément HTML où afficher le quiz
  const quizContainer = document.getElementById("quiz");
  
  // Génération dynamique des questions
  quizData.forEach((item, index) => {
    const questionBlock = document.createElement("div");
    questionBlock.classList.add("question-block");
  
    // Titre de la question
    questionBlock.innerHTML = `<h3>${index + 1}. ${item.question}</h3>`;
  
    // Création des options radio
    item.options.forEach(option => {
      const optionId = `q${index}-${option}`;
      questionBlock.innerHTML += `
        <label>
          <input type="radio" name="q${index}" value="${option}" id="${optionId}">
          ${option}
        </label>
      `;
    });
  
    quizContainer.appendChild(questionBlock);
  });
  
  // Gestion du score et de la correction
  document.getElementById("submit").addEventListener("click", () => {
    let score = 0;
  
    quizData.forEach((item, index) => {
      // Récupérer la réponse sélectionnée pour chaque question
      const selected = document.querySelector(`input[name="q${index}"]:checked`);
  
      if (selected && selected.value === item.correct) {
        score++;
      }
    });
  
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = `Vous avez ${score} / ${quizData.length} bonnes réponses.`;
  
    //  empêcher de changer les réponses après soumission
    document.querySelectorAll("input").forEach(input => input.disabled = true);
    document.getElementById("submit").disabled = true;
  });
  