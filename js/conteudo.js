/* =========================================================
   CONFIGURAÇÃO GERAL — troque aqui a disciplina e a etapa
   ========================================================= */
window.CONFIG = {
  disciplina: "Geografia",
  etapa: "4ª etapa"
};

/* =========================================================
   CONTEÚDO DOS CAPÍTULOS
   Para trocar/adicionar vídeos: edite a lista "videos" de cada
   capítulo. O "id" é o código que aparece no link do YouTube:
   https://www.youtube.com/watch?v=ESTE_CODIGO
   ========================================================= */

window.CAPITULOS = [
  /* ---------------------------------------------------------
     CAPÍTULO 1 — OS LUGARES SÃO DIFERENTES
     --------------------------------------------------------- */
  {
    id: "lugares",
    numero: 1,
    titulo: "Os lugares são diferentes",
    emoji: "🧭",
    cor: "campo",
    resumo: "Cada lugar tem seu jeito: formas, cores, sons e cheiros que a gente percebe com os sentidos.",
    intro:
      "A sua casa, a escola, a praia, a praça do bairro… cada lugar é de um jeito! Neste capítulo vamos descobrir o que torna os lugares diferentes e como usamos os nossos sentidos — visão, audição, olfato, tato e paladar — para perceber cada um deles.",
    secoes: [
      {
        titulo: "O que é um lugar?",
        emoji: "📍",
        texto: [
          "Para a Geografia, <b>lugar</b> é um espaço que a gente conhece e com o qual tem uma <b>ligação</b>: a nossa casa, a escola, a rua, o bairro, a praça onde brincamos.",
          "Cada pessoa tem os <b>seus lugares</b> preferidos. Eles guardam lembranças, amizades e histórias.",
          "Os lugares são formados por <b>pessoas</b>, pelo que elas <b>fazem</b> ali e pelos <b>elementos</b> que existem nele.",
          "Os lugares também <b>mudam com o tempo</b>: uma casa é pintada, uma árvore cresce, um prédio é construído."
        ],
        sabia: "O mesmo lugar pode ser diferente para cada pessoa: a praça pode ser o lugar de brincar para uma criança e o lugar de trabalho para o pipoqueiro!"
      },
      {
        titulo: "Cada lugar é de um jeito",
        emoji: "🏝️",
        texto: [
          "Existem lugares muito diferentes: a <b>praia</b>, a <b>serra</b>, o <b>sertão</b>, a <b>cidade grande</b>, o <b>campo</b>, a <b>floresta</b>.",
          "Os lugares têm <b>elementos naturais</b>, que a natureza fez: mar, rios, morros, dunas, árvores, animais, o Sol, as nuvens.",
          "E têm <b>elementos construídos</b> pelas pessoas (também chamados de culturais ou humanizados): casas, ruas, prédios, pontes, praças, escolas, plantações.",
          "Os lugares também são diferentes pelo <b>jeito de viver das pessoas</b>: o que elas comem, como trabalham, suas festas e brincadeiras."
        ],
        sabia: "No Ceará existem lugares bem diferentes: praias com dunas no litoral, serras mais fresquinhas e o sertão, onde chove pouco."
      },
      {
        titulo: "Sons, cheiros e formas",
        emoji: "👃🏽",
        texto: [
          "Percebemos os lugares com os <b>cinco sentidos</b>: <b>visão</b> 👀, <b>audição</b> 👂, <b>olfato</b> 👃, <b>tato</b> ✋ e <b>paladar</b> 👅.",
          "<b>Sons</b>: na cidade ouvimos buzinas, motores e sirenes; no campo, galos e passarinhos; na praia, as ondas do mar. Barulho demais causa <b>poluição sonora</b>, que faz mal à saúde.",
          "<b>Cheiros</b>: o cheiro de pão quentinho da padaria, da maresia na praia, das flores no jardim, da terra molhada depois da chuva — e também cheiros ruins, como o do lixo e da fumaça.",
          "<b>Formas e cores</b>: prédios altos e retangulares, casas baixas, árvores, morros arredondados, o azul do mar. Com a visão percebemos o tamanho e a forma de tudo."
        ],
        sabia: "Pessoas cegas reconhecem muitos lugares pelos sons, cheiros e pelo que sentem com o tato — por exemplo, o vento e o cheiro do mar perto da praia."
      }
    ],
    videos: [
      { id: "O-njd8HWdB4", titulo: "Aula de Geografia: o lugar onde vivemos" },
      { id: "J6A5sZb70UE", titulo: "Meu lugar no mundo" },
      { id: "z-Y4UaMWbMk", titulo: "Os cinco sentidos para crianças" }
    ],
    jogos: [
      {
        tipo: "ligar",
        titulo: "Qual sentido eu uso?",
        instrucao: "Toque no sentido e depois no exemplo certo.",
        pares: [
          ["👀 Visão", "Ver o azul do mar e os prédios altos"],
          ["👂 Audição", "Ouvir as ondas e as buzinas"],
          ["👃 Olfato", "Sentir o cheiro de pão quentinho"],
          ["✋ Tato", "Sentir a areia quente nos pés"],
          ["👅 Paladar", "Provar uma tapioca gostosa"]
        ]
      },
      {
        tipo: "classificar",
        titulo: "Natural ou construído?",
        instrucao: "Arraste cada elemento para a caixa certa (ou toque nele e depois na caixa).",
        grupos: ["🌿 Natural (a natureza fez)", "🏗️ Construído (as pessoas fizeram)"],
        itens: [
          { t: "🌊 Mar", g: 0 },
          { t: "🏢 Prédio", g: 1 },
          { t: "⛰️ Morro", g: 0 },
          { t: "🌉 Ponte", g: 1 },
          { t: "🏜️ Dunas", g: 0 },
          { t: "🛣️ Rua asfaltada", g: 1 },
          { t: "🌳 Árvore da mata", g: 0 },
          { t: "🏫 Escola", g: 1 },
          { t: "🏞️ Rio", g: 0 },
          { t: "🎡 Parque de diversões", g: 1 }
        ]
      },
      {
        tipo: "classificar",
        titulo: "De onde vem esse som?",
        instrucao: "Coloque cada som no lugar onde é mais fácil ouvi-lo.",
        grupos: ["🏙️ Cidade", "🐓 Campo", "🏖️ Praia"],
        itens: [
          { t: "📢 Buzina de carro", g: 0 },
          { t: "🐓 Galo cantando", g: 1 },
          { t: "🌊 Barulho das ondas", g: 2 },
          { t: "🚨 Sirene de ambulância", g: 0 },
          { t: "🐄 Vaca mugindo", g: 1 },
          { t: "🦅 Gaivotas", g: 2 },
          { t: "🏗️ Britadeira de obra", g: 0 },
          { t: "🚜 Trator na plantação", g: 1 }
        ]
      },
      {
        tipo: "vf",
        titulo: "Verdadeiro ou falso?",
        itens: [
          { t: "Todos os lugares são iguais.", v: false, exp: "Cada lugar é de um jeito: tem elementos, pessoas e costumes diferentes." },
          { t: "Usamos os cinco sentidos para perceber os lugares.", v: true, exp: "Visão, audição, olfato, tato e paladar." },
          { t: "Um prédio é um elemento natural.", v: false, exp: "Prédios são construídos pelas pessoas." },
          { t: "Barulho demais pode causar poluição sonora.", v: true, exp: "E isso faz mal à saúde!" },
          { t: "Os lugares podem mudar com o passar do tempo.", v: true, exp: "Construções mudam, árvores crescem, ruas são asfaltadas." }
        ]
      }
    ]
  },

  /* ---------------------------------------------------------
     CAPÍTULO 4 — AS PAISAGENS MUDAM
     --------------------------------------------------------- */
  {
    id: "paisagens",
    numero: 4,
    titulo: "As paisagens mudam",
    emoji: "🌅",
    cor: "povos",
    resumo: "O que é paisagem, por que estudá-la e como ela muda de dia e de noite, com o tempo atmosférico e com as estações.",
    intro:
      "Olhe pela janela: tudo o que você vê é uma paisagem! Mas ela não fica sempre igual. Muda de dia e de noite, quando chove ou faz sol, e ao longo das estações do ano. Vamos descobrir como e por quê!",
    secoes: [
      {
        titulo: "O que é paisagem?",
        emoji: "🖼️",
        texto: [
          "<b>Paisagem</b> é tudo aquilo que conseguimos <b>ver e perceber</b> de um lugar: o que os olhos alcançam, os sons, os cheiros.",
          "A paisagem tem <b>elementos naturais</b> (mar, rios, morros, plantas, nuvens) e <b>elementos culturais</b> ou <b>humanizados</b> (casas, ruas, plantações, pontes), que são construídos pelas pessoas.",
          "Uma <b>paisagem natural</b> quase não foi modificada pelas pessoas, como uma floresta. Uma <b>paisagem modificada</b> (ou humanizada) foi transformada pelas pessoas, como uma cidade.",
          "As paisagens <b>mudam</b>: pela ação da <b>natureza</b> (chuva, vento, dia e noite, estações) e pela ação das <b>pessoas</b> (construções, desmatamento, plantações)."
        ],
        sabia: "O vento muda a paisagem das praias do Ceará: ele carrega a areia e faz as dunas andarem devagarinho!"
      },
      {
        titulo: "Por que estudamos as paisagens?",
        emoji: "🔎",
        texto: [
          "Estudar as paisagens ajuda a <b>entender o lugar</b> onde vivemos: como ele é, como as pessoas vivem e trabalham ali.",
          "Comparando <b>fotos antigas e atuais</b> de um mesmo lugar, descobrimos o que <b>mudou</b> e o que <b>permaneceu</b> com o tempo.",
          "Observando a paisagem, percebemos <b>problemas</b>, como lixo, poluição de rios e desmatamento, e podemos pensar em soluções.",
          "Assim aprendemos a <b>cuidar</b> melhor do lugar onde vivemos e da natureza."
        ],
        sabia: "Os geógrafos são os cientistas que estudam as paisagens e os lugares. Eles usam mapas, fotos, imagens de satélite e muita observação!"
      },
      {
        titulo: "Paisagens de dia e de noite",
        emoji: "🌗",
        texto: [
          "A Terra <b>gira em torno de si mesma</b>, como um pião. Esse movimento se chama <b>rotação</b> e demora cerca de <b>24 horas</b> — um dia inteiro.",
          "O lado da Terra que está virado para o <b>Sol</b> fica iluminado: é <b>dia</b>. O lado que fica de costas para o Sol fica escuro: é <b>noite</b>.",
          "<b>De dia</b>: a luz do Sol ilumina tudo, as escolas e o comércio estão abertos, as ruas têm mais movimento.",
          "<b>De noite</b>: aparecem a <b>Lua</b> e as <b>estrelas</b>, as luzes elétricas são acesas, a maioria das pessoas descansa. Mas algumas trabalham à noite, como médicos, enfermeiros, vigias e padeiros. E saem os <b>animais noturnos</b>, como a coruja e o morcego."
        ],
        sabia: "Quando é dia no Brasil, é noite no Japão! Isso acontece porque a Terra é redonda e só metade dela fica virada para o Sol de cada vez."
      },
      {
        titulo: "O tempo atmosférico e as paisagens",
        emoji: "🌦️",
        texto: [
          "<b>Tempo atmosférico</b> é como o ar está em um <b>momento</b>: <b>ensolarado</b> ☀️, <b>nublado</b> ☁️, <b>chuvoso</b> 🌧️, com <b>vento</b> 💨, quente ou frio.",
          "O tempo pode <b>mudar várias vezes no mesmo dia</b>: amanhecer com sol e chover à tarde!",
          "O tempo muda a paisagem: com <b>chuva</b>, as ruas ficam molhadas, os rios enchem, as pessoas usam guarda-chuva; com <b>sol</b>, a praia fica cheia e as roupas secam no varal.",
          "Os <b>meteorologistas</b> estudam o tempo e fazem a <b>previsão do tempo</b>. Eles usam instrumentos como o <b>termômetro</b> (mede a temperatura), o <b>pluviômetro</b> (mede a chuva) e a <b>biruta</b> (mostra a direção do vento)."
        ],
        sabia: "Tempo e clima são diferentes! Tempo é como está o ar agora; clima é como o tempo costuma ser em um lugar ao longo de muitos anos."
      },
      {
        titulo: "As estações do ano e as paisagens",
        emoji: "🍂",
        texto: [
          "A Terra também gira <b>ao redor do Sol</b>. Esse movimento se chama <b>translação</b> e demora cerca de <b>365 dias</b> — um ano.",
          "Durante o ano temos as quatro <b>estações</b>: <b>primavera</b> 🌸 (muitas flores), <b>verão</b> ☀️ (calor e dias mais longos), <b>outono</b> 🍂 (folhas caem em muitas árvores) e <b>inverno</b> ❄️ (mais frio e noites mais longas).",
          "No Brasil, o verão começa em <b>dezembro</b>, o outono em <b>março</b>, o inverno em <b>junho</b> e a primavera em <b>setembro</b>.",
          "No <b>Sul</b> do Brasil as estações são bem marcadas: no inverno faz muito frio e pode até gear. No <b>Nordeste</b>, como no Ceará, faz calor o ano todo; o que mais muda a paisagem é a <b>época das chuvas</b> e a <b>época seca</b>. No sertão, a <b>caatinga</b> perde as folhas na seca e fica verdinha quando chove!"
        ],
        sabia: "No Ceará, a época de mais chuva vai mais ou menos de fevereiro a maio. É chamada de quadra chuvosa."
      }
    ],
    videos: [
      { id: "7KZisey8TP8", titulo: "Paisagem natural e modificada" },
      { id: "bSmk5bpvc4c", titulo: "Dia e noite: um efeito da rotação da Terra" },
      { id: "Rq0Tvsmd-6I", titulo: "O tempo atmosférico para crianças" },
      { id: "EmFjWh2p87o", titulo: "As estações do ano para crianças" }
    ],
    jogos: [
      {
        tipo: "classificar",
        titulo: "Dia ou noite?",
        instrucao: "Coloque cada cartão na hora certa.",
        grupos: ["☀️ Dia", "🌙 Noite"],
        itens: [
          { t: "🏫 Crianças indo para a escola", g: 0 },
          { t: "⭐ Céu cheio de estrelas", g: 1 },
          { t: "🦉 Coruja caçando", g: 1 },
          { t: "🏖️ Banho de sol na praia", g: 0 },
          { t: "💡 Postes de luz acesos", g: 1 },
          { t: "🧺 Roupa secando no varal", g: 0 },
          { t: "🦇 Morcegos voando", g: 1 },
          { t: "🌻 Girassol virado para o Sol", g: 0 }
        ]
      },
      {
        tipo: "ligar",
        titulo: "Qual é o tempo?",
        instrucao: "Ligue o tempo atmosférico ao que acontece na paisagem.",
        pares: [
          ["☀️ Ensolarado", "Praia cheia e roupa secando rápido"],
          ["🌧️ Chuvoso", "Ruas molhadas e guarda-chuvas abertos"],
          ["☁️ Nublado", "Céu cinza e cheio de nuvens"],
          ["💨 Ventando", "Pipas no céu e folhas voando"],
          ["❄️ Frio", "Pessoas de casaco e cachecol"]
        ]
      },
      {
        tipo: "ligar",
        titulo: "As estações do ano",
        instrucao: "Ligue cada estação à sua característica.",
        pares: [
          ["🌸 Primavera", "Muitas flores desabrocham"],
          ["☀️ Verão", "Calor forte e dias mais longos"],
          ["🍂 Outono", "Folhas caem de muitas árvores"],
          ["❄️ Inverno", "Mais frio e noites mais longas"]
        ]
      },
      {
        tipo: "ordenar",
        titulo: "As estações em ordem",
        instrucao: "Começando pelo verão (dezembro), toque nas estações na ordem em que acontecem no Brasil.",
        itens: ["☀️ Verão (dezembro)", "🍂 Outono (março)", "❄️ Inverno (junho)", "🌸 Primavera (setembro)"]
      },
      {
        tipo: "vf",
        titulo: "Verdadeiro ou falso?",
        itens: [
          { t: "Dia e noite acontecem por causa da rotação da Terra.", v: true, exp: "A Terra gira em torno de si mesma em cerca de 24 horas." },
          { t: "As paisagens nunca mudam.", v: false, exp: "Elas mudam pela ação da natureza e das pessoas." },
          { t: "Tempo atmosférico e clima são a mesma coisa.", v: false, exp: "Tempo é o agora; clima é o padrão de muitos anos." },
          { t: "O pluviômetro mede a quantidade de chuva.", v: true, exp: "E o termômetro mede a temperatura." },
          { t: "No Ceará, faz muito frio e neva no inverno.", v: false, exp: "No Ceará faz calor o ano todo; muda a época de chuvas e a de seca." },
          { t: "A translação da Terra ao redor do Sol dura cerca de 365 dias.", v: true, exp: "É o tempo de um ano!" }
        ]
      }
    ]
  },

  /* ---------------------------------------------------------
     CAPÍTULO 7 — O MUNICÍPIO E SEUS ESPAÇOS
     --------------------------------------------------------- */
  {
    id: "municipio",
    numero: 7,
    titulo: "O município e seus espaços",
    emoji: "🗺️",
    cor: "ruas",
    resumo: "País, estado e município; limites naturais e artificiais; áreas rurais e urbanas.",
    intro:
      "Você mora em uma rua, que fica em um bairro, que fica em um município, que fica em um estado, que fica em um país! Neste capítulo vamos entender como o espaço é organizado, como se separam os municípios e quais são as áreas rurais e urbanas.",
    secoes: [
      {
        titulo: "País, estado e município",
        emoji: "🇧🇷",
        texto: [
          "O <b>Brasil</b> é o nosso <b>país</b>. Ele é dividido em <b>26 estados</b> e o <b>Distrito Federal</b>, onde fica <b>Brasília</b>, a capital do país.",
          "Cada <b>estado</b> é dividido em <b>municípios</b>. O <b>Ceará</b>, por exemplo, tem <b>184 municípios</b>, e a capital do estado é <b>Fortaleza</b>.",
          "É como <b>caixas dentro de caixas</b>: a casa fica na rua → a rua no bairro → o bairro no município → o município no estado → o estado no país.",
          "Cada um tem quem governe: o <b>presidente</b> governa o país, o <b>governador</b> governa o estado e o <b>prefeito</b> governa o município."
        ],
        sabia: "O Brasil tem mais de 5 mil e quinhentos municípios! Alguns são enormes, outros bem pequenininhos."
      },
      {
        titulo: "Limites naturais e artificiais",
        emoji: "🚧",
        texto: [
          "<b>Limite</b> é a linha que <b>separa</b> um município de outro (ou um estado de outro, ou um país de outro). Quando separa países, também chamamos de <b>fronteira</b>.",
          "<b>Limites naturais</b> são elementos da natureza usados para separar os territórios: <b>rios</b>, <b>serras</b>, <b>lagos</b> e o <b>mar</b>.",
          "<b>Limites artificiais</b> são criados pelas <b>pessoas</b>: estradas, ruas, avenidas, marcos e linhas retas desenhadas nos mapas.",
          "Exemplo: o <b>Rio Ceará</b> é um limite natural entre <b>Fortaleza</b> e <b>Caucaia</b>. E ao norte, Fortaleza é limitada pelo <b>Oceano Atlântico</b>!"
        ],
        sabia: "Muitas vezes, quando passamos de um município para outro, só percebemos por causa de uma placa: “Bem-vindo a…”."
      },
      {
        titulo: "Áreas rurais",
        emoji: "🌾",
        texto: [
          "A <b>área rural</b> é o <b>campo</b>. Lá há mais natureza, plantações, criações de animais e menos construções.",
          "As principais atividades são a <b>agricultura</b> (plantar e colher), a <b>pecuária</b> (criar animais) e o <b>extrativismo</b> (tirar produtos da natureza, como frutas e peixes).",
          "As casas ficam <b>mais distantes</b> umas das outras, em <b>sítios, chácaras e fazendas</b>, e moram menos pessoas.",
          "Do campo vêm muitos <b>alimentos</b> que chegam à cidade: frutas, verduras, leite, ovos, carne, feijão, milho."
        ],
        sabia: "O Ceará é grande produtor de caju! Da castanha ao suco, muita coisa vem das áreas rurais."
      },
      {
        titulo: "Áreas urbanas",
        emoji: "🏙️",
        texto: [
          "A <b>área urbana</b> é a <b>cidade</b>. Lá há muitas <b>construções</b> próximas umas das outras: casas, prédios, lojas, fábricas.",
          "Na cidade estão muitos <b>serviços</b>: hospitais, escolas, bancos, supermercados, transporte público. Também ficam a <b>prefeitura</b> e a <b>câmara de vereadores</b>.",
          "As principais atividades são o <b>comércio</b> (vender e comprar), a <b>indústria</b> (fabricar produtos) e os <b>serviços</b>.",
          "Como moram muitas pessoas, a cidade pode ter <b>problemas</b>: trânsito, poluição, barulho e muito lixo. Por isso é importante cuidar dela."
        ],
        sabia: "O campo e a cidade trocam o tempo todo: o campo manda alimentos para a cidade, e a cidade manda máquinas, remédios e roupas para o campo."
      }
    ],
    videos: [
      { id: "yQrgj2WGN4o", titulo: "Localização: casa, rua, bairro, município, estado e país" },
      { id: "6oBoUo_zi0o", titulo: "Estados e capitais do Brasil" },
      { id: "K-1qBJng-hE", titulo: "Fronteiras naturais e artificiais" },
      { id: "p_NrC5TIUNU", titulo: "O campo e a cidade (zona rural e zona urbana)" }
    ],
    jogos: [
      {
        tipo: "ordenar",
        titulo: "Caixas dentro de caixas",
        instrucao: "Toque do MENOR para o MAIOR.",
        itens: ["🏠 Casa", "🛣️ Rua", "🏘️ Bairro", "🏙️ Município (Fortaleza)", "🗺️ Estado (Ceará)", "🇧🇷 País (Brasil)"]
      },
      {
        tipo: "classificar",
        titulo: "Limite natural ou artificial?",
        instrucao: "Coloque cada limite na caixa certa.",
        grupos: ["🏞️ Natural", "🚧 Artificial"],
        itens: [
          { t: "🏞️ Rio", g: 0 },
          { t: "🛣️ Estrada", g: 1 },
          { t: "⛰️ Serra", g: 0 },
          { t: "🏙️ Avenida", g: 1 },
          { t: "🌊 Mar", g: 0 },
          { t: "📏 Linha reta no mapa", g: 1 },
          { t: "💧 Lago", g: 0 },
          { t: "🪧 Marco de concreto", g: 1 }
        ]
      },
      {
        tipo: "classificar",
        titulo: "Área rural ou área urbana?",
        instrucao: "Onde encontramos mais cada coisa?",
        grupos: ["🌾 Área rural", "🏙️ Área urbana"],
        itens: [
          { t: "🐄 Criação de gado", g: 0 },
          { t: "🏥 Hospital grande", g: 1 },
          { t: "🌽 Plantação de milho", g: 0 },
          { t: "🏛️ Prefeitura", g: 1 },
          { t: "🏡 Sítio com casa distante", g: 0 },
          { t: "🚦 Muito trânsito", g: 1 },
          { t: "🥥 Coleta de frutos na mata", g: 0 },
          { t: "🏭 Fábricas e lojas", g: 1 }
        ]
      },
      {
        tipo: "ligar",
        titulo: "Quem governa?",
        instrucao: "Ligue cada lugar a quem o governa.",
        pares: [
          ["🇧🇷 País", "Presidente"],
          ["🗺️ Estado", "Governador"],
          ["🏙️ Município", "Prefeito"]
        ]
      },
      {
        tipo: "vf",
        titulo: "Verdadeiro ou falso?",
        itens: [
          { t: "O Brasil é dividido em estados, e os estados em municípios.", v: true, exp: "26 estados + o Distrito Federal." },
          { t: "A capital do Ceará é Fortaleza.", v: true, exp: "Isso mesmo!" },
          { t: "Um rio pode ser um limite natural entre municípios.", v: true, exp: "Ex.: o Rio Ceará, entre Fortaleza e Caucaia." },
          { t: "Uma estrada é um limite natural.", v: false, exp: "Estradas são feitas pelas pessoas: limite artificial." },
          { t: "Na área rural as casas ficam bem coladas umas nas outras.", v: false, exp: "No campo as casas ficam mais distantes." },
          { t: "O prefeito governa o município.", v: true, exp: "O governador governa o estado e o presidente, o país." }
        ]
      }
    ]
  }
];
