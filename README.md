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

The difficult part about this project was getting the shuffle function to work properly. The difficulty lied in the fact that the cards needed to be shuffled and include at least one card that was not clicked before. I used the selected array to keep track of all the elements that were already chosen, and then after randomly generating 8 cards to display I use the some funcation on the currArray to determine if there was at least one elements that was not in the selected array, if all there was at least one item that was not selected in the array the function would continue, however if all the cards selected were selected before then the program would generate an id that was not chosen at replace an item in the array. 

