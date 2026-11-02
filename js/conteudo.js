/* =========================================================
   CONTEÚDO DOS CAPÍTULOS
   Para trocar/adicionar vídeos: edite a lista "videos" de cada
   capítulo. O "id" é o código que aparece no link do YouTube:
   https://www.youtube.com/watch?v=ESTE_CODIGO
   ========================================================= */

window.CAPITULOS = [
  /* ---------------------------------------------------------
     CAPÍTULO 2 — O MUNICÍPIO E O CAMPO
     --------------------------------------------------------- */
  {
    id: "campo",
    numero: 2,
    titulo: "O município e o campo",
    emoji: "🌾",
    cor: "campo",
    resumo: "Como era e como é a vida no campo, o que se faz lá e as hortas que existem até dentro das cidades.",
    intro:
      "Todo município tem uma parte urbana, que é a cidade, e muitas vezes tem também uma parte rural, que é o campo. Neste capítulo vamos descobrir como as pessoas vivem e trabalham no campo, como ele mudou com o tempo e como a agricultura também acontece dentro das cidades!",
    secoes: [
      {
        titulo: "O município: cidade + campo",
        emoji: "🗺️",
        texto: [
          "O município é formado pela <b>área urbana</b> (a cidade) e pela <b>área rural</b> (o campo).",
          "Na cidade há muitas casas e prédios perto uns dos outros, ruas asfaltadas, lojas, hospitais e muito movimento.",
          "No campo as casas ficam mais distantes umas das outras e há plantações, criações de animais, rios e matas.",
          "O campo e a cidade <b>dependem um do outro</b>: o campo produz alimentos (arroz, feijão, leite, frutas) e a cidade produz e vende máquinas, roupas, remédios e oferece serviços."
        ],
        sabia: "A pessoa que governa o município é o prefeito ou a prefeita. Ele cuida tanto da cidade quanto do campo!"
      },
      {
        titulo: "O campo no passado e no presente",
        emoji: "⏳",
        texto: [
          "<b>No passado</b>, a maior parte dos brasileiros morava no campo. O trabalho era quase todo feito <b>à mão</b>, com ferramentas como a enxada e a foice, e com a ajuda de animais, como o boi puxando o arado ou o carro de boi.",
          "Muitas casas do campo não tinham energia elétrica: a luz vinha de lamparinas e lampiões, e a comida era feita no fogão a lenha.",
          "<b>No presente</b>, muitas fazendas usam <b>máquinas</b> como tratores e colheitadeiras, que fazem em pouco tempo o trabalho de muitas pessoas. Há energia elétrica, celular e até internet em muitos lugares do campo.",
          "Com as máquinas, muita gente que trabalhava no campo foi morar na cidade em busca de emprego. Hoje, <b>a maioria dos brasileiros vive nas cidades</b>."
        ],
        sabia: "Quando muitas pessoas saem do campo para morar na cidade, chamamos isso de êxodo rural."
      },
      {
        titulo: "Morar no campo",
        emoji: "🏡",
        texto: [
          "No campo as pessoas moram em <b>sítios, chácaras e fazendas</b>. Os vizinhos podem morar bem longe!",
          "Muitas crianças vão para a escola de <b>transporte escolar</b>, porque a escola pode ser distante. Algumas estudam em escolas rurais.",
          "Morar no campo tem coisas boas: ar mais puro, contato com a natureza, silêncio, alimentos plantados em casa.",
          "Também tem dificuldades: hospitais e lojas podem ficar longe, muitas estradas são de terra e, em alguns lugares, ainda falta internet."
        ],
        sabia: "Muitas famílias do campo plantam e criam animais para o próprio sustento e vendem o que sobra nas feiras da cidade. Isso se chama agricultura familiar."
      },
      {
        titulo: "Outras atividades no campo",
        emoji: "🐄",
        texto: [
          "<b>Agricultura</b>: é plantar e colher — milho, feijão, mandioca, frutas, verduras.",
          "<b>Pecuária</b>: é criar animais — bois, vacas, porcos, galinhas, cabras, ovelhas.",
          "<b>Extrativismo</b>: é retirar produtos da natureza, como castanha, açaí, frutas nativas e peixes.",
          "Mas o campo tem ainda outras atividades: <b>turismo rural</b> (visitar fazendas, fazer trilhas, tomar banho de rio), <b>artesanato</b>, e a fabricação de <b>queijos, doces, farinha e rapadura</b>."
        ],
        sabia: "Quando a fazenda transforma o leite em queijo ou a cana em rapadura, ela está fazendo uma agroindústria."
      },
      {
        titulo: "A agricultura nos centros urbanos",
        emoji: "🥬",
        texto: [
          "Não é só no campo que se planta! Nas cidades existe a <b>agricultura urbana</b>.",
          "Há <b>hortas comunitárias</b> em terrenos vazios, onde os vizinhos plantam juntos; <b>hortas nas escolas</b>; e plantas em vasos, varandas, quintais e até em <b>telhados de prédios</b>.",
          "As hortas urbanas trazem alimentos fresquinhos e saudáveis, deixam a cidade mais verde, ajudam famílias a ganhar dinheiro e unem a comunidade.",
          "Nas <b>feiras livres</b>, os agricultores vendem diretamente para quem mora na cidade."
        ],
        sabia: "Restos de comida como cascas de frutas podem virar adubo para a horta. Isso se chama compostagem!"
      }
    ],
    videos: [
      { id: "p_NrC5TIUNU", titulo: "O campo e a cidade (zona rural e zona urbana)" },
      { id: "qsAnJrbHYbo", titulo: "3º ano – Modos de vida no campo e na cidade" },
      { id: "V0vyyQHJB6w", titulo: "Agricultura urbana cresce e ganha espaço nas cidades" }
    ],
    jogos: [
      {
        tipo: "classificar",
        titulo: "Campo ou cidade?",
        instrucao: "Arraste cada figurinha para o lugar certo (ou toque nela e depois toque na caixa).",
        grupos: ["🌾 Campo", "🏙️ Cidade"],
        itens: [
          { t: "🚜 Trator arando a terra", g: 0 },
          { t: "🏢 Prédios altos", g: 1 },
          { t: "🐄 Curral com vacas", g: 0 },
          { t: "🚦 Semáforo", g: 1 },
          { t: "🌽 Plantação de milho", g: 0 },
          { t: "🚇 Metrô", g: 1 },
          { t: "🏡 Sítio com galinhas", g: 0 },
          { t: "🛍️ Shopping", g: 1 },
          { t: "🐂 Carro de boi", g: 0 },
          { t: "🚌 Muitos ônibus e carros", g: 1 }
        ]
      },
      {
        tipo: "ordenar",
        titulo: "Antes e agora no campo",
        instrucao: "Toque nos cartões na ordem: do MAIS ANTIGO para o MAIS MODERNO.",
        itens: ["✋ Plantar com as mãos e a enxada", "🐂 Arado puxado por bois", "🚜 Trator", "🛰️ Colheitadeira com GPS e drone"]
      },
      {
        tipo: "ligar",
        titulo: "Ligue a atividade ao exemplo",
        instrucao: "Toque em uma palavra da esquerda e depois no exemplo certo da direita.",
        pares: [
          ["Agricultura", "Plantar feijão e milho"],
          ["Pecuária", "Criar vacas e galinhas"],
          ["Extrativismo", "Coletar castanha e açaí"],
          ["Turismo rural", "Passear na fazenda e fazer trilhas"],
          ["Agricultura urbana", "Horta comunitária na cidade"]
        ]
      },
      {
        tipo: "vf",
        titulo: "Verdadeiro ou falso?",
        itens: [
          { t: "O município pode ter área urbana e área rural.", v: true, exp: "Isso mesmo! Cidade (urbana) + campo (rural)." },
          { t: "No passado, quase todo o trabalho no campo era feito com máquinas.", v: false, exp: "No passado o trabalho era feito à mão e com ajuda de animais." },
          { t: "Hoje a maioria dos brasileiros mora nas cidades.", v: true, exp: "Sim! Muita gente saiu do campo para a cidade." },
          { t: "Só é possível plantar no campo.", v: false, exp: "Na cidade também se planta: hortas comunitárias, escolares, em vasos e telhados." },
          { t: "O campo e a cidade dependem um do outro.", v: true, exp: "O campo produz alimentos e a cidade produz máquinas, roupas e serviços." }
        ]
      }
    ]
  },

  /* ---------------------------------------------------------
     CAPÍTULO 4 — POVOS INDÍGENAS E COMUNIDADES TRADICIONAIS
     --------------------------------------------------------- */
  {
    id: "povos",
    numero: 4,
    titulo: "Os povos indígenas e as comunidades tradicionais",
    emoji: "🪶",
    cor: "povos",
    resumo: "Pataxó, Guarani, caiçaras, ribeirinhos, quilombolas e outros moradores do campo.",
    intro:
      "Muito antes de os portugueses chegarem, estas terras já eram habitadas pelos povos indígenas. Hoje, além deles, existem outras comunidades tradicionais que vivem de um jeito especial, ligado à natureza e às tradições dos seus antepassados. Vamos conhecer cada uma!",
    secoes: [
      {
        titulo: "Os habitantes destas terras",
        emoji: "🌎",
        texto: [
          "Quando os portugueses chegaram, em <b>1500</b>, já viviam aqui <b>milhões de indígenas</b>, divididos em muitos povos diferentes, cada um com sua língua, seus costumes e suas crenças.",
          "Os portugueses chegaram pelo litoral da Bahia, na região onde hoje fica <b>Porto Seguro</b> — terra do povo Pataxó.",
          "Com a colonização, muitos indígenas morreram por causa de guerras, doenças trazidas pelos europeus e trabalho forçado. Muitos povos perderam suas terras.",
          "Mesmo assim, os povos indígenas <b>resistiram</b>! Hoje são mais de 300 povos e centenas de línguas indígenas no Brasil."
        ],
        sabia: "Muitas palavras que usamos vêm de línguas indígenas: mandioca, pipoca, capivara, jabuticaba, abacaxi e tatu!"
      },
      {
        titulo: "Os Pataxó",
        emoji: "🏹",
        texto: [
          "Os <b>Pataxó</b> vivem principalmente no <b>sul da Bahia</b>, perto de Porto Seguro, e também em Minas Gerais.",
          "Eles vivem em <b>aldeias</b>. A aldeia de <b>Barra Velha</b> é considerada a “aldeia-mãe” dos Pataxó.",
          "Os Pataxó pescam, plantam, fazem <b>artesanato</b> com sementes, madeira e penas, e muitos trabalham com o turismo, mostrando sua cultura aos visitantes.",
          "Eles usam pintura corporal com tintas da natureza, como o <b>urucum</b> (vermelho) e o <b>jenipapo</b> (preto), e estão fortalecendo sua língua, o <b>patxohã</b>."
        ],
        sabia: "Os Pataxó estavam na região onde os portugueses chegaram em 1500. Por isso dizem que foram dos primeiros a ver as caravelas!"
      },
      {
        titulo: "Os Guarani",
        emoji: "🌽",
        texto: [
          "Os <b>Guarani</b> são um dos maiores povos indígenas do Brasil.",
          "Eles vivem em vários estados, como Mato Grosso do Sul, Paraná, Santa Catarina, Rio Grande do Sul, São Paulo e Rio de Janeiro, e também em outros países, como Paraguai, Argentina e Bolívia.",
          "Para os Guarani, a <b>terra</b> é muito importante: é o lugar onde podem viver do seu jeito. Eles plantam <b>milho</b>, mandioca e batata-doce.",
          "Nas aldeias há a <b>casa de reza</b> (opy), onde fazem cantos, danças e rezas. Os mais velhos ensinam os mais novos contando histórias."
        ],
        sabia: "A língua guarani é tão importante que é uma das línguas oficiais do Paraguai!"
      },
      {
        titulo: "As comunidades caiçaras",
        emoji: "🛶",
        texto: [
          "Os <b>caiçaras</b> vivem no <b>litoral</b> (beira do mar), principalmente nos estados de São Paulo, Rio de Janeiro e Paraná.",
          "Eles são descendentes de indígenas, portugueses e africanos.",
          "Vivem da <b>pesca artesanal</b> (com redes e canoas, sem grandes barcos), da roça de mandioca e da produção de <b>farinha</b>. Também fazem artesanato e trabalham com turismo.",
          "Uma tradição caiçara é o <b>fandango caiçara</b>, uma festa com música e dança. Eles também fazem a <b>canoa caiçara</b>, escavada em um só tronco de árvore."
        ],
        sabia: "O fandango caiçara foi reconhecido como patrimônio cultural do Brasil!"
      },
      {
        titulo: "As comunidades ribeirinhas",
        emoji: "🛥️",
        texto: [
          "Os <b>ribeirinhos</b> moram <b>às margens dos rios</b>, principalmente na região da <b>Amazônia</b>.",
          "Muitas casas são <b>palafitas</b>: construídas sobre estacas de madeira, para a água não entrar quando o rio enche.",
          "O rio é a “rua” dos ribeirinhos! Eles se deslocam de <b>barco e canoa</b>, e muitas crianças vão para a escola de barco.",
          "Eles vivem da <b>pesca</b>, da coleta de frutos como o <b>açaí</b> e da plantação de mandioca. Conhecem muito bem as cheias e as secas do rio."
        ],
        sabia: "Na Amazônia, o rio sobe muito na época das chuvas (cheia) e desce na época seca (vazante). Os ribeirinhos organizam a vida de acordo com o rio."
      },
      {
        titulo: "As comunidades quilombolas",
        emoji: "✊🏾",
        texto: [
          "Durante muito tempo, pessoas foram trazidas à força da <b>África</b> e <b>escravizadas</b> no Brasil.",
          "Muitas delas fugiram e formaram os <b>quilombos</b>: lugares onde podiam viver em liberdade. Os quilombos foram uma forma de <b>resistência</b>.",
          "O quilombo mais famoso foi o <b>Quilombo dos Palmares</b>, em Alagoas, liderado por <b>Zumbi</b>. A guerreira <b>Dandara</b> também lutou por lá.",
          "Hoje, os <b>quilombolas</b> são os descendentes dessas pessoas. Eles vivem em comunidades em todo o Brasil, plantam, criam animais e preservam a cultura, as festas, as danças e a memória dos antepassados."
        ],
        sabia: "O dia 20 de novembro é o Dia Nacional de Zumbi e da Consciência Negra, um feriado nacional."
      },
      {
        titulo: "Comunidade quilombola Morro do Fortunato",
        emoji: "⛰️",
        texto: [
          "A comunidade quilombola <b>Morro do Fortunato</b> fica no município de <b>Garopaba</b>, no estado de <b>Santa Catarina</b>.",
          "Ela é formada por famílias <b>descendentes de pessoas que foram escravizadas</b> e que conquistaram ali o seu lugar para viver.",
          "Os moradores mantêm vivas as <b>tradições dos antepassados</b>: as histórias contadas pelos mais velhos, o trabalho na roça, as festas e a união da comunidade.",
          "A comunidade é reconhecida oficialmente como quilombola, o que ajuda a proteger seu território e sua história."
        ],
        sabia: "Existem comunidades quilombolas em quase todos os estados do Brasil — não só no Nordeste!"
      },
      {
        titulo: "Outros moradores das áreas rurais",
        emoji: "👨🏽‍🌾",
        texto: [
          "Além dos indígenas e das comunidades tradicionais, muitas outras pessoas moram e trabalham no campo.",
          "Há os <b>pequenos agricultores</b> (agricultura familiar), os <b>trabalhadores rurais</b> das fazendas, os <b>pescadores</b>, os <b>sertanejos</b> do sertão nordestino, os <b>pantaneiros</b> do Pantanal e os <b>seringueiros</b>, que tiram o látex da seringueira na Amazônia.",
          "Também existem as <b>quebradeiras de coco babaçu</b>, mulheres do Maranhão, Piauí e Tocantins que tiram o óleo e outros produtos do coco.",
          "Cada grupo tem seu jeito de viver, mas todos dependem da terra e da natureza — e todos merecem respeito!"
        ],
        sabia: "O látex tirado da seringueira é usado para fazer borracha!"
      }
    ],
    videos: [
      { id: "LVM4pFdVqfo", titulo: "Povos tradicionais brasileiros: indígenas, ribeirinhos, caiçaras (resumo ilustrado)" },
      { id: "rdbe88UWtdU", titulo: "Onde vivem os indígenas Pataxó?" },
      { id: "9IUXC4753aE", titulo: "Brincadeira das crianças Guarani" },
      { id: "sx9SCG5qRSA", titulo: "Caiçaras: guardiões do mar e da mata" },
      { id: "QthlP_Hcac8", titulo: "O que é um quilombo?" }
    ],
    jogos: [
      {
        tipo: "ligar",
        titulo: "Quem é quem?",
        instrucao: "Toque no nome do povo ou comunidade e depois na descrição certa.",
        pares: [
          ["Pataxó", "Indígenas do sul da Bahia, perto de Porto Seguro"],
          ["Guarani", "Indígenas que têm a casa de reza (opy) e plantam milho"],
          ["Caiçaras", "Pescadores do litoral de SP, RJ e PR"],
          ["Ribeirinhos", "Moram em palafitas na beira dos rios da Amazônia"],
          ["Quilombolas", "Descendentes de africanos escravizados que resistiram"],
          ["Seringueiros", "Tiram o látex da seringueira"]
        ]
      },
      {
        tipo: "classificar",
        titulo: "Onde vive cada comunidade?",
        instrucao: "Coloque cada cartão no lugar onde essa comunidade costuma viver.",
        grupos: ["🌊 Beira do mar", "🏞️ Beira do rio", "🌳 Terras / aldeias / quilombos"],
        itens: [
          { t: "🛶 Caiçaras", g: 0 },
          { t: "🏠 Casas em palafitas", g: 1 },
          { t: "🪶 Aldeia Pataxó de Barra Velha", g: 2 },
          { t: "🐟 Fandango e pesca artesanal", g: 0 },
          { t: "🍇 Coleta de açaí na Amazônia", g: 1 },
          { t: "⛰️ Morro do Fortunato", g: 2 },
          { t: "🌽 Casa de reza Guarani", g: 2 },
          { t: "🚤 Ir para escola de barco", g: 1 }
        ]
      },
      {
        tipo: "vf",
        titulo: "Verdadeiro ou falso?",
        itens: [
          { t: "Quando os portugueses chegaram, o Brasil estava vazio.", v: false, exp: "Já viviam aqui milhões de indígenas de muitos povos." },
          { t: "Os quilombos eram lugares de liberdade e resistência.", v: true, exp: "Pessoas escravizadas fugiam e formavam quilombos." },
          { t: "Todos os povos indígenas falam a mesma língua.", v: false, exp: "Existem centenas de línguas indígenas diferentes!" },
          { t: "Palafitas são casas construídas sobre estacas.", v: true, exp: "Assim a água não entra quando o rio enche." },
          { t: "A comunidade Morro do Fortunato fica em Santa Catarina.", v: true, exp: "Fica em Garopaba, Santa Catarina." },
          { t: "Zumbi foi o líder do Quilombo dos Palmares.", v: true, exp: "Por isso o dia 20 de novembro homenageia Zumbi." }
        ]
      }
    ]
  },

  /* ---------------------------------------------------------
     CAPÍTULO 7 — AS RUAS DO MUNICÍPIO
     --------------------------------------------------------- */
  {
    id: "ruas",
    numero: 7,
    titulo: "As ruas do município",
    emoji: "🛣️",
    cor: "ruas",
    resumo: "O que vemos nas ruas, as histórias que elas contam, a rua na arte, a rua de todos e outros caminhos.",
    intro:
      "As ruas são caminhos que ligam as casas, as escolas, as lojas e as praças. Mas elas também guardam histórias, aparecem em obras de arte e são lugares de convivência. Vamos passear pelas ruas do município!",
    secoes: [
      {
        titulo: "Caminhando pelas ruas",
        emoji: "🚶🏽",
        texto: [
          "Quando caminhamos pela rua, vemos muitas coisas: <b>casas, prédios, lojas, praças, árvores, postes, calçadas, placas e semáforos</b>.",
          "Existem ruas mais <b>residenciais</b> (com mais casas) e ruas mais <b>comerciais</b> (com mais lojas). Algumas são calmas, outras muito movimentadas.",
          "Cada rua tem um <b>nome</b> e as casas têm <b>número</b>. Rua + número + bairro + cidade formam o <b>endereço</b>, que ajuda as pessoas e as cartas a chegarem ao lugar certo.",
          "Lugares fáceis de reconhecer, como uma igreja, uma padaria ou uma praça, são chamados de <b>pontos de referência</b>."
        ],
        sabia: "O CEP é um número que também faz parte do endereço e ajuda os Correios a entregar as correspondências."
      },
      {
        titulo: "Ruas que contam histórias",
        emoji: "📜",
        texto: [
          "Os <b>nomes das ruas</b> contam histórias! Muitos homenageiam <b>pessoas importantes</b> (Rua Tiradentes), <b>datas históricas</b> (Rua Sete de Setembro, Avenida Quinze de Novembro), lugares, plantas ou acontecimentos.",
          "As <b>construções antigas</b>, como casarões, igrejas e estações de trem, mostram como era a rua antigamente.",
          "O chão também conta história: antigamente muitas ruas eram de <b>terra</b>, depois vieram as de <b>pedra</b> e <b>paralelepípedo</b>, e hoje muitas são de <b>asfalto</b>.",
          "No passado, pelas ruas passavam <b>carroças, cavalos e bondes</b>. Hoje passam carros, ônibus, motos e bicicletas."
        ],
        sabia: "Conversar com pessoas mais velhas do bairro é um ótimo jeito de descobrir a história de uma rua!"
      },
      {
        titulo: "A representação de ruas em obras de arte",
        emoji: "🎨",
        texto: [
          "Pintores, fotógrafos, desenhistas e escritores sempre gostaram de mostrar as ruas em suas obras.",
          "Uma <b>pintura</b> ou uma <b>fotografia antiga</b> de uma rua nos ajuda a saber como as pessoas viviam, se vestiam, trabalhavam e se locomoviam naquela época. Por isso essas obras são <b>fontes históricas</b>.",
          "O pintor francês <b>Jean-Baptiste Debret</b>, por exemplo, viveu no Brasil há mais de 200 anos e pintou cenas das ruas do Rio de Janeiro daquele tempo.",
          "Hoje as ruas também viram arte com o <b>grafite</b> e os <b>murais</b> pintados nas paredes. É a arte de rua!"
        ],
        sabia: "Comparar uma foto antiga com uma foto atual da mesma rua mostra o que mudou e o que permaneceu."
      },
      {
        titulo: "A rua é de todos",
        emoji: "🤝",
        texto: [
          "A rua é um <b>espaço público</b>: pertence a todas as pessoas. Por isso todos devem <b>respeitar e cuidar</b> dela.",
          "Para todos andarem com segurança: os pedestres usam a <b>calçada</b> e atravessam na <b>faixa de pedestres</b>; motoristas e pedestres respeitam o <b>semáforo</b>; ciclistas usam a <b>ciclovia</b>.",
          "Uma rua de todos precisa ter <b>acessibilidade</b>: rampas nas calçadas para cadeirantes, piso tátil para pessoas cegas e calçadas sem buracos.",
          "Cuidar da rua é não jogar lixo no chão, não pichar, cuidar das árvores e das praças. As ruas também são lugares de encontro: feiras, festas, brincadeiras e desfiles!"
        ],
        sabia: "O piso tátil tem relevos que a pessoa cega sente com os pés ou com a bengala, e assim sabe por onde andar."
      },
      {
        titulo: "Outros caminhos",
        emoji: "🧭",
        texto: [
          "As ruas não são os únicos caminhos! Existem <b>estradas e rodovias</b> que ligam uma cidade a outra.",
          "Existem as <b>ferrovias</b>, por onde passam os trens; os <b>rios e mares</b>, por onde passam barcos e navios; e os caminhos do <b>ar</b>, por onde voam os aviões.",
          "No campo e nas matas existem as <b>trilhas</b>. Muito antes das estradas, os indígenas já abriam caminhos pela mata, como o famoso <b>Peabiru</b>.",
          "Cada caminho serve para levar <b>pessoas e mercadorias</b> de um lugar para outro."
        ],
        sabia: "Para os ribeirinhos da Amazônia, o rio é o principal caminho!"
      },
      {
        titulo: "Jogo dos caminhos",
        emoji: "🎲",
        texto: [
          "Para ensinar um caminho a alguém, usamos <b>direções</b>: siga em frente, vire à <b>direita</b>, vire à <b>esquerda</b>.",
          "Também usamos <b>pontos de referência</b>: “passe pela padaria e vire na praça”.",
          "Um <b>mapa</b> é um desenho de um lugar visto de cima. A <b>legenda</b> explica o que cada símbolo do mapa quer dizer.",
          "Logo abaixo tem um jogo de caminhos para você treinar! 👇"
        ],
        sabia: "O GPS do celular usa satélites para mostrar o caminho, mas ele também fala: “vire à direita”, “siga em frente”…"
      }
    ],
    videos: [
      { id: "TiKDqS2eoN0", titulo: "Educação no trânsito" },
      { id: "_59EhLcPppI", titulo: "Cidadania para crianças: regras de convivência" },
      { id: "xV2Gw3QX1bs", titulo: "Educação no trânsito: placas de sinalização" }
    ],
    jogos: [
      { tipo: "mapa", titulo: "Jogo dos caminhos — leve o Bê até o destino!" },
      {
        tipo: "classificar",
        titulo: "Atitude certa ou errada na rua?",
        instrucao: "Coloque cada atitude no lugar certo.",
        grupos: ["👍 Atitude certa", "👎 Atitude errada"],
        itens: [
          { t: "🚸 Atravessar na faixa de pedestres", g: 0 },
          { t: "🗑️ Jogar lixo no chão", g: 1 },
          { t: "♿ Deixar a rampa livre", g: 0 },
          { t: "🚗 Estacionar na calçada", g: 1 },
          { t: "🌳 Cuidar das árvores da praça", g: 0 },
          { t: "🔴 Atravessar com o sinal vermelho para o pedestre", g: 1 },
          { t: "🚲 Andar de bicicleta na ciclovia", g: 0 },
          { t: "🖍️ Pichar paredes", g: 1 }
        ]
      },
      {
        tipo: "ligar",
        titulo: "Cada caminho com seu transporte",
        instrucao: "Ligue o caminho ao que passa por ele.",
        pares: [
          ["Ferrovia", "🚆 Trem"],
          ["Rio", "🛶 Barco e canoa"],
          ["Rodovia", "🚚 Caminhão e ônibus"],
          ["Céu", "✈️ Avião"],
          ["Trilha", "🥾 Pessoas a pé"],
          ["Ciclovia", "🚲 Bicicleta"]
        ]
      },
      {
        tipo: "vf",
        titulo: "Verdadeiro ou falso?",
        itens: [
          { t: "A rua é um espaço público, de todas as pessoas.", v: true, exp: "Por isso todos devem cuidar dela." },
          { t: "Os nomes das ruas nunca têm relação com a história.", v: false, exp: "Muitos nomes homenageiam pessoas e datas históricas." },
          { t: "Uma pintura antiga de uma rua pode ser uma fonte histórica.", v: true, exp: "Ela mostra como era a vida naquela época." },
          { t: "Rampas e piso tátil ajudam na acessibilidade.", v: true, exp: "Ajudam cadeirantes e pessoas cegas." },
          { t: "Ponto de referência é um lugar fácil de reconhecer.", v: true, exp: "Ex.: padaria, igreja, praça." }
        ]
      }
    ]
  },

  /* ---------------------------------------------------------
     CAPÍTULO 10 — TECNOLOGIA POR TODOS OS LADOS
     --------------------------------------------------------- */
  {
    id: "tecnologia",
    numero: 10,
    titulo: "Tecnologia por todos os lados",
    emoji: "💡",
    cor: "tecnologia",
    resumo: "O que é tecnologia, como ela mudou o campo, a cidade, os aparelhos, o trabalho — e por que nem todos têm acesso.",
    intro:
      "Tecnologia não é só celular e computador! Desde a roda até o videogame, os seres humanos sempre inventaram coisas para facilitar a vida. Vamos ver como a tecnologia mudou o campo, a cidade, o trabalho e o nosso dia a dia.",
    secoes: [
      {
        titulo: "A tecnologia",
        emoji: "⚙️",
        texto: [
          "<b>Tecnologia</b> é o conjunto de <b>conhecimentos, técnicas e objetos</b> criados pelos seres humanos para <b>resolver problemas</b> e <b>facilitar a vida</b>.",
          "Tecnologias muito antigas: o <b>fogo</b> controlado, a <b>roda</b>, as ferramentas de pedra, a escrita, o lápis.",
          "Tecnologias modernas: o <b>celular</b>, o <b>computador</b>, a <b>internet</b>, os satélites, os robôs.",
          "A tecnologia está em tudo: na cozinha (geladeira, fogão), na escola (livro, lousa, computador), na rua (semáforo, ônibus) e na saúde (vacinas, raio-X)."
        ],
        sabia: "Até a colher e a tesoura são tecnologias! Alguém precisou inventá-las."
      },
      {
        titulo: "Mudanças no campo",
        emoji: "🚜",
        texto: [
          "Antes, o trabalho no campo era feito com <b>enxada, foice e animais</b>. Hoje existem <b>tratores, colheitadeiras e plantadeiras</b>.",
          "Há sistemas de <b>irrigação</b> que levam água às plantações, <b>sementes melhoradas</b>, e até <b>drones</b> e <b>GPS</b> para cuidar das lavouras.",
          "Com isso, é possível <b>produzir muito mais alimento</b>, mais rápido e com menos pessoas trabalhando.",
          "Mas, como as máquinas fazem o trabalho de muitas pessoas, muitos trabalhadores rurais perderam o emprego e foram para as cidades."
        ],
        sabia: "Uma colheitadeira moderna consegue colher em poucas horas o que muitas pessoas levariam dias para colher à mão."
      },
      {
        titulo: "Transformações na cidade",
        emoji: "🏙️",
        texto: [
          "Antigamente as ruas eram iluminadas por <b>lampiões a gás ou a óleo</b>; hoje temos <b>iluminação elétrica</b>.",
          "O transporte mudou: das <b>carroças</b> e <b>bondes</b> para os <b>ônibus, carros, metrôs e trens</b> modernos.",
          "Os <b>elevadores</b> permitiram construir prédios muito altos. Surgiram os <b>semáforos</b>, as <b>câmeras</b> de segurança, a <b>água encanada</b> e o <b>esgoto</b>.",
          "A tecnologia deixou a cidade mais confortável, mas também trouxe problemas, como <b>poluição</b>, <b>barulho</b> e <b>trânsito</b>."
        ],
        sabia: "Existia uma profissão chamada acendedor de lampião: ele passava pelas ruas no fim da tarde acendendo um por um!"
      },
      {
        titulo: "O avanço da tecnologia e dos aparelhos",
        emoji: "📱",
        texto: [
          "<b>Comunicação</b>: carta ✉️ → telegrama → telefone fixo ☎️ → orelhão → celular → smartphone 📱. Hoje mandamos mensagens e fazemos chamadas de vídeo na hora!",
          "<b>Entretenimento</b>: rádio 📻 → TV em preto e branco → TV colorida 📺 → internet e vídeos no celular.",
          "<b>Escrever e guardar</b>: pena e tinta → máquina de escrever ⌨️ → computador 💻.",
          "<b>Em casa</b>: fogão a lenha → fogão a gás → micro-ondas; lamparina → lâmpada elétrica 💡; ferro de passar a brasa → ferro elétrico."
        ],
        sabia: "Os primeiros celulares eram enormes e pesados, e só serviam para fazer ligações!"
      },
      {
        titulo: "A tecnologia e o trabalho",
        emoji: "👷🏽",
        texto: [
          "As máquinas tornaram muitos trabalhos <b>mais rápidos e menos cansativos</b>.",
          "Algumas profissões <b>quase desapareceram</b>: acendedor de lampião, telefonista, datilógrafo (quem escrevia na máquina de escrever), leiteiro que entregava leite de casa em casa.",
          "<b>Novas profissões surgiram</b>: programador, técnico de informática, criador de jogos, operador de drone, criador de conteúdo para internet.",
          "Hoje muitas pessoas trabalham pelo computador, até <b>de casa</b>. Por isso é importante continuar estudando e aprendendo sempre."
        ],
        sabia: "Os robôs ajudam em fábricas de carros, montando peças com muita precisão."
      },
      {
        titulo: "Tecnologia e desigualdade",
        emoji: "⚖️",
        texto: [
          "Nem todas as pessoas têm <b>acesso</b> às tecnologias. Muitas famílias não têm computador, celular ou <b>internet</b> em casa.",
          "Em alguns lugares do campo e de bairros mais pobres, a internet não chega ou é muito ruim. Algumas escolas não têm computadores.",
          "Isso é uma <b>desigualdade</b>: quem não tem acesso tem mais dificuldade para estudar, se informar e conseguir trabalho.",
          "A <b>inclusão digital</b> busca levar tecnologia e internet para todos — por exemplo, com computadores nas escolas e internet em lugares públicos."
        ],
        sabia: "Tecnologias também ajudam pessoas com deficiência: leitores de tela para cegos, aparelhos auditivos e cadeiras de rodas motorizadas."
      }
    ],
    videos: [
      { id: "6WSn2Pbglo8", titulo: "Tecnologias do passado e do presente: o antes e o depois" },
      { id: "-vsr4ZMElrE", titulo: "Tecnologia no campo (vídeo aula de Geografia)" },
      { id: "udwfeBWlEkQ", titulo: "A história dos objetos" }
    ],
    jogos: [
      {
        tipo: "ordenar",
        titulo: "A evolução da comunicação",
        instrucao: "Toque do MAIS ANTIGO para o MAIS NOVO.",
        itens: ["✉️ Carta", "☎️ Telefone fixo", "📞 Celular só de ligar", "📱 Smartphone com internet"]
      },
      {
        tipo: "classificar",
        titulo: "Antigamente ou hoje em dia?",
        instrucao: "Coloque cada objeto no tempo certo.",
        grupos: ["🕰️ Antigamente", "🚀 Hoje em dia"],
        itens: [
          { t: "🪔 Lamparina", g: 0 },
          { t: "💡 Lâmpada de LED", g: 1 },
          { t: "⌨️ Máquina de escrever", g: 0 },
          { t: "💻 Notebook", g: 1 },
          { t: "🐎 Carroça", g: 0 },
          { t: "🚇 Metrô", g: 1 },
          { t: "🔥 Fogão a lenha", g: 0 },
          { t: "📲 Chamada de vídeo", g: 1 },
          { t: "📻 Rádio de válvula", g: 0 },
          { t: "🛸 Drone", g: 1 }
        ]
      },
      {
        tipo: "ligar",
        titulo: "O antigo e o novo",
        instrucao: "Ligue cada objeto antigo ao objeto moderno que faz a mesma coisa.",
        pares: [
          ["✉️ Carta", "💬 Mensagem no celular"],
          ["🪔 Lampião", "💡 Lâmpada elétrica"],
          ["⌨️ Máquina de escrever", "💻 Computador"],
          ["🐂 Arado com bois", "🚜 Trator"],
          ["🐎 Bonde puxado a cavalo", "🚇 Metrô"]
        ]
      },
      {
        tipo: "vf",
        titulo: "Verdadeiro ou falso?",
        itens: [
          { t: "Tecnologia é só aquilo que tem tela ou bateria.", v: false, exp: "A roda, a enxada e o lápis também são tecnologias!" },
          { t: "As máquinas no campo fizeram a produção de alimentos aumentar.", v: true, exp: "Produz-se mais, mais rápido." },
          { t: "Todas as pessoas do Brasil têm internet em casa.", v: false, exp: "Muitas não têm. Isso é desigualdade de acesso." },
          { t: "Algumas profissões desapareceram com a tecnologia.", v: true, exp: "Ex.: acendedor de lampião e telefonista." },
          { t: "Inclusão digital é levar tecnologia e internet para todos.", v: true, exp: "Isso mesmo!" }
        ]
      }
    ]
  }
];
