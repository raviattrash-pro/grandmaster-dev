# Module 10: Adaptive & Responsive UI Architecture

Build layouts that dynamically adapt across mobile, tablet, desktop, foldables, and ultra-wide displays.

## 1. Container Queries Over Media Queries
* **Component-Level Fluidity:** Prefer CSS Container Queries (`@container`) over global viewport media queries (`@media`). A component should adapt based on the size of its parent container, making it truly modular whether placed in a sidebar or full-screen modal:
  ```css
  .card-container {
    container-type: inline-size;
  }
  @container (min-width: 400px) {
    .card { flex-direction: row; }
  }
  ```

## 2. Modern Viewport & Fluid Typography
* **Dynamic Viewport Units:** Never use `100vh` on mobile web apps due to dynamic address bar expansion. Use `100dvh` (dynamic viewport height), `100svh` (small), or `100lvh` (large).
* **Fluid Typography with `clamp()`:** Eliminate abrupt breakpoint jumps for font sizes and margins:
  ```css
  /* Fluid font scaling from 16px at 320px viewport to 24px at 1200px viewport */
  font-size: clamp(1rem, 0.8rem + 1vw, 1.5rem);
  ```

## 3. Touch Targets & Device Adaptability
* **Minimum Touch Targets:** Interactive elements must have a touch bounding box of at least **44x44 CSS pixels** on touch-enabled devices.
* **Safe Area Insets:** Support notched devices and home bars:
  ```css
  padding-bottom: env(safe-area-inset-bottom, 16px);
  padding-top: env(safe-area-inset-top, 16px);
  ```
* **Foldable & Dual-Screen Support:** Accommodate screen-spanning and dual-pane views using CSS viewport segments where applicable.
