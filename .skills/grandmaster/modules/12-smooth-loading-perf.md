# Module 12: Smooth Loading, Zero CLS & Page Performance

Deliver instantaneous perception of speed with zero Cumulative Layout Shift (CLS) and smooth transitions.

## 1. Zero Cumulative Layout Shift (CLS < 0.05)
* **Pre-Allocated Dimensions:** Every image, video, banner, or dynamic widget MUST specify explicit `width`, `height`, or CSS `aspect-ratio` to reserve space before content loads.
* **Font Fallbacks & Font Display:** Use `font-display: swap` combined with size-adjust fallbacks to eliminate Flash of Invisible Text (FOIT) and layout jitter when custom fonts load.

## 2. Skeleton Screens & Loading Hierarchy
* **Structural Skeletons Over Spinners:** Never render a centered spinner that obscures the entire viewport. Render content-aware shimmer skeletons matching the exact geometry of incoming cards, tables, or text blocks.
* **Progressive Streaming & React Suspense:**
  * Stream critical above-the-fold HTML immediately.
  * Wrap slow or third-party data components in `<Suspense fallback={<SkeletonWidget />}>` to avoid blocking the primary page render.

## 3. Optimistic UI Updates
* **Instant Feedback:** On mutations (liking a post, submitting a comment, toggling an item), update the UI state immediately before the network request finishes.
* **Graceful Rollback:** If the network call fails, revert the state deterministically and display an unobtrusive toast with an automatic retry action.
* **Prefetching on Hover/Intent:** Prefetch next-page JS chunks and data when user hovers over a link for > 65ms.
