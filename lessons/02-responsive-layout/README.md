# Lesson 02 · Responsive Layout Remix

## Why this matters
Students need to see how a single HTML document can flex from phone to widescreen without breaking. This lesson shows off mobile-first CSS with Flexbox and Grid so they build layouts that respect any viewport.

## Learning objectives
- Interpret wireframes for small, medium, and large breakpoints.
- Use modern CSS layout tools (Flexbox and Grid) to rearrange content responsively.
- Apply custom properties to keep spacing and color tokens consistent.

## Session flow (50 min)
1. **Warm-up critique (5 min):** Show a site that collapses poorly on mobile. Ask students to identify the pain points.
2. **Code walk (15 min):** Step through the mobile-first CSS in `styles.css` and inspect the live results.
3. **Breakpoint challenge (20 min):** Students implement one additional breakpoint using the provided comments as guides.
4. **Reflection (10 min):** Discuss how the layout scales and how design decisions shifted per breakpoint.

## Vocabulary spotlight
- **Flex container / item**
- **Grid template areas**
- **Breakpoint**
- **Intrinsic sizing**

## Stretch moves
- Swap the color theme via CSS custom properties.
- Add a `prefers-reduced-motion` media query to tame animations.
- Replace one image card with a `<figure>` + `<figcaption>` combination.

## Safety nets
- Students can fall back to the `one-column` utility class if they get lost.
- Encourage using browser DevTools device toolbar to visualize breakpoints.
- Remind them to save often and refresh — caching bites everyone eventually.

## Files in this lesson
- `index.html` — mobile-first markup with labeled regions.
- `styles.css` — annotated CSS that layers on complexity with media queries.
- `wireframe.svg` — reference diagram for the three breakpoints (print it or project it).

Use this lesson as a blueprint for future layout labs. Copy the pattern, change the story, keep the rhythm.
