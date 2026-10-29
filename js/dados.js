const DADOS = {
  nome: "Gabriel",
  papel: "Desenvolvedor web, Front-end",
  frase: "Estudante de desenvolvimento, focado em Front-end para Web e acessibilidade.",
  sobre: [
    "Tenho curso tecnico no Senac atualmente estudo na Fatec de São José do Rio Preto e faço estágio na Secretaria Municipal de Saúde, onde desenvolvo sistemas de automação de tarefas e aplicações web para a gestão de funcionários.",
    "Na faculdade, estudo Java, Estruturas de Dados, SQL Server e UX/UI. Meus projetos acadêmicos vão desde a criação de um ERP para uma empresa real até o desenvolvimento de um afinador de violão acessível para pessoas com deficiência visual."
  ],
  projetos: [
    { nome: "ROOM 237", ano: "2026", resumo: "Projeto de front web, feito de quem gosta de cinema para quem gosta de cinema, ultiliza da API do The Movie Database (TMDB) para que voce consia buscar um filme ou ate te indicar um filme com base noque voce busca!", stack: ["HTML", "CSS", "JavaScript"], link: "https://griguetto.github.io/Room_237/" },
    { nome: "Controle de Plantões", ano: "2026", resumo: "Gestão de plantões de servidores com três visões (funcionário, gerente e administrador), controle de acesso por perfil, dashboards e relatórios.", stack: ["PHP", "MySQL", "JavaScript"], link: "" },
    { nome: "Movimentação de Servidores", ano: "2026", resumo: "Sistema web para solicitar transferências de servidores entre unidades de saúde.", stack: ["HTML", "CSS", "JavaScript"], link: "" },
    { nome: "Afinador de Violão Acessível", ano: "2026", resumo: "Aplicação web feita para pessoas com deficiência visual parcial ou total afinarem o violão. [Em Desenvolvimento]", stack: ["Java", "Spring Boot"], link: "" },
    { nome: "AR Ecológico", ano: "2026", resumo: "ERP web com arquitetura multipágina. [Em Desenvolvimento]", stack: ["Spring Boot", "Bootstrap"], link: "" }
  ],

  // nível de 1 a 5
  habilidades: [
    { grupo: "Front-end", itens: [["HTML", 5], ["CSS", 5], ["JavaScript", 4], ["Bootstrap", 3]] },
    { grupo: "Back-end", itens: [["PHP", 2], ["Java", 3], ["Spring Boot", 3]] },
    { grupo: "Dados", itens: [["Planilhas", 5], ["Apps Script", 4], ["SQL Server", 4], ["MySQL", 5] ]  }
  ],
  trajetoria: [
    { quando: "Atualmente", titulo: "Estagio e Estudo", texto: "Estudando na Fatec (faculdade de tecnologia) Informatica para negócios e estagiando na Secretaria da Saúde." },
    { quando: "Em andamento", titulo: "Estudos em programação", texto: "Java Spring Boot, Acessibilidade e projetos próprios." }
  ],
  contato: {
    texto: "Tem um projeto, uma vaga ou um bug que ninguém explica? Escreva.",
    email: "gabrielriguetto3@gmail.com",
    links: [["GitHub", "https://github.com/GRiguetto"], ["LinkedIn", "https://linkedin.com/in/gabriel-fernandes-riguetto-5266b3351"]]
  },
  sussurros: ["Ph'nglui mglw'nafh Cthulhu", "Iä! Shub-Niggurath!", "Y'bthnk... h'ehye—n'grkdl'lh...", "Ogthrod ai'f geb'l-ee'h Yog-Sothoth", "ph'nglui mglw'nafh"],
  rodape: "Em sua casa em R'lyeh, o morto Cthulhu aguarda sonhando."
};
