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