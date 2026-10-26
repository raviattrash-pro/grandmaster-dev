# Module 09: Progressive Web Apps (PWA) & Offline Engine

Transform standard web applications into production-grade, installable, offline-first Progressive Web Applications.

## 1. Web App Manifest Standards (`manifest.json` / `manifest.webmanifest`)
* **Mandatory Properties:**
  * `name`, `short_name`, `start_url` (`/`), `display: "standalone"`, `background_color`, `theme_color`, `orientation: "any"`.
  * `icons`: High-resolution icons (192x192, 512x512) and `purpose: "any maskable"`.
  * `shortcuts`: Quick actions from the home-screen / dock menu.

## 2. Service Worker & Caching Strategies
Implement appropriate caching topologies based on resource criticality:
* **Stale-While-Revalidate (SWR):** Use for dynamic user content, articles, and frequently updated API data (serves cached copy instantly, updates cache in background).
* **Cache-First (Fallback to Network):** Use for immutable static assets (versioned JS bundles, CSS, Google Fonts, SVGs, images).
* **Network-First (Fallback to Cache):** Use for sensitive real-time data (checkout, user profile, payments).
* **Offline Fallback Page:** Every PWA must provide a dedicated `offline.html` or UI state when completely disconnected.

## 3. Install Prompts & Background Sync
* **Custom Install Trigger:** Capture the browser's `beforeinstallprompt` event and render a non-intrusive, styled banner or button rather than relying on browser defaults.
* **Background Sync & IndexedDB Queue:**
  * When mutations (e.g., forms, comments, likes) are submitted while offline, persist actions into IndexedDB.
  * Use the Service Worker `sync` event to replay queued requests automatically when network connectivity is restored.
