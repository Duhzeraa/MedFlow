// Chatbot Lógica
const chatbotToggle = document.getElementById('chatbot-toggle');
const chatbotWindow = document.getElementById('chatbot-window');
const chatbotClose = document.getElementById('chatbot-close');
const chatbotInput = document.getElementById('chatbot-input');
const chatbotSend = document.getElementById('chatbot-send');
const chatbotMessages = document.getElementById('chatbot-messages');

// Função para abrir/fechar o chatbot
chatbotToggle.addEventListener('click', () => {
    chatbotWindow.style.display = chatbotWindow.style.display === 'flex' ? 'none' : 'flex';
});

chatbotClose.addEventListener('click', () => {
    chatbotWindow.style.display = 'none';
});

// Função para adicionar mensagens
function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender);
    messageDiv.textContent = text;
    chatbotMessages.appendChild(messageDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight; // Rolagem automática
}

document.addEventListener('click', function(e) {
    if (e.target.classList.contains('esp-btn')) {
        const especialidade = e.target.getAttribute('data-esp');
        sendMessageToChat(`Você selecionou: ${especialidade}`);
        botReply(`Show! Agora me diga, qual é a sua cidade para encontrar médicos de ${especialidade} perto de você?`);
    }
});


// Respostas automáticas baseadas em palavras-chave
function getBotResponse(userMessage) {
    const msg = userMessage.toLowerCase();

    // Saudações
    const greetings = ['oi', 'ola', 'olá', 'ei', 'eae', 'bom dia', 'boa tarde', 'boa noite'];
    if (greetings.some(g => msg.includes(g))) {
        return 'Olá! Sou o MedBot 🤖💙 Como posso te ajudar hoje?';
    }

    // Sobre a plataforma
    if (msg.includes('o que é') || msg.includes('sobre') || msg.includes('como funciona')) {
        return 'A Medflow conecta pacientes a médicos especializados de forma rápida. Fazemos uma pré-consulta com IA para entender sua necessidade e te indicar o médico ideal.';
    }

    // Consulta
    if (msg.includes('consulta') || msg.includes('marcar') || msg.includes('agendar')) {
        return 'Para marcar uma consulta, preciso saber: qual é o seu principal sintoma ou especialidade desejada?';
    }

    // Especialidades
    if (msg.includes('especialidade') || msg.includes('médico') || msg.includes('medico')) {
    return `Escolha a especialidade que você precisa 👇`
    }


    // Planos / Clínicas parceiras
    if (msg.includes('plano') || msg.includes('clínica') || msg.includes('clinica') || msg.includes('parceria')) {
        return 'Temos planos para médicos e também parcerias com clínicas para ampliar o alcance de atendimento. Quer detalhes de valores ou benefícios?';
    }

    // Valores
    if (msg.includes('preço') || msg.includes('valor') || msg.includes('custo')) {
        return 'Os valores variam conforme o médico e a especialidade. Posso coletar algumas informações e indicar opções dentro da sua faixa. Pode me dizer o que você está buscando?';
    }

    // Contato
    if (msg.includes('contato') || msg.includes('suporte') || msg.includes('fale') || msg.includes('whatsapp')) {
        return 'Você pode falar com nossa equipe pelo WhatsApp: (11) 90000-0000 📱';
    }

    // Horários
    if (msg.includes('horário') || msg.includes('atendimento') || msg.includes('hora','horas')) {
        return 'Atendemos 24h pelo aplicativo e suporte humano das 8h às 20h 🕒';
    }

    // Fallback
    return 'Não entendi muito bem 😅 Me diga melhor se você quer **marcar consulta**, **saber valores** ou **entender como funciona**.';
}


// Enviar mensagem
function sendMessage() {
    const userMessage = chatbotInput.value.trim();
    if (userMessage) {
        addMessage(userMessage, 'user');
        chatbotInput.value = '';
        setTimeout(() => {
            const botResponse = getBotResponse(userMessage);
            addMessage(botResponse, 'bot');
        }, 1000); // Simula delay de resposta
    }
}

chatbotSend.addEventListener('click', sendMessage);
chatbotInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendQuickMessage(keyword) {
  addMessage(keyword, 'user');
  setTimeout(() => {
      const botResponse = getBotResponse(keyword);
      addMessage(botResponse, 'bot');
  }, 800);
}