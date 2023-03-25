javascript:(function() {
    let result = "";
    let counter = 0;
    Array.from(document.getElementsByTagName("div")).filter(e => e.className.startsWith("Tile-module_tile")).forEach(e => {
        let data_state = e.getAttribute("data-state");
        counter++;
        if (data_state == "absent"){
            result += ":white_circle:";
        } else if (data_state == "present"){
            result += ":large_yellow_circle:";
        } else if (data_state == "correct"){
            result += ":large_green_circle:";
        } 
        if (counter == 5){
            counter = 0;
            result += "\n";
        }
         
    });

    let gameData = JSON.parse(localStorage.getItem("nyt-wordle-moogle/ANON"));

    let summaryText = `Wordle ${gameData.game.dayOffset}  ${gameData.game.currentRowIndex}/6\n\n${result}`;
    
    /* Adding Custom CSS */
    let css = ".blink_me \n{ \n animation: blinker .33s linear 2; \n} \n@keyframes blinker \n{\n 50% { opacity: 0; } \n}"; 
    let head = document.head || document.getElementsByTagName("head")[0];
    let style = document.createElement("style");

    style.type = "text/css";
    style.appendChild(document.createTextNode(css));
    head.appendChild(style);

    /* Hiding the modal */
    document.querySelector("dialog[class^='Modal-module_modalOverlay']").style.visibility = "hidden";

    /* Adding Class to the Element */    
    let headerDiv = document.querySelector('div[class^="AppHeader-module_title"]');

    /* Adding 'blink_me' class to Wordle header */
    headerDiv.classList.add("blink_me");
    
    /* Removing the extra elements and classes added */
    setTimeout(() => {
        headerDiv.classList.remove("blink_me");
        head.removeChild(style);
    }, 1000);

    console.log(summaryText);

    /* Copy the result to clipboard */
    navigator.clipboard.writeText(summaryText);

})();
