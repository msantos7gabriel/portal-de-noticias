const listaNoticias = document.querySelector(".noticias");

const dataAtual = new Date();

const dataFormatada = new Intl.DateTimeFormat("pt-BR", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
})
  .format(dataAtual)
  .replace(/\//g, "-");

const dataFormatada2 = new Intl.DateTimeFormat("pt-BR", {
  day: "numeric",
  month: "short",
  year: "numeric",
})
  .format(dataAtual)
  .replace(/\//g, "-");

const noticiaPrimária = [
  {
    imagem: "./src/img/imagem_noticia.jpg",
    alt: "Secretaria de Administração",
    categoria: "politica",
    titulo:
      "Prefeitura de Guanambi publica nesta terça (8), edital de convocação de profissionais do magistério com direito a precatórios do FUNDEF para",
  },
  {
    imagem: "./src/img/imagem_noticia.jpg",
    alt: "Notícia principal 2",
    categoria: "economia",
    titulo:
      "Guanambi amplia ações de incentivo ao comércio local e geração de emprego",
  },
  {
    imagem: "./src/img/imagem_noticia.jpg",
    alt: "Notícia principal 3",
    categoria: "saúde",
    titulo:
      "Atendimento em saúde ganha reforço com novas unidades de apoio à população",
  },
];

const noticiasSecundarias = [
  {
    imagem: "./src/img/imagem_noticia.jpg",
    alt: "Secretaria de Administração",
    titulo:
      "IF Baiano abre inscrições para mais de 1,8 mil vagas em cursos técnicos gratuitos",
    descricao:
      "Inscrições vão de 31 de agosto a 16 de outubro. Cursos são da modalidade subsequente, voltados para quem tem o Ensino Médio completo.",
  },
  {
    imagem: "./src/img/imagem_noticia.jpg",
    alt: "Notícia secundária",
    titulo:
      "Prefeitura anuncia novos projetos para infraestrutura e mobilidade urbana",
    descricao:
      "A administração pública deve ampliar ações em sinalização, mobilidade e manutenção de vias em áreas prioritárias da cidade.",
  },
  {
    imagem: "./src/img/imagem_noticia.jpg",
    alt: "Notícia secundária",
    titulo:
      "Comércio local registra aumento na procura por serviços durante o mês",
    descricao:
      "Setor de varejo e serviços observa maior movimentação em bairros centrais e regiões de expansão urbana.",
  },
  {
    imagem: "./src/img/imagem_noticia.jpg",
    alt: "Saúde municipal",
    titulo:
      "Campanha de vacinação contra a gripe é prorrogada até o fim do mês",
    descricao:
      "A secretaria de saúde informou que os postos de atendimento continuarão aplicando as doses para garantir a imunização de toda a comunidade.",
  },
  {
    imagem: "./src/img/imagem_noticia.jpg",
    alt: "Evento cultural",
    titulo:
      "Festival de artes e cultura reúne centenas de moradores na praça principal",
    descricao:
      "O evento contou com apresentações musicais gratuitas, exposições de artesanato local e diversas opções de gastronomia regional.",
  },
];

const ultimasNoticias = [
  {
    imagem: "./src/img/imagem_noticia.jpg",
    alt: "Prefeitura de Guanambi",
    titulo:
      "Prefeitura de Guanambi fará leilão online de 118 lotes de veículos e sucatas; lances começam em R$ 29,25",
    data: dataFormatada2,
  },
  {
    imagem: "./src/img/imagem_noticia.jpg",
    alt: "Calor na Bahia",
    titulo:
      "Calor bate recordes do ano em cidades da Bahia; temperaturas passam de 39°C e Vitória da Conquista registra granizo",
    data: dataFormatada2,
  },
  {
    imagem: "./src/img/imagem_noticia.jpg",
    alt: "Reforma de imóveis",
    titulo:
      "Prefeitura de Guanambi lança Refis 2026 com descontos de até 100% em juros e multas",
    data: dataFormatada2,
  },
  {
    imagem: "./src/img/imagem_noticia.jpg",
    alt: "Vagas de emprego",
    titulo:
      "Vitória da Conquista tem 50 vagas de emprego abertas nesta terça-feira",
    data: dataFormatada2,
  },
  {
    imagem: "./src/img/imagem_noticia.jpg",
    alt: "SineBahia",
    titulo:
      "SineBahia oferece vaga com salário de R$ 2,9 mil em Guanambi nesta sexta-feira",
    data: dataFormatada2,
  },
  {
    imagem: "./src/img/imagem_noticia.jpg",
    alt: "Emprego em Vitória da Conquista",
    titulo:
      "SineBahia oferece 70 vagas de emprego em Vitória da Conquista nesta terça-feira",
    data: dataFormatada2,
  },
];

listaNoticias.innerHTML += `
  <div class="titulo">
    <h1>Noticias</h1>
  </div>
`;

listaNoticias.innerHTML += noticiaPrimária
  .map(
    (noticia) => `
      <article class="noticia_principal">
        <div id="${noticia.categoria}" class="imagem_noticia">
          <img loading="lazy" src="${noticia.imagem}" alt="${noticia.alt}" />
          <span class="categoria">${noticia.categoria.toUpperCase()}</span>
        </div>
        <div class="informacoes">
          <h2>${noticia.titulo}</h2>
          <time datetime="${dataFormatada}">${dataFormatada2}</time>
        </div>
      </article>
    `,
  )
  .join("");

listaNoticias.innerHTML += `
  <div class="titulo">
    <h2>Top 5 mais lidas da semana</h2>
  </div>
`;

if (listaNoticias) {
  listaNoticias.innerHTML += noticiasSecundarias
    .map(
      (noticia) => `
        <article class="noticia_secundaria">
          <div class="imagem_noticia">
            <img loading="lazy" src="${noticia.imagem}" alt="${noticia.alt}" />
          </div>
          <div class="informacoes">
            <h2>${noticia.titulo}</h2>
            <p>${noticia.descricao}</p>
          </div>
        </article>
      `,
    )
    .join("");
}

if (listaNoticias) {
  listaNoticias.innerHTML += `
    <div class="titulo">
      <h2>Últimas notícias</h2>
    </div>
    <div class="ultimas_noticias_grid">
      ${ultimasNoticias
        .map(
          (noticia) => `
            <article class="noticia_ultimas">
              <div class="imagem_noticia">
                <img loading="lazy" src="${noticia.imagem}" alt="${noticia.alt}" />
              </div>
              <div class="informacoes">
                <h3>${noticia.titulo}</h3>
                <time>${noticia.data}</time>
              </div>
            </article>
          `,
        )
        .join("")}
    </div>
  `;
}
