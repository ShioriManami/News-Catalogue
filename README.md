# News Catalogue

Aplicacion web de lectura de noticias construida con **Angular 20**, que demuestra el uso de **Angular Signals** para manejo reactivo del estado — sin NgRx, sin BehaviorSubject, sin backends externos.

## Demo en vivo

**[shiorimanami.github.io/News-Catalogue](https://shiorimanami.github.io/News-Catalogue/)**

---

## Caracteristicas

- Catalogo de 10 articulos organizados en 3 categorias tematicas
- Vista de detalle individual por articulo
- Filtrado por categoria con estado reactivo via Signals
- Navegacion SPA con Angular Router
- Pagina de contacto integrada
- Diseno responsive con SCSS modular

## Categorias de contenido

| Categoria | Articulos |
|---|---|
| Autos Electricos | 3 |
| E-commerce: Amazon vs Mercado Libre | 4 |
| Historia del Banano | 3 |

---

## Stack tecnico

| Tecnologia | Version |
|---|---|
| Angular | 20.0.0 |
| TypeScript | ~5.4.0 |
| RxJS | ~7.8.0 |
| SCSS | — |
| Bun | runtime + package manager |

---

## Estructura del proyecto

```
src/app/
├── components/
│   ├── nav-bar/        # Barra de navegacion
│   ├── home/           # Pagina principal
│   ├── news/           # Listado de articulos
│   ├── news-detail/    # Vista de articulo individual
│   ├── contact/        # Formulario de contacto
│   └── notas/          # Secciones estaticas por categoria
├── models/news/         # Interfaces TypeScript del modelo
└── Services/news.ts     # Servicio central con Angular Signals
```

---

## Inicio rapido

```bash
# Clonar e instalar
git clone https://github.com/ShioriManami/News-Catalogue.git
cd News-Catalogue
bun install

# Servidor de desarrollo
bun run start
# Abre http://localhost:4200
```

## Tests

```bash
bun run test
```

---

## Conceptos demostrados

- **Angular Signals** — estado reactivo moderno sin Observables
- **Computed signals** — valores derivados con cache automatico
- **Componentes standalone** — arquitectura Angular sin NgModules
- **Routing con parametros** — navegacion dinamica por id y categoria
- **Despliegue con gh-pages** — CI/CD simple con angular-cli-ghpages