// Function to open the chat popup
function openChat() {
    document.getElementById('chat-popup').style.display = 'block';
}

// Function to close the chat popup
function closeChat() {
    document.getElementById('chat-popup').style.display = 'none';
}

// Function to send a message
function sendMessage() {
    var userInput = document.getElementById('user-input').value;
    
    if (userInput.trim() !== "") {
        var messageContainer = document.querySelector('.messages');
        
        // User's message
        var userMessage = document.createElement('p');
        userMessage.textContent = "You: " + userInput;
        userMessage.style.backgroundColor = "";  // Light green for user message
        messageContainer.appendChild(userMessage);

        // Bot's response
        var botMessage = document.createElement('p');
        botMessage.textContent = "Chatbot: " + "I'm here to help!";
        botMessage.style.backgroundColor = "#F1F1F1";  // Grey for bot message
        messageContainer.appendChild(botMessage);
        
        // Clear the input field
        document.getElementById('user-input').value = "";
        
        // Scroll to the bottom of the messages
        messageContainer.scrollTop = messageContainer.scrollHeight;
    }
}
