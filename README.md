# thiago.dev

Portfólio de Thiago Santos, Arquiteto Salesforce. Vite + React + TypeScript, publicado no GitHub Pages em https://teightx.github.io/thiago.dev/.

## Rodar localmente

```bash
npm install
npm run dev
```

## Publicar

1. Substitua o conteúdo do repositório `teightx/thiago.dev` por esta pasta (apague os arquivos antigos do Next.js, inclusive `.github/workflows/nextjs.yml`).
2. Em **Settings › Pages**, deixe **Source = GitHub Actions**.
3. `git add -A && git commit -m "Novo portfólio" && git push`. O workflow `.github/workflows/deploy.yml` faz o build e publica sozinho.

## Onde editar

- Todo o texto, em português e inglês: `src/content.ts`.
- Pendências marcadas com colchetes em `src/content.ts`: como você usa IA no dia a dia, as métricas do case e o link do post da Anarte (`LINKS.anartePost`).
- Currículo em PDF: `public/cv.pdf`.
- Imagens: `src/assets/`.
