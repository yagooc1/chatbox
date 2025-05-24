function enviarMensagem() {
  const input = document.getElementById('userInput');
  const texto = input.value.trim();

  if (texto !== '') {
    const corpo = document.querySelector('.chatbox-body');

    const msgUser = document.createElement('div');
    msgUser.classList.add('message', 'user');
    msgUser.textContent = texto;
    corpo.appendChild(msgUser);

    input.value = '';

    setTimeout(() => {
      const msgBot = document.createElement('div');
      msgBot.classList.add('message', 'bot');
      msgBot.textContent = 'Mensagem recebida! Em breve um profissional responderá.';
      corpo.appendChild(msgBot);
      corpo.scrollTop = corpo.scrollHeight;
    }, 1000);
  }
}