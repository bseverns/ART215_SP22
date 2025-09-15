# Lesson 03 · DOM Interactions Without the Drama

## Why this matters
JavaScript gets loud fast. This lesson focuses on small, meaningful DOM interactions: toggling a modal, filtering content, and making sure it all remains accessible. Students practice event listeners, state, and progressive enhancement.

## Learning objectives
- Wire up event listeners using `addEventListener` and named handler functions.
- Manipulate classes and ARIA attributes to reflect UI state changes.
- Iterate over a list of elements to filter content based on user input.

## Session flow (55 min)
1. **Showcase (5 min):** Trigger the modal + filter in the finished demo. Ask students to narrate what they observe.
2. **HTML/ARIA tour (10 min):** Highlight the baseline markup and why the page works even without JavaScript.
3. **JS pair-programming (25 min):** Build the interactions step by step following `script.js` comments.
4. **Debug jam (10 min):** Introduce a bug (e.g., wrong selector) and have teams fix it together.
5. **Wrap-up (5 min):** Summarize the event flow and emphasize cleanup (removing listeners if needed).

## Vocabulary spotlight
- **Progressive enhancement**
- **ARIA expanded / hidden**
- **NodeList vs. Array**
- **State toggle**

## Stretch moves
- Animate the modal entrance with CSS transitions tied to `.is-open`.
- Swap the filter logic to search by dataset tags instead of text content.
- Add keyboard shortcuts for opening/closing the modal.

## Safety nets
- All state changes rely on toggling the `.is-open` class. Resetting the class list fixes most issues.
- The modal button includes `data-modal-target` for easy reference if selectors go sideways.
- Comments in `script.js` outline the order of operations for each interaction.

## Files in this lesson
- `index.html` — accessible baseline markup with enhancements layered on.
- `styles.css` — focus on clarity, not glitter, but includes CSS variables ready for theming.
- `script.js` — fully commented, with optional challenges flagged in the file.

This is a perfect setup for code-along or lab-day pacing. Remix the content theme and keep the interaction scaffolding.
