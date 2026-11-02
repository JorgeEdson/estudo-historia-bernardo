/* =========================================================
   SIMULADOS — 20 questões por capítulo
   tipo "mc" = múltipla escolha. A PRIMEIRA opção é sempre a
               correta aqui no arquivo; o site embaralha tudo.
   tipo "ab" = questão aberta. "r" é a resposta esperada,
               mostrada depois para conferir.
   ========================================================= */

window.SIMULADOS = {
  campo: [
    { tipo: "mc", p: "O município é formado por quais áreas?", o: ["Área urbana e área rural", "Só pela área urbana", "Só por fazendas", "Só pelo centro da cidade"], exp: "Área urbana é a cidade; área rural é o campo." },
    { tipo: "mc", p: "Qual é outro nome para a área rural?", o: ["Campo", "Centro", "Bairro", "Shopping"] },
    { tipo: "mc", p: "Como era feito o trabalho no campo no passado?", o: ["Principalmente à mão e com ajuda de animais", "Com drones e computadores", "Com tratores modernos com GPS", "Com robôs"] },
    { tipo: "mc", p: "Qual destas máquinas é usada hoje no campo para colher?", o: ["Colheitadeira", "Máquina de lavar", "Elevador", "Micro-ondas"] },
    { tipo: "mc", p: "Hoje, onde mora a maioria dos brasileiros?", o: ["Nas cidades", "No campo", "Nas florestas", "Nas ilhas"] },
    { tipo: "mc", p: "Criar animais como bois, porcos e galinhas é chamado de:", o: ["Pecuária", "Agricultura", "Extrativismo", "Comércio"] },
    { tipo: "mc", p: "Plantar e colher milho, feijão e mandioca é chamado de:", o: ["Agricultura", "Pecuária", "Indústria", "Turismo"] },
    { tipo: "mc", p: "Coletar castanha e açaí direto da natureza é um exemplo de:", o: ["Extrativismo", "Pecuária", "Turismo rural", "Indústria"] },
    { tipo: "mc", p: "Visitar uma fazenda, fazer trilhas e tomar banho de rio é um exemplo de:", o: ["Turismo rural", "Pecuária", "Agricultura urbana", "Extrativismo"] },
    { tipo: "mc", p: "Uma horta comunitária em um terreno vazio da cidade é um exemplo de:", o: ["Agricultura urbana", "Pecuária", "Extrativismo", "Êxodo rural"] },
    { tipo: "mc", p: "Como as casas costumam ficar no campo?", o: ["Mais distantes umas das outras", "Todas grudadas", "Sempre em prédios altos", "Em cima de lojas"] },
    { tipo: "mc", p: "Quando muitas pessoas saem do campo para morar na cidade, chamamos isso de:", o: ["Êxodo rural", "Agricultura urbana", "Turismo rural", "Pecuária"] },
    { tipo: "mc", p: "O que a cidade costuma oferecer para quem mora no campo?", o: ["Máquinas, roupas, remédios e serviços", "Apenas plantações", "Apenas animais", "Nada, o campo não precisa da cidade"] },
    { tipo: "ab", p: "Escreva uma diferença entre o trabalho no campo no passado e no presente.", r: "No passado o trabalho era feito à mão (enxada, foice) e com animais (bois puxando o arado). Hoje muitas fazendas usam máquinas como tratores e colheitadeiras." },
    { tipo: "ab", p: "Cite duas coisas boas de morar no campo.", r: "Por exemplo: ar mais puro, contato com a natureza, silêncio, alimentos plantados em casa, mais espaço." },
    { tipo: "ab", p: "Cite uma dificuldade de quem mora no campo.", r: "Por exemplo: hospitais, lojas e escolas podem ficar longe; estradas de terra; falta de internet em alguns lugares." },
    { tipo: "ab", p: "Por que podemos dizer que o campo e a cidade dependem um do outro?", r: "Porque o campo produz alimentos e matérias-primas para a cidade, e a cidade produz máquinas, roupas, remédios e oferece serviços para o campo." },
    { tipo: "ab", p: "Cite dois lugares na cidade onde é possível fazer uma horta.", r: "Por exemplo: terrenos vazios (horta comunitária), escolas, quintais, varandas, vasos, telhados de prédios." },
    { tipo: "ab", p: "Cite três atividades que acontecem no campo.", r: "Por exemplo: agricultura, pecuária, extrativismo, turismo rural, artesanato, fabricação de queijos, doces e farinha." },
    { tipo: "ab", p: "Por que muitas pessoas saíram do campo e foram morar na cidade?", r: "Porque as máquinas passaram a fazer o trabalho de muitas pessoas, e elas foram para a cidade procurar emprego e melhores condições de vida (escola, saúde)." }
  ],

  povos: [
    { tipo: "mc", p: "Quem já vivia nestas terras quando os portugueses chegaram em 1500?", o: ["Os povos indígenas", "Os caiçaras", "Ninguém", "Os quilombolas"] },
    { tipo: "mc", p: "Os Pataxó vivem principalmente em qual região?", o: ["Sul da Bahia", "Amazonas", "Rio Grande do Sul", "São Paulo"] },
    { tipo: "mc", p: "Qual é a “aldeia-mãe” dos Pataxó?", o: ["Barra Velha", "Palmares", "Morro do Fortunato", "Porto Alegre"] },
    { tipo: "mc", p: "Que tintas naturais os Pataxó usam na pintura corporal?", o: ["Urucum e jenipapo", "Tinta de parede", "Caneta e lápis", "Café e chocolate"] },
    { tipo: "mc", p: "Como se chama a casa de reza dos Guarani?", o: ["Opy", "Oca de festa", "Quilombo", "Palafita"] },
    { tipo: "mc", p: "Qual alimento é muito importante para os Guarani?", o: ["Milho", "Pizza", "Trigo", "Maçã"] },
    { tipo: "mc", p: "Onde vivem os caiçaras?", o: ["No litoral (beira do mar)", "No alto das montanhas", "No meio do deserto", "Dentro das florestas da Amazônia"] },
    { tipo: "mc", p: "Qual é a principal atividade dos caiçaras?", o: ["Pesca artesanal", "Criação de gado", "Trabalho em fábricas", "Mineração"] },
    { tipo: "mc", p: "O que é o fandango caiçara?", o: ["Uma festa com música e dança", "Um tipo de barco", "Uma comida", "Uma casa"] },
    { tipo: "mc", p: "Onde moram os ribeirinhos?", o: ["Às margens dos rios", "No litoral", "Em prédios na cidade", "No deserto"] },
    { tipo: "mc", p: "Como são chamadas as casas construídas sobre estacas, para a água do rio não entrar?", o: ["Palafitas", "Ocas", "Casarões", "Apartamentos"] },
    { tipo: "mc", p: "Os quilombos eram formados por:", o: ["Pessoas escravizadas que fugiram em busca de liberdade", "Portugueses ricos", "Turistas", "Pescadores do litoral"] },
    { tipo: "mc", p: "Quem foi o líder do Quilombo dos Palmares?", o: ["Zumbi", "Pedro Álvares Cabral", "Tiradentes", "Dom Pedro I"] },
    { tipo: "mc", p: "A comunidade quilombola Morro do Fortunato fica em qual estado?", o: ["Santa Catarina", "Bahia", "Amazonas", "Ceará"] },
    { tipo: "mc", p: "Os seringueiros retiram da seringueira o:", o: ["Látex, usado para fazer borracha", "Açaí", "Milho", "Peixe"] },
    { tipo: "ab", p: "O que são comunidades tradicionais? Dê dois exemplos.", r: "São grupos que vivem de um jeito próprio, ligado à natureza e às tradições dos antepassados. Exemplos: indígenas, quilombolas, caiçaras, ribeirinhos." },
    { tipo: "ab", p: "O que aconteceu com muitos indígenas depois da chegada dos portugueses?", r: "Muitos morreram por causa de guerras, doenças trazidas pelos europeus e trabalho forçado, e muitos perderam suas terras. Mesmo assim, resistiram até hoje." },
    { tipo: "ab", p: "Por que os ribeirinhos usam tanto o barco?", r: "Porque eles moram na beira dos rios e o rio é o principal caminho: vão de barco ou canoa para a escola, para pescar e para visitar outros lugares." },
    { tipo: "ab", p: "O que significa ser quilombola hoje?", r: "Ser descendente de africanos escravizados que formaram quilombos, viver em comunidade e preservar a cultura, as festas e a memória dos antepassados." },
    { tipo: "ab", p: "Cite duas palavras da nossa língua que vieram das línguas indígenas.", r: "Por exemplo: mandioca, pipoca, capivara, jabuticaba, abacaxi, tatu, peteca." }
  ],

  ruas: [
    { tipo: "mc", p: "O que forma um endereço?", o: ["Nome da rua, número, bairro e cidade", "Só a cor da casa", "O nome do dono da casa", "A marca do carro"] },
    { tipo: "mc", p: "Lugares fáceis de reconhecer, como uma igreja ou padaria, são chamados de:", o: ["Pontos de referência", "Legendas", "Endereços", "Calçadas"] },
    { tipo: "mc", p: "Uma rua com muitas lojas é chamada de rua:", o: ["Comercial", "Residencial", "Rural", "Particular"] },
    { tipo: "mc", p: "A “Rua Sete de Setembro” homenageia:", o: ["Uma data histórica", "Uma fruta", "Um animal", "Um time de futebol"] },
    { tipo: "mc", p: "Antigamente, o que passava pelas ruas no lugar dos carros?", o: ["Carroças, cavalos e bondes", "Metrôs", "Aviões", "Drones"] },
    { tipo: "mc", p: "Uma pintura antiga de uma rua pode servir como:", o: ["Fonte histórica", "Mapa do tesouro", "Placa de trânsito", "Endereço"] },
    { tipo: "mc", p: "Qual pintor francês pintou cenas das ruas do Rio de Janeiro há mais de 200 anos?", o: ["Debret", "Zumbi", "Tiradentes", "Cabral"] },
    { tipo: "mc", p: "A arte feita nas paredes das ruas com tinta spray, com autorização, é o:", o: ["Grafite", "Fandango", "Mapa", "Bonde"] },
    { tipo: "mc", p: "Por que dizemos que a rua é um espaço público?", o: ["Porque pertence a todas as pessoas", "Porque é de uma só família", "Porque só os carros podem usar", "Porque é do prefeito"] },
    { tipo: "mc", p: "Onde o pedestre deve atravessar a rua?", o: ["Na faixa de pedestres", "No meio dos carros", "Correndo em qualquer lugar", "Na ciclovia"] },
    { tipo: "mc", p: "O piso tátil ajuda principalmente:", o: ["Pessoas cegas", "Motoristas de ônibus", "Ciclistas", "Aviões"] },
    { tipo: "mc", p: "Qual caminho é usado pelos trens?", o: ["Ferrovia", "Ciclovia", "Trilha", "Rio"] },
    { tipo: "mc", p: "No mapa, a parte que explica o que cada símbolo significa é a:", o: ["Legenda", "Calçada", "Rodovia", "Placa"] },
    { tipo: "mc", p: "O caminho indígena muito antigo que atravessava a mata se chamava:", o: ["Peabiru", "Palmares", "Barra Velha", "Opy"] },
    { tipo: "ab", p: "Cite quatro coisas que podemos ver quando caminhamos pela rua.", r: "Por exemplo: casas, prédios, lojas, praças, árvores, postes, calçadas, placas, semáforos, pessoas, carros." },
    { tipo: "ab", p: "Como os nomes das ruas podem contar histórias?", r: "Muitos nomes homenageiam pessoas importantes (ex.: Rua Tiradentes), datas históricas (Rua Sete de Setembro) ou lugares e acontecimentos do passado." },
    { tipo: "ab", p: "Cite duas atitudes para cuidar da rua.", r: "Por exemplo: não jogar lixo no chão, não pichar, cuidar das árvores e praças, respeitar a faixa e o semáforo, não estacionar na calçada." },
    { tipo: "ab", p: "O que é acessibilidade na rua? Dê um exemplo.", r: "É fazer a rua ser usada por todas as pessoas, inclusive pessoas com deficiência. Exemplos: rampas para cadeirantes, piso tátil para pessoas cegas, calçadas sem buracos." },
    { tipo: "ab", p: "Além das ruas, cite dois outros tipos de caminho.", r: "Por exemplo: estradas/rodovias, ferrovias, rios, mares, caminhos aéreos, trilhas, ciclovias." },
    { tipo: "ab", p: "Explique para um amigo como ir da sua casa até a escola usando direções e pontos de referência.", r: "Resposta pessoal. Deve usar palavras como “siga em frente”, “vire à direita/esquerda” e citar pontos de referência (padaria, praça, igreja...)." }
  ],

  tecnologia: [
    { tipo: "mc", p: "O que é tecnologia?", o: ["Conhecimentos, técnicas e objetos criados para resolver problemas e facilitar a vida", "Somente celulares e computadores", "Apenas coisas que usam bateria", "Algo que só existe hoje em dia"] },
    { tipo: "mc", p: "Qual destas é uma tecnologia MUITO antiga?", o: ["A roda", "O smartphone", "O drone", "A internet"] },
    { tipo: "mc", p: "Qual máquina substituiu o arado puxado por bois?", o: ["O trator", "O elevador", "O metrô", "O computador"] },
    { tipo: "mc", p: "O que aconteceu com a produção de alimentos com as máquinas no campo?", o: ["Aumentou", "Diminuiu muito", "Parou", "Ficou igual"] },
    { tipo: "mc", p: "Como as ruas eram iluminadas antigamente?", o: ["Com lampiões", "Com lâmpadas de LED", "Com celulares", "Não eram iluminadas por nada nunca"] },
    { tipo: "mc", p: "Qual invenção permitiu construir prédios muito altos?", o: ["O elevador", "A carroça", "O lampião", "O rádio"] },
    { tipo: "mc", p: "Qual a ordem certa da comunicação, do mais antigo ao mais novo?", o: ["Carta → telefone fixo → celular → smartphone", "Smartphone → carta → celular", "Celular → carta → telefone fixo", "Telefone fixo → smartphone → carta"] },
    { tipo: "mc", p: "O que veio antes do computador para escrever textos?", o: ["A máquina de escrever", "O tablet", "O smartphone", "O drone"] },
    { tipo: "mc", p: "Qual destas profissões quase desapareceu por causa da tecnologia?", o: ["Acendedor de lampião", "Programador", "Técnico de informática", "Operador de drone"] },
    { tipo: "mc", p: "Qual destas profissões SURGIU com a tecnologia?", o: ["Programador", "Acendedor de lampião", "Telefonista", "Datilógrafo"] },
    { tipo: "mc", p: "Quando algumas pessoas têm internet e outras não, isso é um exemplo de:", o: ["Desigualdade", "Agricultura", "Acessibilidade", "Pecuária"] },
    { tipo: "mc", p: "Levar computadores e internet para todas as pessoas se chama:", o: ["Inclusão digital", "Êxodo rural", "Extrativismo", "Comércio"] },
    { tipo: "mc", p: "Qual problema a tecnologia também trouxe para as cidades?", o: ["Poluição e trânsito", "Falta de prédios", "Ruas de terra", "Fim da energia elétrica"] },
    { tipo: "ab", p: "Escreva com suas palavras o que é tecnologia e dê dois exemplos.", r: "Tecnologia são conhecimentos, técnicas e objetos criados pelas pessoas para resolver problemas e facilitar a vida. Exemplos: roda, lápis, geladeira, celular, computador, trator." },
    { tipo: "ab", p: "Cite duas mudanças que a tecnologia trouxe para o campo.", r: "Por exemplo: tratores e colheitadeiras, irrigação, sementes melhoradas, drones e GPS; produção maior e mais rápida." },
    { tipo: "ab", p: "Por que muitos trabalhadores do campo perderam o emprego com a chegada das máquinas?", r: "Porque uma máquina faz o trabalho de muitas pessoas, então foram necessários menos trabalhadores. Muitos foram para as cidades." },
    { tipo: "ab", p: "Cite duas transformações que a tecnologia trouxe para as cidades.", r: "Por exemplo: iluminação elétrica, ônibus e metrô, elevadores e prédios altos, semáforos, água encanada, esgoto, câmeras." },
    { tipo: "ab", p: "Escolha um objeto antigo e diga qual objeto moderno faz a mesma função hoje.", r: "Por exemplo: carta → mensagem no celular; lampião → lâmpada; máquina de escrever → computador; fogão a lenha → fogão a gás; arado com bois → trator." },
    { tipo: "ab", p: "Por que algumas pessoas não têm acesso à tecnologia?", r: "Porque são caras, porque a internet não chega em alguns lugares (campo, bairros distantes) ou porque algumas escolas não têm computadores. Isso é desigualdade." },
    { tipo: "ab", p: "Dê um exemplo de como a tecnologia pode ajudar pessoas com deficiência.", r: "Por exemplo: leitores de tela para pessoas cegas, aparelhos auditivos, cadeiras de rodas motorizadas, legendas em vídeos." }
  ]
};
