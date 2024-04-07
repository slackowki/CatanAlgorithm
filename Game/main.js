document.addEventListener("DOMContentLoaded", function() {
    const runAdditionalJSButton = document.getElementById("runAdditionalJSButton");

    let additionalJSLoaded = false; // Flag to track if additional JS has been loaded

    runAdditionalJSButton.addEventListener("click", function() {
        if (!additionalJSLoaded) { // Check if additional JS has not been loaded yet
            // Load and execute gamelogic.js
            const testScript = document.createElement('script');
            testScript.src = 'test.js';
            document.body.appendChild(testScript);

            const gamelogicScript = document.createElement('script');
            gamelogicScript.src = 'gamelogic.js';
            document.body.appendChild(gamelogicScript);

            // Load and execute test.js

            additionalJSLoaded = true; // Update the flag
        }
    });
});
