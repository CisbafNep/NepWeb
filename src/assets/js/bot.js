const openChat = document.getElementById("openChat");
const chatBox = document.getElementById("chatBox");
const messages = document.getElementById("chatMessages");
const input = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

openChat.addEventListener("click", () => {
  chatBox.style.display =
    chatBox.style.display === "block" ? "none" : "block";
});

/* ===============================
   NÃO FECHAR AO CLICAR NO CHAT
================================ */
chatBox.addEventListener("click", (event) => {
  event.stopPropagation();
});

/* ===============================
   FECHAR AO CLICAR FORA
================================ */
document.addEventListener("click", (event) => {
  const clicouNoBotao = openChat.contains(event.target);
  const clicouNoChat = chatBox.contains(event.target);

  if (!clicouNoBotao && !clicouNoChat) {
    chatBox.style.display = "none";
  }
});

/* ===============================
   FECHAR COM ESC (PC)
================================ */
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    chatBox.style.display = "none";
  }
});


const respostas = [
  {
    palavras: ["grátis", "gratuitos", "gratis", "pagar", "pago", "pagos", "custa", "custo", "custar", "valor"],
    texto: "Todos os cursos do NEP CISBAF são gratuitos. No geral, são cursos abertos, não apresentam limite de vagas e podem ser iniciados em qualquer momento, por qualquer pessoa, seja ela servidora pública ou não. "

  },
  {
    palavras: ["documentos", "documentação", "documentacao", "documentacão", "documento"],
    texto: "A Plataforma CISBAF NEP disponibiliza somente Certificado de Conclusão das pessoas que realizam os cursos. Os documentos poderão ser emitidos quando o login for realizado na Plataforma CISBAF NEP acessando os itens 'Meus certificados' no Portal do Aluno. "

  },
  {
    palavras: ["prazo", "prazo de realização", "prazo de realizacão", "prazo de realizacao"],
    texto: "Os cursos ofertados na Plataforma CISBAF NEP possuem prazo para realização, ou seja, têm um período de disponibilidade. Esse prazo pode variar de acordo com a carga horária de cada curso. e começa a ser contado a partir do dia em que você se inscreve."

  },
  {
    palavras: ["fechou", "fechada", "fechado", "indisponível", " tá indisponível", "ta indisponível", "ta indisponivel", "não disponível", "indisponivel", "não disponivel", "nao disponível", "nao disponível", "não está disponível", "nao está disponível", "nao esta disponível", "nao esta disponivel", "encerrada", "encerrado"],
    texto: "Periodicamente, suspendemos a oferta de alguns cursos para revisão, atualização e ajustes necessários, por essa razão eles estarão com inscrição fechada."

  },
  {
    palavras: ["MEC", "mec"],
    texto: "Os cursos à distância de curta duração oferecidos na Plataforma CISBAF NEP são cursos de educação continuada. Por isso, não estão sujeitos ao reconhecimento do MEC."
  },
  {
    palavras: ["mais de um", "mais de 1", "ao mesmo"],
    texto: "Pode sim, mas cada curso tem sua carga horária definida, então fique atento(a) ao prazo e granta seu certificado."
  },
  {
    palavras: ["período", "periodo"],
    texto: "As datas de início e término do curso está informada no card do curso."
  },
  {
    palavras: ["carga", "horária", "horas", "duração"],
    texto: "A carga horária está informada no card do curso, mas geralmente são entre 24h a 40h."
  },
  {
    palavras: ["esqueci a senha", "senha", "alterar senha", "alterar", "alteração", "esqueci a minha senha", "esqueci minha senha", "esqueci senha"],
    texto: "Para recuperar sua senha, siga as seguintes instruções: <br> 1. Acesse a plataforma em 'ENTRAR'. <br> 2. Abrirá um formulário de login na Plataforma CISBAF NEP.<br> 3. Em seguida, clique no botão “Perdeu a senha?”.<br> 4. Abrirá uma página de recuperação de senha na qual você deverá digitar seu usuário ou e-mail e, posteriormente, deverá clicar no botão “buscar”.<br> 5. Feito isso, aguarde a mensagem que deverá chegar no seu e-mail e siga as orientações nela contida.<br> Caso não receba a redefinição de senha, verifique se a mensagem entrou na caixa de spam ou lixo eletrônico ."
  },

  {
    palavras: ["acesso", "acessar", "entrar"],
    texto: "Ao se inscrever no curso, o acesso é liberado de imediato, na data disponível informada na descrição."
  },
  {
    palavras: ["dúvida", "dúvidas", "duvida", "duvidas", "esclareço", "esclareco", "esclarecer", "esclarecimento"],
    texto: "Os cursos da Plataforma CISBAF NEP podem ser:<br> <b>1. AUTOINSTRUCIONAIS:</b> Não possuem tutoria. Neles, o usuário assume o papel ativo na busca do conhecimento, tornando-se responsável por elucidar suas dúvidas quanto aos conteúdos e as atividades, assim como por buscar materiais complementares que possam auxiliar na construção e apropriação do conhecimento. <br> <b>2. TUTORIA ASSÍNCRONA:</b> Neles, o usuário pode conversar por chat com a tutoria que irá responder em até 48 horas.<br> Em ambas modalidades o suporte técnico de uso a Plataforma CISBAF NEP está disponível por whatsapp através do número <b>21 96884 3062</b> ou através do email: <b>nep.plataforma@gmail.com.</b>"
  },

  {
    palavras: ["gero", "gerar", "gera", "emito", "emitir", "emissão", "emissao", "pegar o diploma", "pegar diploma", "pegar o certificado", "pegar certificado", "diploma"],
    texto: "A emissão de certificado de um curso realizado na Plataforma CISBAF NEP estará disponível quando todas as atividades dele estiverem concluídas com aproveitamento igual ou superior à nota mínima exigida no ambiente do curso. <br> Para emitir o certificado de um curso realizado na Plataforma CISBAF NEP, siga os passos: <br> 1. Acessea plataforma. <br> 2. Com o login realizado, role a pagina “Portal do Aluno” até encontrar 'Meus Certificados'. <br> 3. Vá até o curso para o qual deseja emitir o certificado e clique em 'Gerar Certificado'. <br> 4. Pronto! Seu certificado será baixado e você poderá imprimi- lo e / ou salvá - lo."
  },
  {
    palavras: ["corrigir", "corrijo", "ajustar", "ajeitar", "consertar", "concertar", "ajeita", "corrijir", "errado"],
    texto: "O certificado reflete os dados preenchidos pelo usuário no cadastro. Os dados de certificados já emitidos não poderão ser alterados, em respeito à política de combate a fraudes, uma proteção para o NEP CISBAF e para os alunos. <br> É possível alterar os dados do cadastro, mas eles só serão refletidos nos certificados que ainda serão gerados após a alteração.<br> Esclarecemos que:<br> 1. O sistema importa as informações do Perfil do Aluno. <br> 2. Alguns usuários utilizam indevidamente o campo “Nome Social”. Esse campo atende a uma regulamentação federal e tem por objetivo reconhecer o nome de travestis e pessoas transexuais, independente desse nome constar ou não em seu registro civil. A Plataforma CISBAF NEP segue as regulamentações do Decreto nº 8.727/16. Portanto, se esse campo não se aplica a você não o preencha.<br> 3. Para alterar alguma informação em seu cadastro, verifique as orientações já disponibilizadas nessa mesma página. Apenas os certificados que ainda serão emitidos após a atualização conterão os dados atualizados."
  },

  {
    palavras: ["suporte", "contato", "ajuda"],
    texto: "Para falar com o suporte basta ir em <b>'FALE CONOSCO'</b> no topo do site, ou chamar no Whatsapp pelo número: <b>21 96884-3062</b> ou através do email: <b>nep.plataforma@gmail.com</b>."
  },

  {
    palavras: ["cadastro", "minha conta", "perfil"],
    texto: "Para atualizar informações pessoais no cadastro da Plataforma CISBAF NEP (como nome completo, nome social, gênero e data de nascimento), siga as instruções: <br> 1. Acesse a plataforma. <br> 2. Clique na foto do perfil, no mesmo local, em seguida selecione “Perfil”.<br> 3. É possível alterar somente as informações permitidas, que estarão nos campos em branco. Utilize o botão 'Modificar Perfil' para confirmar as atualizações realizadas. <br> <b>ATENÇÃO:</b> o preenchimento dos dados no formulário de cadastro e na ficha de inscrição dos cursos é de inteira responsabilidade de quem preenche. Sendo assim, a atualização dos dados cadastrais será refletida somente nos certificados a serem emitidos após as alterações."
  },
  {
    palavras: ["obrigado", "obrigada", "brigado", "brigada", "grato", "gratidão", "gratidao", "valeu", "vlw", "grata", "muito bom", "👍", "ok", "obg"],
    texto: "Disponha. Se houver mais dúvidas só chamar 👍"
  },
{
  palavras: ["inscrição", "inscrever", "inscricao", "inscricão", "inscrito"],
    texto: "As inscrições são feitas diretamente pela plataforma. Basta ir em 'entrar' e preencher o formulário. "
},
{
  palavras: ["tudo bem", "td bem", "tudo bom", "td bom", "beleza", "blz"],
    texto: "Tudo bem sim!"
},
{
  palavras: ["tchau", "xau", "adeus", "adios", "good bye", "bye", "au revouir" , "au revoir", "tamo junto", "tmos junto", "tamo juntos", "tamos juntos", "tmj", "tmjs" ],
    texto: "Tchau! 👋 Qualquer dúvida só chamar!"
},
{
  palavras: ["curso aberto", "curso disponível", "curso disponivel", "aberto", "disponivel", "disponível","andamento"],
    texto: "Nossos cursos abertos estão disponíveis em <b>CURSOS EM ANDAMENTO</b>. Para mais informações basta clicar em 'saiba mais' no card do curso."
},
{
  palavras: ["oi", "olá", "ola", "hello", "hi", "helo", "hellou", "helou"],
    texto: "Olá, tudo bem? Em que posso ajudar?😁 "
}
];

function enviarMensagem() {
  const texto = input.value.toLowerCase();
  if (!texto) return;

  messages.innerHTML += `
    <div class="msg user">
      <span>${input.value}</span>
    </div>
  `;

  let resposta = "Não entendi 😕 Pode reformular a pergunta? Ou entre em contato com o suporte!";

  respostas.forEach(item => {
    item.palavras.forEach(p => {
      if (texto.includes(p)) resposta = item.texto;
    });
  });

  setTimeout(() => {
    messages.innerHTML += `
      <div class="msg bot">
        
        <span>${resposta}</span>
      </div>
    `;
    messages.scrollTop = messages.scrollHeight;
  }, 400);

  input.value = "";
}

sendBtn.addEventListener("click", enviarMensagem);
input.addEventListener("keypress", e => {
  if (e.key === "Enter") enviarMensagem();
});

/* Mensagem inicial */
messages.innerHTML = `
  <div class="msg bot">
    <img src="/assets/midia/Robotnep.gif">
    <span>Olá! Sou o CyberNep! 👋 Posso lhe ajudar com perguntas frequentes sobre os cursos da plataforma.</span>
  </div>
`;

