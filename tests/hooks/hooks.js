const { createBdd } = require('playwright-bdd');
const { Before } = createBdd();

// Pages que ya existen en otros flujos
const SubscriptionPage = require('../pages/SubscriptionPage');
const CartPage = require('../pages/CartPage');
const ProductsPage = require('../pages/ProductsPage');
const ProductDetailPage = require('../pages/ProductDetailsPage');

// Pages usadas en el flujo de órdenes
const HomePage = require('../pages/HomePage');
const SignupPage = require('../pages/SignupPage');
const LoginPage = require('../pages/LoginPage');
const CheckoutPage = require('../pages/CheckoutPage');
const PaymentPage = require('../pages/PaymentPage');
const OrderConfirmPage = require('../pages/OrderConfirmPage');

// Utilidades
const { randomEmail } = require('../../utils/dataGenerator');

// Variables globales para reutilizar las páginas
global.subscriptionPage = undefined;
global.cartPage = undefined;
global.productsPage = undefined;
global.productDetailPage = undefined;

global.homePage = undefined;
global.signupPage = undefined;
global.loginPage = undefined;
global.checkoutPage = undefined;
global.paymentPage = undefined;
global.orderConfirmPage = undefined;

global.testEmail = undefined;
global.testPassword = "Test1234";

// ====================================================
// Hook que corre antes de cada escenario
// ====================================================
Before(async ({ page }) => {

  // Quitar anuncios apenas carga la página (esto ayuda a evitar errores por overlays)
  await page.addInitScript(() => {
    const removeAds = () => {
      const selectors = [
        'iframe',
        'ins',
        '.adsbygoogle',
        '[id^="google_ads"]',
        '[id^="aswift"]',
        '[title="Advertisement"]'
      ];
      selectors.forEach(sel => {
        document.querySelectorAll(sel).forEach(el => el.remove());
      });
    };

    // Ejecuta apenas carga
    removeAds();

    // Por si aparecen anuncios después, los eliminamos también
    const observer = new MutationObserver(removeAds);
    observer.observe(document, { childList: true, subtree: true });
  });

  // Entrar a la página principal sin anuncios
  await page.goto("https://automationexercise.com", { waitUntil: "networkidle" });

  // Si quedó alguna sesión abierta, la cierro para empezar limpio
  const logout = page.locator('a:has-text("Logout")');
  if (await logout.isVisible().catch(() => false)) {
    await logout.click();
    await page.waitForLoadState("networkidle");
  }

  // Crear instancias de todas las pages que usa el proyecto
  global.subscriptionPage = new SubscriptionPage(page);
  global.cartPage = new CartPage(page);
  global.productsPage = new ProductsPage(page);
  global.productDetailPage = new ProductDetailPage(page);

  global.homePage = new HomePage(page);
  global.signupPage = new SignupPage(page);
  global.loginPage = new LoginPage(page);
  global.checkoutPage = new CheckoutPage(page);
  global.paymentPage = new PaymentPage(page);
  global.orderConfirmPage = new OrderConfirmPage(page);

  // Genero un correo aleatorio para cada ejecución
  global.testEmail = randomEmail();
});
