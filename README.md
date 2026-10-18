# Site Forttiori IT

Site institucional da **Forttiori IT**, empresa de desenvolvimento de software, outsourcing e consultoria de Porto Alegre/RS.

O projeto nasceu em Angular 7 com NgModules e foi **modernizado para Angular 22**, adotando a forma atual de escrever aplicações Angular: componentes standalone, signals, aplicação zoneless e a nova sintaxe de templates.

**[Ver o site publicado](https://cristianandrade23.github.io/site-forttiori/)**

![Angular](https://img.shields.io/badge/Angular-22-dd0031?logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-6-3178c6?logo=typescript)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952b3?logo=bootstrap)
![Vitest](https://img.shields.io/badge/testes-Vitest-6e9f18?logo=vitest)

## Destaques técnicos

| Recurso | Onde está |
| --- | --- |
| **Componentes standalone**, sem nenhum `NgModule` | todos os componentes; bootstrap com `bootstrapApplication` em [`main.ts`](src/main.ts) |
| **Signals** (`signal`, `computed`, `input`) para o estado | menu e idioma do [`Header`](src/app/layout/header/header.ts), [`SectionTitle`](src/app/shared/section-title/section-title.ts), vagas em [`PlanoCarreiraVagas`](src/app/pages/plano-carreira-vagas/plano-carreira-vagas.ts) |
| **Signal Forms** (`@angular/forms/signals`) com validação declarativa | formulário de [`ContactSection`](src/app/shared/contact-section/contact-section.ts) |
| **Zoneless + OnPush** (padrão no Angular 22), sem `zone.js` | toda a aplicação |
| **Control flow nativo** (`@if`, `@for`, `@empty`, `@let`) | todos os templates |
| **Rotas com lazy loading** (`loadComponent`) e título por página | [`app.routes.ts`](src/app/app.routes.ts) |
| **Diretiva com IntersectionObserver** para animar seções no scroll, no lugar do script jQuery | [`RevealOnScroll`](src/app/shared/reveal-on-scroll.ts) |
| **Conteúdo orientado a dados**: listas tipadas renderizadas com `@for` no lugar de HTML repetido | [`home.data.ts`](src/app/pages/home/home.data.ts) |
| **Acessibilidade**: botões reais no menu, `aria-expanded`, fecha com Esc, labels nos campos, `prefers-reduced-motion` | header e formulário |
| **Testes unitários com Vitest** e **CI/CD** com GitHub Actions publicando no GitHub Pages | [`*.spec.ts`](src/app), [`deploy.yml`](.github/workflows/deploy.yml) |

## O que mudou na migração (Angular 7 → 22)

- `AppModule` e `RouterModule.forRoot` substituídos por `bootstrapApplication` + `provideRouter` em [`app.config.ts`](src/app/app.config.ts).
- Header e footer saíram de cada página e passaram a ficar no shell da aplicação ([`app.html`](src/app/app.html)).
- As seções repetidas em três páginas ("Juntos podemos mais" e o formulário de contato) viraram componentes reutilizáveis em [`src/app/shared`](src/app/shared).
- Saíram jQuery, Popper, `ngx-bootstrap` (importado sem uso), as cópias locais do Bootstrap e os três carregamentos duplicados do Bootstrap via CDN. Agora o Bootstrap 5 vem do npm.
- Karma, Protractor e TSLint (descontinuados) substituídos por Vitest e Prettier.
- Bundle inicial com cerca de 93 kB transferidos, com as páginas e o Signal Forms em chunks lazy.

## Estrutura

```
src/app
├── app.ts / app.html        # shell: header + <router-outlet> + footer
├── app.config.ts            # providers (router, scroll, error listeners)
├── app.routes.ts            # rotas lazy com título
├── layout/                  # header e footer
├── pages/                   # home, sobre, plano-carreira-vagas
└── shared/                  # componentes e diretiva reutilizáveis
public/assets/img            # imagens estáticas
```

## Como rodar

Pré-requisito: Node.js 22 ou superior.

```bash
npm install
npm start          # http://localhost:4200
npm test           # testes unitários (Vitest)
npm run build      # build de produção em dist/
```

## Deploy

Cada push na branch `master` roda os testes, faz o build e publica no GitHub Pages pelo workflow [`deploy.yml`](.github/workflows/deploy.yml).
