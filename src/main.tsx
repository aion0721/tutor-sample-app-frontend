import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import { Provider } from "./components/ui/provider.tsx";
import { loadConfig } from "./config";

async function bootstrap() {
  const cfg = await loadConfig();

  if (shouldEnableMSW(cfg)) {
    const { worker } = await import("./mocks/browser");
    await worker.start({
      serviceWorker: { url: "/mockServiceWorker.js" },
      onUnhandledRequest: "bypass",
    });
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);

bootstrap();

function shouldEnableMSW(cfg: { mockDefault?: boolean }) {
  if (import.meta.env?.DEV) return true;

  if (cfg?.mockDefault === true) return true;
  const u = new URL(location.href);
  if (u.searchParams.get("mock") === "1") return true;
  if (localStorage.getItem("mock") === "1") return true;
  return false;
}
