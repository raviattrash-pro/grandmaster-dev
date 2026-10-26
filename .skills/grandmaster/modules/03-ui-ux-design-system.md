# Module 03: UI/UX Design System & Frontend Craftsmanship

Ensure user interfaces are visually polished, accessible, responsive, and performance-tuned.

## 1. Visual Hierarchy & Spacing Tokens
* **Consistent Scale:** Use standard 4px / 8px spacing scales (e.g., Tailwind `p-2`, `p-4`, `p-6`, `p-8`). Never hardcode random pixel values like `margin: 17px`.
* **Typography Hierarchy:** Clearly differentiate Display, Heading, Subheading, Body, and Caption. Use deliberate line heights (`leading-relaxed` or `leading-normal`) and readable font weights (400 regular, 500 medium, 600 semibold).
* **Color System:** Design with semantic CSS variables / design tokens:
  * Primary / Accent (Brand actions)
  * Secondary / Neutral (Borders, subtle backgrounds, secondary text)
  * Feedback: Success (Green), Warning (Amber), Error (Rose/Red), Info (Sky/Blue).
  * High contrast ratios (minimum 4.5:1 for normal text, 3:1 for large text).

## 2. Micro-Interactions & State Transitions
* **Every Interactive Element Has States:** Hover, Focus-visible, Active, Disabled, and Loading.
* **Loading Skeleton / Optimistic UI:** Never leave the user looking at a blank screen. Render shimmer skeletons or optimistic state updates with rollback on error.
* **Fluid Layouts:** Mobile-first responsive design. Test across standard breakpoints (`sm: 640px`, `md: 768px`, `lg: 1024px`, `xl: 1280px`). Never allow horizontal overflow or clipped text.

## 3. Frontend Architecture Invariants
* **Zero Layout Shift (CLS):** Always specify aspect ratios or explicit dimensions for images, videos, and dynamic embeds.
* **Component Encapsulation:** Follow the single-responsibility principle. Break monolithic 500-line components into composable, reusable primitives.
* **Accessibility (WCAG AA):**
  * Include proper `aria-label`, `role`, and `alt` attributes where semantic HTML elements are insufficient.
  * Ensure full keyboard navigation support (`tabIndex`, `Enter`, `Escape` to close modals, `Space` to toggle).
