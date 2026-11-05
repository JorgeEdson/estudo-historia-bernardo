# 🦉 Aventura de Estudos do Bernardo

Site de estudo interativo de Geografia, 4ª etapa. Feito só com HTML, CSS e JavaScript, sem build e sem dependências.

## Capítulos
| Cap. | Tema |
|---|---|
| 1 | Os lugares são diferentes |
| 4 | As paisagens mudam |
| 7 | O município e seus espaços |

> A versão anterior (História, 3ª etapa: campo, povos indígenas, ruas e tecnologia) continua no histórico do Git, no commit `3c8b1e0`.

Cada capítulo tem:
- **Aprender**: lição em passos, com leitura em voz alta 🔊 e cartão "Você sabia?"
- **Vídeos**: vídeos em PT-BR do YouTube
- **Jogos**: classificar (arrastar), ligar colunas, ordenar e verdadeiro/falso. O código também tem um jogo de mapa (`tipo: "mapa"`), usado na versão de História
- **Simulado**: 20 questões (múltipla escolha + abertas), embaralhadas a cada tentativa, com versão para imprimir e gabarito

Também há um **Simulado Geral**, com 20 questões sorteadas de todos os capítulos.

## Estrutura
```
index.html
css/style.css
js/conteudo.js    ← disciplina/etapa (CONFIG), lições, vídeos e jogos (edite aqui)
js/simulados.js   ← 20 questões por capítulo (na múltipla escolha, a 1ª opção é a correta)
js/app.js         ← lógica do site
```

## Rodar localmente
Abrir o `index.html` com duplo clique funciona, mas **os vídeos do YouTube podem não tocar via `file://`**. Prefira um servidor local:

```bash
cd C:\projetos\estudo-historia-bernardo
python -m http.server 8000
# abra http://localhost:8000
```
Outra opção: a extensão **Live Server** do VS Code.

## Publicar grátis no GitHub Pages (recomendado)
1. Crie um repositório no GitHub (ex.: `estudo-historia-bernardo`). Pode ser público.
2. Na pasta do projeto:
   ```bash
   git init
   git add .
   git commit -m "Site de estudos do Bernardo"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/estudo-historia-bernardo.git
   git push -u origin main
   ```
3. No GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: `main` / `(root)` → Save**.
4. Em 1 ou 2 minutos o site fica em `https://SEU_USUARIO.github.io/estudo-historia-bernardo/`.

Outras opções gratuitas: **Netlify Drop** (arrastar a pasta em app.netlify.com/drop), **Cloudflare Pages** ou **Vercel**.

## Observações
- O progresso (estrelas, melhores notas) fica salvo no `localStorage` do navegador, separado em cada aparelho.
- Os vídeos são de canais de terceiros. Vale assistir antes. Para trocar, mude o `id` em `js/conteudo.js`. O id é o código depois de `watch?v=` no link.
- A pasta `Capitulos/` (fotos do sumário) não é usada pelo site. Se não quiser publicá-la, adicione `Capitulos/` ao `.gitignore`.
