const { createBdd } = require('playwright-bdd');
const { Before } = createBdd();

// ------------------------
// PAGE OBJECTS EXISTENTES
// ------------------------
const SubscriptionPage = require('../pages/SubscriptionPage');
const CartPage = require('../pages/CartPage');
const ProductsPage = require('../pages/ProductsPage');
const ProductDetailPage = require('../pages/ProductDetailsPage');

// ------------------------
// PAGE OBJECTS ORDER MANAGEMENT
// ------------------------
const HomePage = require('../pages/HomePage');
const SignupPage = require('../pages/SignupPage');
const LoginPage = require('../pages/LoginPage');
const CheckoutPage = require('../pages/CheckoutPage');
const PaymentPage = require('../pages/PaymentPage');
const OrderConfirmPage = require('../pages/OrderConfirmPage');

// ------------------------
// UTILIDADES
// ------------------------
const { randomEmail } = require('../../utils/dataGenerator');

// ------------------------
// VARIABLES GLOBALES
// ------------------------
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
// 🔥 HOOK GLOBAL – SE EJECUTA ANTES DE CADA ESCENARIO
// ====================================================
Before(async ({ page }) => {

  // 🔥🔥🔥 BLOQUEAR TODA LA PUBLICIDAD ANTES DE CARGAR LA PÁGINA 🔥🔥🔥
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

    // Ejecutar inmediatamente
    removeAds();

    // Observador para eliminar ads que aparezcan después
    const observer = new MutationObserver(removeAds);
    observer.observe(document, { childList: true, subtree: true });
  });

  // 🔹 Iniciar en la Home ya sin ads
  await page.goto("https://automationexercise.com", { waitUntil: "networkidle" });

  // 🔹 Logout si está activo
  const logout = page.locator('a:has-text("Logout")');
  if (await logout.isVisible().catch(() => false)) {
    await logout.click();
    await page.waitForLoadState("networkidle");
  }

  // -------------------------
  // Instanciar Page Objects
  // -------------------------
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

  // -------------------------
  // Datos dinámicos
  // -------------------------
  global.testEmail = randomEmail();
});
