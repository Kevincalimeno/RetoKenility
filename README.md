📘 Proyecto de Automatización – Playwright + Screenplay + BDD

Este proyecto contiene automatización end-to-end del sitio AutomationExercise, utilizando:

Playwright

Patrón Screenplay

Cucumber (Gherkin)

TypeScript

📁 Estructura del Proyecto
/tests
  /features
    home.feature
    products.feature
    search.feature
    subscription.feature
    cart.feature
    checkout.feature
    categories.feature
    brands.feature
    reviews.feature
    recommended.feature
    scrolling.feature
  /steps
    *.steps.ts
  /screenplay
    /actors
    /tasks
    /interactions
    /questions
    /ui

/playwright.config.ts
/package.json
/README.md

🧩 Organización de Features
Feature	Test Cases
home.feature	10, 25, 26
products.feature	8, 21
search.feature	9, 20
subscription.feature	10, 11
cart.feature	12, 13, 17, 22
checkout.feature	14, 15, 16, 18, 19, 23, 24
categories.feature	18
brands.feature	19
reviews.feature	21
recommended.feature	22
scrolling.feature	25, 26
🚀 Instalación
git clone <repo-url>
cd <project-folder>
npm install
npx playwright install

▶️ Ejecución
Ejecutar todo
npm test

Ejecutar un feature específico
npx cucumber-js tests/features/products.feature

Ejecutar en modo UI
npx playwright test --ui

🧱 Arquitectura Screenplay

Actors: definen el comportamiento del usuario.

Tasks: acciones de alto nivel reutilizables.

Interactions: acciones atómicas como click, type, hover, scroll.

Questions: validaciones y consultas.

UI: selectores centralizados.

La arquitectura está diseñada para mantener el código limpio, mantenible y escalable.

🧪 Escenarios BDD

Los escenarios están escritos en Gherkin utilizando la sintaxis:

Given → contexto inicial

When → acción

Then → validación

And → pasos adicionales

Cada escenario es independiente y auto-contenido.

📊 Reportes
npx playwright show-report

💡 Buenas Prácticas

Mantener los selectores en un único archivo por vista.

Crear tasks y interactions reutilizables.

Evitar lógica en los steps: solo delegan acciones.

Mantener escenarios cortos, claros y de negocio.

Evitar data hardcodeada dentro de los steps.

📞 Soporte

Si deseas agregar más features, optimizar el Screenplay o generar documentación automática, puedes continuar expandiendo este repositorio siguiendo la misma estructura.