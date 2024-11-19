// Function to open the chat
function openChat() {
    document.getElementById("chatPopup").style.display = "flex";
    document.getElementById("userInput").focus();  // Focus on input when opened
  }
  
  // Function to close the chat
  function closeChat() {
    document.getElementById("chatPopup").style.display = "none";
  }
  
  // Function to handle user message sending
  function sendMessage(event) {
    if (event.type === "keydown" && event.key !== "Enter") return; // Only respond to Enter key
    
    const inputField = document.getElementById("userInput");
    const userMessage = inputField.value.trim();
    if (userMessage === "") return;
  
    // Append user's message to the chat content
    appendMessage(userMessage, 'user');
  
    // Simulate bot response with a simple delay
    setTimeout(() => {
      const botResponse = getBotResponse(userMessage);
      appendMessage(botResponse, 'bot');
    }, 1000);
  
    // Clear the input field
    inputField.value = '';
  }
  
  // Function to append messages (either user or bot)
  function appendMessage(message, sender) {
    const chatContent = document.getElementById("chatContent");
    const messageDiv = document.createElement("div");
    messageDiv.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
    messageDiv.textContent = message;
    chatContent.appendChild(messageDiv);
    chatContent.scrollTop = chatContent.scrollHeight; // Scroll to the latest message
  }
  
  // Simple bot response logic
  function getBotResponse(userMessage) {
    const lowerMessage = userMessage.toLowerCase();
    if (lowerMessage.includes("hello")) {
      return "Hi there! How can I help you today?";
    } else if (lowerMessage.includes("help")) {
      return "Sure! What do you need help with?";
    } else {
      return "Sorry, I didn't understand that. Can you rephrase?";
    }
  }
  
