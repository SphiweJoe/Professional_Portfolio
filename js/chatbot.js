// script.js

// Function to send user message
function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    if (userInput.trim() === "") {
        return; // Don't send empty messages
    }

    // Display user's message
    const userMessage = document.createElement("div");
    userMessage.classList.add("message", "user-message");
    userMessage.textContent = userInput;
    document.getElementById("chatbox-content").appendChild(userMessage);

    // Clear the input field
    document.getElementById("user-input").value = "";

    // Generate bot response after a delay
    setTimeout(function () {
        const botResponse = getBotResponse(userInput);
        const botMessage = document.createElement("div");
        botMessage.classList.add("message", "bot-message");
        botMessage.textContent = botResponse;
        document.getElementById("chatbox-content").appendChild(botMessage);

        // Scroll to the bottom of the chat window
        document.getElementById("chatbox-content").scrollTop = document.getElementById("chatbox-content").scrollHeight;
    }, 500); // delay for effect
}

// Function to generate custom bot responses
function getBotResponse(input) {
    const normalizedInput = input.toLowerCase().trim();

    if (normalizedInput.includes("hello")) {
        return "Hi there! How can I assist you today?";
    } else if (normalizedInput.includes("how are you")) {
        return "I'm just a bot, but I'm doing great! How about you?";
    } else if (normalizedInput.includes("name")) {
        return "I am your friendly chatbot!";
    } else if (normalizedInput.includes("bye")) {
        return "Goodbye! Have a great day!";
    } else {
        return "Sorry, I didn't quite understand that. Could you try again?";
    }
}
