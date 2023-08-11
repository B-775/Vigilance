const quizData = [

    // Question 1
  {
    question: "Qu'est-ce que le phishing ?",
    answers: {
      a: "Un type de poisson",
      b: "Une technique de pêche",
      c: "Une attaque pour voler des informations personnelles",
      d: "Un sport nautique"
    },
    correctAnswer: "c"
  },

  // Question 2
  {
    question: "Qu'est-ce que le typosquatting ?",
    answers: {
      a: "Une technique de jardinage",
      b: "L'utilisation de fautes de frappe dans des noms de domaine pour tromper les utilisateurs",
      c: "Une méthode de cuisine",
      d: "Une technique de plongée sous-marine"
    },
    correctAnswer: "b"
  },

  // Question 3
  {
    question: "Quel est le risque potentiel du partage d'informations personnelles en ligne ?",
    answers: {
      a: "Aucun risque, les informations sont toujours sécurisées",
      b: "Les informations personnelles peuvent être utilisées pour voler votre identité",
      c: "Les informations personnelles ne sont jamais collectées en ligne",
      d: "Le risque de voir vos informations devenir publiques est inexistant"
    },
    correctAnswer: "b"
  },

  // Question 4
  {
    question: "Quel signe pourrait indiquer la présence de typosquatting dans un nom de domaine ?",
    answers: {
      a: "Le nom de domaine est court et simple",
      b: "Le nom de domaine utilise des caractères spéciaux",
      c: "Le nom de domaine est identique au nom de l'entreprise, mais avec une faute de frappe",
      d: "Le nom de domaine est toujours enregistré sur une extension .com"
    },
    correctAnswer: "c"
  },
  // Question 5
  {
    question: "Comment pouvez-vous déceler un e-mail de phishing ?",
    answers: {
      a: "L'e-mail provient d'une source connue et de confiance",
      b: "L'e-mail contient un grand nombre de fautes d'orthographe",
      c: "L'e-mail vous demande de cliquer sur un lien pour vérifier vos informations personnelles",
      d: "L'e-mail n'inclut aucune demande d'action ou de lien suspect"
    },
    correctAnswer: "c"
  },
  // Question 6
  {
    question: "Quel est un bon moyen de vérifier l'authenticité d'un site web avant de fournir des informations sensibles ?",
    answers: {
      a: "Ignorer les avertissements de sécurité du navigateur",
      b: "Cliquer sur tous les liens et pop-ups pour en savoir plus",
      c: "Vérifier la présence de HTTPS et d'un cadenas dans la barre d'adresse",
      d: "Fournir directement vos informations sans poser de questions"
    },
    correctAnswer: "c"
  },

// Question 7
{
    question: "Qu'est-ce que l'hameçonnage (phishing) par téléphone ?",
    answers: {
      a: "Un type de pêche réalisé avec un téléphone",
      b: "Une attaque qui vise à obtenir des informations confidentielles par téléphone",
      c: "Une méthode pour augmenter la puissance du signal téléphonique",
      d: "Une technique pour obtenir des remises sur les abonnements téléphoniques"
    },
    correctAnswer: "b"
  },
  // Question 8
  {
    question: "Comment pouvez-vous vérifier l'authenticité d'un e-mail suspect ?",
    answers: {
      a: "En cliquant sur les liens fournis dans l'e-mail",
      b: "En répondant à l'e-mail avec vos informations personnelles",
      c: "En vérifiant l'adresse e-mail de l'expéditeur",
      d: "En téléchargeant les pièces jointes pour les ouvrir"
    },
    correctAnswer: "c"
  },
  // Question 9
  {
    question: "Quelle est l'une des raisons pour lesquelles le typosquatting est efficace ?",
    answers: {
      a: "Les utilisateurs ne savent pas comment utiliser un clavier",
      b: "Les noms de domaine avec des fautes de frappe ressemblent souvent aux originaux",
      c: "Le typosquatting fonctionne uniquement sur les navigateurs obsolètes",
      d: "Les fautes de frappe sont plus difficiles à faire sur un clavier virtuel"
    },
    correctAnswer: "b"
  },
  // Question 10
  {
    question: "Quel est le but principal d'une attaque de phishing ?",
    answers: {
      a: "Améliorer la sécurité en ligne des utilisateurs",
      b: "Vol de données personnelles, telles que les mots de passe et les informations financières",
      c: "Développer de nouvelles technologies de sécurité",
      d: "Éduquer les utilisateurs sur les meilleures pratiques en ligne"
    },
    correctAnswer: "b"
  },
  // Question 11
  {
    question: "Quelle est la meilleure action à prendre si vous recevez un e-mail ou un message suspect ?",
    answers: {
      a: "Ignorer le message et le supprimer",
      b: "Répondre immédiatement avec vos informations",
      c: "Cliquer sur tous les liens pour en savoir plus",
      d: "Contacter l'expéditeur pour obtenir des clarifications"
    },
    correctAnswer: "a"
  }
  ];

  const questionElement = document.getElementById("question");
const quizForm = document.getElementById("quizForm");
const resultElement = document.getElementById("result");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const progressBar = document.getElementById("progressBar");
const submitButton = document.getElementById("submitButton");
const restartButton = document.getElementById("restartButton");

let currentQuestion = 0;
let score = 0;

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function updateProgressBar() {
    const progressPercent = (currentQuestion / 5) * 100;
    progressBar.style.width = `${progressPercent}%`;
  }

shuffleArray(quizData);

function showQuestion(questionIndex) {
    const question = quizData[questionIndex];
    questionElement.textContent = question.question;
  
    const answers = question.answers;
    quizForm.innerHTML = "";
    for (const [key, value] of Object.entries(answers)) {
        const label = document.createElement("label");
        const input = document.createElement("input");
        input.type = "checkbox";
        input.name = "answer";
        input.value = key;
        label.appendChild(input);
        label.appendChild(document.createTextNode(value));
        quizForm.appendChild(label);
      }

  if (questionIndex === 4) {
    submitButton.style.display = "block";
    nextButton.style.display = "none";
  } else {
    submitButton.style.display = "none";
    nextButton.style.display = "block";
  }
}

function showResult(score) {
  resultElement.textContent = `Résultat : ${score} / 5`;
  questionElement.style.display = "none";
  submitButton.style.display = "none";
  nextButton.style.display = "none";
  restartButton.style.display = "block";
}

showQuestion(currentQuestion);

prevButton.addEventListener("click", function (event) {
    event.preventDefault();
    if (currentQuestion > 0) {
      currentQuestion--;
      showQuestion(currentQuestion);
      resultElement.textContent = "";
      nextButton.disabled = false;
      updateProgressBar(); // Appel de la fonction ici pour mettre à jour la barre de progression
    }
    if (currentQuestion === 0) {
      prevButton.disabled = true;
    }
  });

nextButton.addEventListener("click", function (event) {
    event.preventDefault();
    if (currentQuestion < 4) {
      currentQuestion++;
      showQuestion(currentQuestion);
      resultElement.textContent = "";
      prevButton.disabled = false;
      updateProgressBar(); // Appel de la fonction ici pour mettre à jour la barre de progression
    }
    if (currentQuestion === 4) {
      nextButton.disabled = true;
    }
  });

submitButton.addEventListener("click", function () {
    const selectedAnswers = [...quizForm.querySelectorAll("input[name='answer']:checked")];
    if (selectedAnswers.length === 0) {
      return;
    }
  
    const confirmSubmit = confirm("Voulez-vous soumettre vos réponses ?");
    if (confirmSubmit) {
      const userAnswers = selectedAnswers.map(input => input.value);
      const correctAnswers = quizData.slice(0, 5).map(question => question.correctAnswer);
      score = userAnswers.filter(answer => correctAnswers.includes(answer)).length;
  
      showResult(score);
      currentQuestion++;
      updateProgressBar();
      quizForm.style.display = "none"; // Cacher le formulaire après soumission
      nextButton.style.display = "none"; // Cacher le bouton "Suivant" après soumission
      prevButton.style.display = "none"; // Cacher le bouton "Précédent" après soumission
    }
  });

restartButton.addEventListener("click", function () {
  currentQuestion = 0;
  score = 0;
  updateProgressBar();
  shuffleArray(quizData);
  showQuestion(currentQuestion);
  resultElement.textContent = "";
  quizForm.style.display = "block";
  prevButton.style.display = "none";
  nextButton.style.display = "block";
  restartButton.style.display = "none";
});