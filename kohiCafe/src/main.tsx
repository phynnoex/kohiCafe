import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App.tsx";
import { ModalProvider } from "./modalContext.tsx";
import { CartProvider } from "./CartContsxt.tsx";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ModalProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ModalProvider>
  </StrictMode>
);
