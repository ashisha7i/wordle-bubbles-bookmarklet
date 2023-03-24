# Bookmarklet to copy Wordle board as bubbles

Example:

![image](https://user-images.githubusercontent.com/896590/227412251-6afd3c2e-feef-49a8-a333-d2916808a03a.png)

Tested on:
- Chrome
- Slack (should work on clients that render `:white_circle:`, `:large_yellow_circle:` and `:large_green_circle:` correctly)
- Unauthenticated flow (should work for Authenticated users too but haven't tested it yet)

## Steps to Install

- Add a Bookmark to your browser 
- Choose any name you like (I chose `Worbbles`)
- Put the code from [bookmarklet-minified.js](script/bookmarklet.min.js) in the `URL` field (see screenshot below)

![image](https://user-images.githubusercontent.com/896590/227413300-280a4c17-261c-48b8-9d8c-32ef04b453e5.png)

Now you can click on the created bookmark(let) to execute the script and copy the current board to clipboard.

Click Away and have fun!! 🖱️

## TODOs
- [ ] Feedback on copy complete
- [ ] Check if the game is not finished
