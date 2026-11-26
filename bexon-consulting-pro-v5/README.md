# Bexon Pro — Corporate Strategy & Business Consulting (v5)

A responsive corporate consulting web application built with **React**, **GSAP ScrollTrigger (Scroll-Linked Scrubbing + Intersection/Scroll Reveals)**, **React Router DOM (`createBrowserRouter`)**, and **Tailwind CSS**.

## How to Run Locally

1. Extract `bexon-consulting-pro-v5.zip` and open the `bexon-consulting-pro-v5` folder in VS Code.
2. Run:
   ```bash
   npm install
   npm run dev
   ```

## Scroll Animations in v5
- **True Scroll-Driven Scrubbed Motion (`scrub: 1`):** Elements move smoothly *as* you scroll down and up each section (cards sliding horizontally/vertically with scroll position, parallax images, and scrubbed transforms) instead of finishing before you scroll.
- **Services Continuous Left-to-Right Slider:** Service cards slide continuously left-to-right with pause/play and manual step buttons.
- **IntersectionObserver & ScrollTrigger Reveals:** Sections reveal cleanly as they enter the viewport (`threshold` / `ScrollTrigger`), paired with continuous motion and stat counters.
