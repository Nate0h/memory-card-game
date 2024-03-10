# Drago Ball Z Memory Card Game- [Live Demo](https://dbzmemorycardgame.netlify.app)

Built **with**:

- React
- Deployed with Netlify
- Vite

## Project Overview

This is a memory card game that uses gifs of characters from the famous Dragon Ball Z series retrieved through GIPHY API. The game consists of 8 gif cards in a round, the object of the game is to click on a unique character each round to gain a point, if a character card is clicked on twice, then the user's point total resets to zero and the game restarts. If the player clicks through all the cards with repeating a selection the player wins the game.

### Key Features

I stored the card characters in an array of card objects which holds the endpoint of the gif as well as the character names. I used React Effect hook and Promise all to fetch the data from the API and is dependent on the currScore, and used a local variable currArray to hold the gifs and names returned from Promise, and also resets after every state change. THe shuffle cards function to randomly selectes 8 cards and stores them in currArry to be mapped and display to the player.

Lastly I had a handle click function that was linked to every Card element on display which essentially checked to see if the card was previously selected, if it was then the game would reset else the player would gain a point, it also kept track of the playuers best score up to that point. And then I had a function at the top to check if the curr score equals the number of cards in the game, and if it did the function would declare that the user won the game!

### Implementation Challenges

#### 1. Card Navigation:
   - Implemented a Route in App.jsx to direct users from the main shopping page to a single item page. Each card component on the shopping page is linked to the single item page, with the Card.id used to retrieve specific item data from the API.

#### 2. Search Functionality:
   - Developed a search functionality on the main shopping page using the filter function against product titles. The search bar allows users to filter products based on their input, dynamically updating the displayed items.

### Future Enhancements

- **User Authentication:**
  - Implement user authentication to personalize the shopping experience, allowing users to track their order history and save preferences.

- **Responsive Design:**
  - Enhance the application's responsiveness for a seamless experience across various devices.

- **Product Reviews:**
  - Integrate a review system to allow users to provide feedback on purchased items, enhancing product transparency.

Feel free to explore the [live demo](https://quickkartnc.netlify.app) and experience the seamless shopping journey with Quick Kart!

