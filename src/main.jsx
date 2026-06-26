import React from "react";
import ReactDOM from "react-dom/client";
import router from "./router";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import "./App.css";

// Patch absolute image paths for GitHub Pages subpath deployment
if (import.meta.env.BASE_URL !== "/") {
  const originalSrcDescriptor = Object.getOwnPropertyDescriptor(
    HTMLImageElement.prototype,
    "src"
  );

  if (originalSrcDescriptor && originalSrcDescriptor.set) {
    Object.defineProperty(HTMLImageElement.prototype, "src", {
      ...originalSrcDescriptor,
      set: function (value) {
        if (typeof value === "string") {
          const originWithImages = window.location.origin + "/images/";
          if (value.startsWith(originWithImages)) {
            value = value.replace(
              originWithImages,
              window.location.origin + import.meta.env.BASE_URL + "images/"
            );
          }
        }
        originalSrcDescriptor.set.call(this, value);
      }
    });
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// ── Splash loader dismissal ───────────────────────────────────────────────
// The splash fades out only when BOTH conditions are met:
//  1. React has committed its first frame (double-rAF)
//  2. At least SPLASH_MIN_MS have elapsed (so the animation is always visible)
const SPLASH_MIN_MS = 1500;

let reactReady = false;
let timeReady = false;

const dismissSplash = () => {
  const loader = document.getElementById("splash-loader");
  if (!loader) return;
  loader.classList.add("hidden");
  loader.addEventListener("transitionend", () => loader.remove(), {
    once: true
  });
};

const tryDismiss = () => {
  if (reactReady && timeReady) dismissSplash();
};

// Gate 1 — minimum visible time
setTimeout(() => {
  timeReady = true;
  tryDismiss();
}, SPLASH_MIN_MS);

// Gate 2 — React first paint
requestAnimationFrame(() => {
  requestAnimationFrame(() => {
    reactReady = true;
    tryDismiss();
  });
});
