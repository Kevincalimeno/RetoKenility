📘 Proyecto de Automatización – Playwright + POM + BDD

Este proyecto contiene automatización end-to-end del sitio AutomationExercise, utilizando:

Playwright

Page Object Model (POM)

Cucumber (Gherkin) con bddgen

JavaScript / TypeScript

El enfoque está pensado para ser claro, mantenible y fácil de escalar.

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
    *.steps.js
  /pages
    HomePage.js
    ProductsPage.js
    CartPage.js
    CheckoutPage.js
    CategoriesPage.js
    BrandsPage.js
    ReviewsPage.js
    RecommendedPage.js
    SubscriptionPage.js
/playwright.config.ts
/package.json
/README.md

🧪 Mapeo de Features a Casos de Prueba
Feature	Casos
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

▶️ Ejecución del Proyecto
🔹 Ejecutar todos los tests
npx playwright test

🔹 Generar los steps automáticamente (bddgen)
npx bddgen

🔹 Ejecutar un archivo .feature específico con cucumber-js
npx cucumber-js tests/features/products.feature

🔹 Modo Interactivo (UI Test Runner)
npx playwright test --ui

🔹 Ejecutar tests individuales usando tags
npx playwright test --grep "@TAG" --headed

🧱 Arquitectura POM

El proyecto sigue el patrón Page Object Model, organizando el código en páginas reutilizables:

🖼️ Pages

Cada archivo representa una página del sistema y contiene:

Selectores centralizados

Acciones propias de la página

Validaciones básicas

🧪 Steps

Contienen únicamente los pasos Given/When/Then en formato Gherkin, delegando toda la lógica a las páginas.

📂 Features

Escenarios escritos en Gherkin, fáciles de leer para negocio.

Este enfoque permite:

Mantener orden y claridad

Reutilizar funciones

Evitar código duplicado

Mejorar la escalabilidad

🧪 Escenarios en Gherkin

Los escenarios siguen la sintaxis:

Given → Preparación del entorno

When → Acciones del usuario

Then → Validaciones

And → Pasos complementarios

Ejemplo básico:

Given the user is on the home page
When the user clicks "Products"
Then the products list should be visible

📊 Reportes

Ver el reporte generado por Playwright:

npx playwright show-report

💡 Buenas Prácticas Usadas en el Proyecto

Selectores limpios y reutilizables desde las Pages.

Steps sin lógica compleja, solo delegación.

Features claros y cortos.

Uso de tags para ejecución segmentada.

No hardcodear datos dentro de steps (solo en utils cuando aplica).

Reutilización de funciones comunes para evitar duplicación.

📥 Soporte y Expansión

Este proyecto está preparado para seguir creciendo:

Nuevas páginas y flujos

Más features en Gherkin

Integración con pipelines CI/CD

Reportes avanzados