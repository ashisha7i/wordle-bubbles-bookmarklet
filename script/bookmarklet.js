javascript:(function() {
    let result = "";
    let counter = 0;
    
    Array.from(document.getElementsByTagName("div")).filter(e => e.className.startsWith("Tile-module_tile")).forEach(e => {
        let data_state = e.getAttribute("data-state");
        counter++;
        
        result += (data_state == "absent")?":white_circle:":(data_state == "present")?":large_yellow_circle:":(data_state == "correct")?":large_green_circle:":"";
        
        if (counter == 5){
            counter = 0;
            result += "\n";
        }
         
    });

    let gameData = JSON.parse(localStorage.getItem("nyt-wordle-moogle/ANON"));
        
    let summaryText = `Wordle ${gameData.game.dayOffset} ${gameData.game.currentRowIndex}/6\n\n${result}`;
    
    console.log(summaryText);
    
    navigator.clipboard.writeText(summaryText);
    
})();
