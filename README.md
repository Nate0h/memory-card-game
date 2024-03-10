# Dragon Ball Z Memory Card Game - [Live Demo](https://dbzmemorycardgame.netlify.app/)

Built **with**:

- React
- Deployed with Netlify
- Vite

## Project Overview

Embark on an exciting memory challenge with the Dragon Ball Z Memory Card Game. Utilizing GIFs of iconic characters from the legendary Dragon Ball Z series obtained through the GIPHY API, this game offers an engaging experience where players aim to match unique characters and earn points. Be strategic, as clicking on the same character twice resets your score and restarts the game. Successfully navigate through all the cards without repeating a selection to emerge victorious.

### Key Features

1. **Dynamic Card Rendering:**
   - Stored character data in an array of card objects, each containing the GIF endpoint and character name. Leveraged React's Effect hook and Promise.all to fetch data from the GIPHY API dynamically.

2. **Randomized Card Selection:**
   - Implemented a shuffle cards function using local variables and the `selected` array to ensure randomness in selecting 8 cards for each round. This ensures at least one card has not been previously selected.

3. **Score Tracking:**
   - Incorporated a handle click function linked to each displayed card. The function checks if a card was previously selected; if so, it resets the game, otherwise, the player gains a point. The function also tracks the player's best score and declares victory if all cards are selected without repetition.

### Implementation Challenges

The primary challenge in this project centered around perfecting the shuffle function. The complexity arose from the necessity to shuffle cards while ensuring at least one card had not been clicked before. The `selected` array kept track of previously chosen elements, and the shuffle function used the `some` function on `currArray` to ensure the inclusion of at least one unselected card. If all cards were previously selected, the program generated a new ID to replace an item in the array.

## Live Demo

[Experience the Dragon Ball Z Memory Card Game](https://dbzmemorycardgame.netlify.app/)

