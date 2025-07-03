// Sélection des éléments HTML
const input = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

// Fonction pour ajouter une tâche
function addTask() {
  const taskText = input.value.trim(); // Supprime les espaces au début et à la fin

  if (taskText === "") {
    alert("Veuillez entrer une tâche !");
    return;
  }

  // Création de l'élément <li> pour la tâche
  const li = document.createElement("li");

  // Ajouter le texte dans le li
  li.textContent = taskText;

  // Permet de barrer la tâche quand on clique dessus
  li.addEventListener("click", () => {
    li.classList.toggle("done");
  });

  // Création du bouton supprimer
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.classList.add("delete-btn");

  // Supprime la tâche quand on clique sur le bouton
  deleteBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // Empêche le clic de marquer comme fait
    taskList.removeChild(li);
  });

  // On ajoute le bouton au li, puis le li à la liste
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  // On vide le champ input
  input.value = "";
}

// Quand on clique sur "Ajouter"
addBtn.addEventListener("click", addTask);

// Permet d’ajouter la tâche avec la touche "Entrée"
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});
