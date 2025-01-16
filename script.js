document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("clickButton");
    const logDiv = document.getElementById("log");
    let lastClickTime = null;
    let clickCount = 0;

    button.addEventListener("click", () => {
        const currentTime = new Date();
        clickCount++;
        let message = "";

        if (lastClickTime) {
            const timeDiff = currentTime - lastClickTime;
            message = `Click ${clickCount}: Time since last click: ${timeDiff} ms`;
        } else {
            message = `Click ${clickCount}: This is the first click!`;
        }

        const logEntry = document.createElement("div");
        logEntry.className = "log-entry";
        logEntry.textContent = message;
        logDiv.appendChild(logEntry);

        // Scroll to the bottom of the logDiv
        logDiv.scrollTop = logDiv.scrollHeight;

        lastClickTime = currentTime;
    });
});
