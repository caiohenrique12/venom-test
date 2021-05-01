const venom = require('venom-bot');

venom.create(
  {
    headless: true,
    useChrome: false,
    puppeteerOptions: {
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    }
  }
).then((client) => start(client))
  .catch((erro) => console.error(erro));

function start(client) {
  client.onMessage((message) => {
    if (message.body === 'Oi!') {
      client
        .sendText(message.from, 'Bem vindo! 🕷')
        .catch((erro) => {
          console.error('Erro ao enviar: ', erro);
        });
    }
  });
}