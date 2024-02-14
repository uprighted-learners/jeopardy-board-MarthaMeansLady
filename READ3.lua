
Pass a Question
Given a question has been chosen

When the user clicks on the "Pass Question" button

Then player 2 gets an opportunity to answer the question

And the notification area changes to player 2's turn


Answer a Question Correctly
Given a question has been chosen

When the player submits an answer

And the answer is correct

Then the game awards the player the amount of points that were on the card

And the card is blanked out

And the current player does not change

Answer a Question Incorrectly
Given a question has been chosen

When the player submits an answer

And the answer is incorrect

Then the game subtracts the point total from the player's score

And the other player gets a chance to answer the question

And if no one guesses correctly the original player gets to choose a new question

Score Board
Given the game has been started

When the score changes

Then the game should display each player's current score on the page

Only Allow One Question
Given a card has already been selected

When the player tries to pick a new card

Then the question does not change

And the game alerts the player that they must answer, or pass the question

End Round 1
Given that the score of one user reaches 15,000 points.

Or the board has been cleared

Then the game alerts the players to move on to Round 2.

And the "Round 2" button becomes enabled

And the "Round 2" button navigates to the Round 2 page.

Hint: You can use query parameters in the URL to pass score information between pages

Round 2
Given the players are on the Round 2 Page

Then the players scores are the same as they were at the end of Round 1.

And the game logic behaves as Round 1.

And the "Final Round" button is disabled

End Round 2
Given that the score of one user reaches 30,000 points.

Or the board has been cleared

Then the game alerts the players to move on to the Final Round.

And the "Final Round" button becomes enabled

And the "Final Round" button navigates to the Final Round page.

Final Round
Given the players are on the Final Round page

Then they should be presented with a category

And prompted to make a wager up to their maximum point total

Let's Make a Wager!
Given we're on the Final Round page

When all players have made a wager

Then the question is revealed

And all players get a chance to answer the question before the answer is revealed

Winning the Game
Given all players have answered the final question

When the last answer is submitted

Then the amount wagered is added or subtracted from the total score

And the game should notify the users who won based on the final score