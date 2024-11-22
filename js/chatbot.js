// Function to open the chat
function openChat() {
    document.getElementById("chatPopup").style.display = "flex";
    document.getElementById("userInput").focus();  // Focus on input when opened
  }
  
  // Function to close the chat
  function closeChat() {
    document.getElementById("chatPopup").style.display = "none";
  }

  // Add event listener to send button
sendButton.addEventListener("click", sendMessage);
  
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
    if (lowerMessage.includes("hello")) 
    {
      return "Hi there! How can I help you today?";
    } 
    else if (lowerMessage.includes("hi"))
      {
        return "Hi there! How can I help you today?";
      }
    else if (lowerMessage.includes("help"))
     {
      return "Sure! What do you need help with?";
    }
    else if (lowerMessage.includes("why do programmers hate nature?"))
      {
       return "Jeez! It has way too many bugs!";
     }
    else if (lowerMessage.includes("how do you comfort a javascript bug?"))
      {
         return "You console it!";
      }
      else if (lowerMessage.includes("a wise man"))
        {
           return "Haha! always changes his mind.";
        }
    else if (lowerMessage.includes("what project is he working on?"))
      {
         return "He is working on a To-Do List, using HTML, CSS and Node JS";
      }
      else if (lowerMessage.includes("can i see a sample sphiwe's work??"))
        {
           return "Sure, please go to the home page there's link to navigate to his GitHub";
        }
    else if (lowerMessage.includes("how long does it take to complete a project?"))
    {
       return "Project timelines vary depending on the scope and complexity.";
    }
    else if (lowerMessage.includes("a wise man"))
      {
         return "Haha! always changes his mind.";
      }
      else if (lowerMessage.includes("why did the chicken cross the road"))
        {
           return "Heeeeey! that is a good one. According to Sphiwe's plot twist: To expand its horizons and explore new opportunities on the other side. However in actual fact, it had to debug the code on the other side.";
        }       
    else 
    {
      return "Sorry, I didn't understand that. Can you rephrase? Or navigate to the contac us page for more assistance";
    }

  }
  
