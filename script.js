// Simuler l'IA (réponses prédéfinies)
const iaResponses = {
    "pourquoi on dit dem Mann": {
        response: "On dit **dem Mann** (Dativ) pcq le verbe exige ce cas. Ex: *Ich gebe dem Mann das Buch.* (Je donne le livre **à l’homme**). Le Dativ répond à 'à qui ?'.",
        example: "Ich helfe <strong>dem</strong> Kind."
    },
    "quand utiliser den": {
        response: "**den** est l’article masculin à l’Accusatif (Akkusativ). On l’utilise quand le mot est COD (Complément d’Objet Direct). Ex: *Ich sehe <strong>den</strong> Mann.* (Je vois **l’homme**).",
        example: "Er isst <strong>den</strong> Apfel."
    },
    "adjectif après ein": {
        response: "Après **ein**, l’adjectif prend **-er** (masculin), **-es** (neutre), ou **-e** (féminin). Ex: *ein <strong>groß<span style='color:red'>er</span></strong> Hund*.",
        example: "Eine <strong>klein<span style='color:red'>e</span></strong> Katze."
    }
};

// Gérer le chat IA
document.getElementById('send-btn').addEventListener('click', () => {
    const userMessage = document.getElementById('user-message').value;
    if (!userMessage) return;

    // Afficher le message utilisateur
    const chatMessages = document.getElementById('chat-messages');
    chatMessages.innerHTML += `<div class="message user">${userMessage}</div>`;

    // Réponse IA (simulée)
    let response = "Désolé, je ne comprends pas. Peux-tu reformuler ?";
    for (const [question, data] of Object.entries(iaResponses)) {
        if (userMessage.toLowerCase().includes(question)) {
            response = `<strong>Explication :</strong> ${data.response}<br><strong>Exemple :</strong> ${data.example}`;
            break;
        }
    }

    setTimeout(() => {
        chatMessages.innerHTML += `<div class="message ia">${response}</div>`;
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 800);

    document.getElementById('user-message').value = '';
});

// Gérer les exercices
document.querySelectorAll('.corriger-btn').forEach(button => {
    button.addEventListener('click', () => {
        const input = button.previousElementSibling;
        const feedback = button.nextElementSibling;
        const correctAnswer = input.dataset.correct;

        if (input.value.toLowerCase() === correctAnswer) {
            feedback.textContent = "✅ Correct !";
            feedback.className = "feedback correct";
        } else {
            feedback.textContent = `❌ Faux. La réponse était : ${correctAnswer}`;
            feedback.className = "feedback incorrect";
        }
    });
});

// Navigation
document.getElementById('commencer-btn').addEventListener('click', () => {
    document.getElementById('cas').scrollIntoView({ behavior: 'smooth' });
});