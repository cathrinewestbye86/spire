# Spire IPT – ny nettside (prototype)

Nettside for Spire IPT – samvirke av godkjente Inn på tunet-gårder.

Bygget med [Astro](https://astro.build). Publiseres automatisk til GitHub Pages ved push til `main`.

**Live side:** https://cathrinewestbye86.github.io/spire/

## Kjør lokalt

```bash
npm install
npm run dev
```

Nettsiden åpnes på http://localhost:4321/spire/

## Bygg for publisering

```bash
npm run build
```

Ferdige filer havner i `dist/`.

## Struktur

- `src/pages/` – alle sider
- `src/data/content.js` – gårder, tjenester og kontaktpersoner (rediger her for innholdsendringer)
- `src/layouts/Base.astro` – felles layout med meny og bunntekst
- `src/styles/global.css` – design og farger

## Egen side (senere)

1. Bytt `site` og `base` i `astro.config.mjs` til eget domene
2. Sett opp 301-redirect fra gamle WordPress-URL-er

