/* =========================================================
   SIMULADOS — 20 questões por capítulo
   tipo "mc" = múltipla escolha. A PRIMEIRA opção é sempre a
               correta aqui no arquivo; o site embaralha tudo.
   tipo "ab" = questão aberta. "r" é a resposta esperada,
               mostrada depois para conferir.
   ========================================================= */

window.SIMULADOS = {
  lugares: [
    { tipo: "mc", p: "Para a Geografia, o que é um lugar?", o: ["Um espaço que conhecemos e com o qual temos ligação", "Somente uma cidade muito grande", "Apenas lugares que aparecem na TV", "Só lugares onde ninguém mora"], exp: "Nossa casa, a escola, a rua e o bairro são lugares." },
    { tipo: "mc", p: "Qual destes é um exemplo de lugar do dia a dia de uma criança?", o: ["A escola", "A Lua", "O fundo do oceano", "Uma estrela"] },
    { tipo: "mc", p: "Qual destes é um elemento NATURAL?", o: ["Rio", "Ponte", "Prédio", "Escola"] },
    { tipo: "mc", p: "Qual destes é um elemento CONSTRUÍDO pelas pessoas?", o: ["Praça", "Duna", "Mar", "Morro"] },
    { tipo: "mc", p: "Quantos são os nossos sentidos?", o: ["Cinco", "Três", "Dois", "Dez"] },
    { tipo: "mc", p: "Com qual sentido percebemos os sons de um lugar?", o: ["Audição", "Olfato", "Paladar", "Tato"] },
    { tipo: "mc", p: "Com qual sentido percebemos o cheiro de pão quentinho?", o: ["Olfato", "Visão", "Audição", "Tato"] },
    { tipo: "mc", p: "Com qual sentido percebemos as formas e as cores dos prédios?", o: ["Visão", "Paladar", "Olfato", "Audição"] },
    { tipo: "mc", p: "Sentir a areia quente da praia nos pés é usar o sentido do:", o: ["Tato", "Olfato", "Paladar", "Audição"] },
    { tipo: "mc", p: "Que som é mais comum ouvir em uma cidade grande?", o: ["Buzinas e motores", "Galo cantando", "Vaca mugindo", "Silêncio total"] },
    { tipo: "mc", p: "Que som é mais comum ouvir no campo?", o: ["Passarinhos e galos", "Sirenes", "Britadeiras", "Buzinas"] },
    { tipo: "mc", p: "Barulho demais em um lugar causa:", o: ["Poluição sonora", "Chuva", "Mais flores", "Ar puro"] },
    { tipo: "mc", p: "Os lugares podem mudar com o tempo?", o: ["Sim, por exemplo quando se constrói um prédio", "Não, eles nunca mudam", "Só mudam no inverno", "Só mudam à noite"] },
    { tipo: "ab", p: "Escreva o nome de um lugar de que você gosta muito e explique por quê.", r: "Resposta pessoal. Ex.: “Gosto da praça do meu bairro porque brinco com meus amigos lá.”" },
    { tipo: "ab", p: "Cite dois elementos naturais e dois elementos construídos que existem perto da sua casa ou da sua escola.", r: "Naturais: árvores, mar, rio, plantas, morro, céu, Sol. Construídos: casas, ruas, prédios, praças, postes, escolas." },
    { tipo: "ab", p: "Quais são os cinco sentidos?", r: "Visão, audição, olfato, tato e paladar." },
    { tipo: "ab", p: "Cite um cheiro bom e um cheiro ruim que podemos sentir em uma cidade.", r: "Bom: pão quentinho, flores, comida, terra molhada. Ruim: lixo, fumaça de carros, esgoto." },
    { tipo: "ab", p: "Compare a praia e a cidade grande: escreva uma diferença entre os sons desses lugares.", r: "Na praia ouvimos as ondas do mar, o vento e as gaivotas; na cidade grande ouvimos buzinas, motores, sirenes e obras." },
    { tipo: "ab", p: "Por que podemos dizer que cada lugar é de um jeito?", r: "Porque cada lugar tem elementos naturais e construídos diferentes, pessoas diferentes, sons, cheiros, formas e jeitos de viver diferentes." },
    { tipo: "ab", p: "Como uma pessoa cega pode perceber que está perto da praia?", r: "Pelo barulho das ondas (audição), pelo cheiro da maresia (olfato) e sentindo o vento e a areia (tato)." }
  ],

  paisagens: [
    { tipo: "mc", p: "O que é paisagem?", o: ["Tudo o que conseguimos ver e perceber de um lugar", "Apenas um desenho feito na escola", "Só as plantas de uma floresta", "Somente os prédios de uma cidade"] },
    { tipo: "mc", p: "Uma floresta que quase não foi modificada pelas pessoas é uma paisagem:", o: ["Natural", "Modificada", "Urbana", "Artificial"] },
    { tipo: "mc", p: "Uma cidade com ruas, casas e prédios é uma paisagem:", o: ["Modificada (humanizada)", "Natural", "Sem nenhum elemento", "Que nunca muda"] },
    { tipo: "mc", p: "O que pode mudar uma paisagem?", o: ["A natureza e as pessoas", "Somente as pessoas", "Somente a natureza", "Nada muda uma paisagem"] },
    { tipo: "mc", p: "Por que estudamos as paisagens?", o: ["Para entender o lugar onde vivemos e cuidar dele", "Para não precisar sair de casa", "Porque elas nunca mudam", "Só para desenhar"] },
    { tipo: "mc", p: "Como se chama o movimento da Terra girando em torno de si mesma?", o: ["Rotação", "Translação", "Estação", "Previsão"] },
    { tipo: "mc", p: "Quanto tempo dura, mais ou menos, o movimento de rotação?", o: ["24 horas (um dia)", "365 dias (um ano)", "Uma semana", "Um mês"] },
    { tipo: "mc", p: "Quando é dia em um lado da Terra, o que acontece do outro lado?", o: ["É noite", "Também é dia", "Está chovendo", "É inverno"] },
    { tipo: "mc", p: "Qual destes animais costuma sair à noite?", o: ["Coruja", "Galinha", "Borboleta", "Girassol"] },
    { tipo: "mc", p: "O que é tempo atmosférico?", o: ["Como o ar está em um momento: sol, chuva, vento, calor ou frio", "A hora marcada no relógio", "O tempo que dura uma aula", "A idade das pessoas"] },
    { tipo: "mc", p: "Qual instrumento mede a temperatura?", o: ["Termômetro", "Pluviômetro", "Biruta", "Régua"] },
    { tipo: "mc", p: "Qual instrumento mede a quantidade de chuva?", o: ["Pluviômetro", "Termômetro", "Bússola", "Relógio"] },
    { tipo: "mc", p: "Quem estuda o tempo e faz a previsão do tempo?", o: ["O meteorologista", "O dentista", "O padeiro", "O carteiro"] },
    { tipo: "mc", p: "Como se chama o movimento da Terra ao redor do Sol, que dura cerca de 365 dias?", o: ["Translação", "Rotação", "Paisagem", "Erosão"] },
    { tipo: "mc", p: "Em qual estação do ano muitas árvores perdem suas folhas?", o: ["Outono", "Primavera", "Verão", "Nenhuma"] },
    { tipo: "mc", p: "No Brasil, o verão começa em qual mês?", o: ["Dezembro", "Junho", "Março", "Setembro"] },
    { tipo: "ab", p: "Escreva duas diferenças entre a paisagem de dia e a paisagem de noite.", r: "De dia há a luz do Sol, escolas e comércio abertos e mais movimento. De noite aparecem a Lua e as estrelas, as luzes elétricas são acesas, a maioria das pessoas descansa e saem os animais noturnos." },
    { tipo: "ab", p: "Como a chuva muda a paisagem de uma cidade?", r: "As ruas ficam molhadas, os rios enchem, aparecem poças, as pessoas usam guarda-chuva e capa, o céu fica cinza e nublado." },
    { tipo: "ab", p: "Qual é a diferença entre tempo atmosférico e clima?", r: "Tempo é como o ar está em um momento (agora). Clima é como o tempo costuma ser em um lugar durante muitos anos." },
    { tipo: "ab", p: "No Ceará faz calor o ano todo. Então, o que mais muda a paisagem durante o ano?", r: "A época das chuvas e a época seca. Com as chuvas (mais ou menos de fevereiro a maio), a paisagem fica verde; na seca, a caatinga perde as folhas." }
  ],

  municipio: [
    { tipo: "mc", p: "Qual é o nome do nosso país?", o: ["Brasil", "Ceará", "Fortaleza", "Nordeste"] },
    { tipo: "mc", p: "Em quantos estados o Brasil é dividido (além do Distrito Federal)?", o: ["26", "10", "50", "184"] },
    { tipo: "mc", p: "Qual é a capital do Brasil?", o: ["Brasília", "Fortaleza", "São Paulo", "Rio de Janeiro"] },
    { tipo: "mc", p: "Qual é a capital do estado do Ceará?", o: ["Fortaleza", "Brasília", "Caucaia", "Recife"] },
    { tipo: "mc", p: "Os estados são divididos em:", o: ["Municípios", "Países", "Continentes", "Planetas"] },
    { tipo: "mc", p: "Qual é a ordem certa, do MENOR para o MAIOR?", o: ["Bairro → município → estado → país", "País → estado → bairro → município", "Estado → bairro → país → município", "Município → país → bairro → estado"] },
    { tipo: "mc", p: "Quem governa o município?", o: ["O prefeito", "O presidente", "O governador", "O diretor da escola"] },
    { tipo: "mc", p: "Quem governa o estado?", o: ["O governador", "O prefeito", "O presidente", "O vereador"] },
    { tipo: "mc", p: "A linha que separa um município de outro se chama:", o: ["Limite", "Paisagem", "Estação", "Rotação"] },
    { tipo: "mc", p: "Qual destes é um limite NATURAL?", o: ["Um rio", "Uma estrada", "Uma avenida", "Um marco de concreto"] },
    { tipo: "mc", p: "Qual destes é um limite ARTIFICIAL?", o: ["Uma estrada", "Uma serra", "Um rio", "O mar"] },
    { tipo: "mc", p: "Qual rio é limite natural entre Fortaleza e Caucaia?", o: ["Rio Ceará", "Rio Amazonas", "Rio São Francisco", "Rio Nilo"] },
    { tipo: "mc", p: "A área rural também é chamada de:", o: ["Campo", "Cidade", "Centro", "Capital"] },
    { tipo: "mc", p: "Qual atividade é mais comum na área rural?", o: ["Agricultura e pecuária", "Fábricas e shoppings", "Bancos e metrôs", "Grandes lojas"] },
    { tipo: "mc", p: "Onde ficam a prefeitura e muitos hospitais, bancos e lojas?", o: ["Na área urbana", "Na área rural", "No meio do mar", "Na floresta"] },
    { tipo: "ab", p: "Complete com o seu endereço: eu moro no país ______, no estado ______ e no município ______.", r: "Brasil, Ceará e o município onde mora (ex.: Fortaleza)." },
    { tipo: "ab", p: "O que é limite natural? Dê um exemplo.", r: "É um limite formado por um elemento da natureza, como um rio, uma serra, um lago ou o mar. Ex.: o Rio Ceará, entre Fortaleza e Caucaia." },
    { tipo: "ab", p: "O que é limite artificial? Dê um exemplo.", r: "É um limite criado pelas pessoas, como uma estrada, uma rua, uma avenida, um marco ou uma linha reta no mapa." },
    { tipo: "ab", p: "Escreva duas diferenças entre a área rural e a área urbana.", r: "Na área rural há plantações, criações, casas distantes e menos pessoas. Na área urbana há muitas construções próximas, comércio, indústrias, serviços e mais pessoas." },
    { tipo: "ab", p: "Cite um problema das áreas urbanas e uma atitude para ajudar a resolvê-lo.", r: "Ex.: lixo nas ruas → jogar o lixo no lixo; trânsito → usar transporte público ou bicicleta; poluição → plantar árvores; barulho → evitar buzinar à toa." }
  ]
};
