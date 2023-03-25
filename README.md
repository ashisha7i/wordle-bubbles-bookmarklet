# Bookmarklet to copy Wordle board as bubbles

<!-- [START BADGES] -->
<!-- Please keep comment here to allow auto update -->
[![MIT License](https://img.shields.io/github/license/ashisha7i/wordle-bubbles-bookmarklet?style=flat-rounded)](https://github.com/ashisha7i/wordle-bubbles-bookmarklet/blob/main/LICENSE)
![Language](https://img.shields.io/badge/language-JavaScript-blue.svg?style=flat-rounded)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen.svg?style=flat-rounded)](https://github.com/ashisha7i/wordle-bubbles-bookmarklet/pulls)
<!-- [END BADGES] -->

**Example:**

![image](https://user-images.githubusercontent.com/896590/227618214-656ab41b-454e-40c0-aaa0-2a9e28cd85d6.png)

**How it works?**
- Gets the game data from `localStorage`
- Iterates over the game boxes and generates the text like below:
```
Wordle 643 4/6

:white_circle::white_circle::white_circle::white_circle::large_green_circle:
:white_circle::large_green_circle::white_circle::white_circle::white_circle:
:white_circle::large_yellow_circle::large_yellow_circle::white_circle::white_circle:
:large_green_circle::large_green_circle::large_green_circle::large_green_circle::large_green_circle:
```

- Copies the text (shown above) to the clipboard using `navigator.clipBoard` API

**Tested on:**
- <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Google_Chrome_icon_%28February_2022%29.svg" height="12px"></img> Chrome
- <img src="https://tinyurl.com/4v29mss2" height="12px"></img> Slack (should also work on clients that render `:white_circle:`, `:large_yellow_circle:` and `:large_green_circle:` correctly)
- Unauthenticated flow (should work for Authenticated users too but haven't tested it yet)

## Steps to Install

- Add a Bookmark to your browser 
- Choose any name you like (I chose `Worbbles`)
- Put the code from [bookmarklet.min.js](script/bookmarklet.min.js) in the `URL` field (see screenshot below)

![image](https://user-images.githubusercontent.com/896590/227609353-9dfb312b-6502-40e8-b968-31ec970396c9.png)

Now you can click on the created bookmark(let) to execute the script and copy the current board to clipboard.

Click Away and have fun!! 🖱️

## TODOs
- [x] Feedback on copy complete
- [x] Hide stats modal if open
- [ ] Check if the game is not finished
