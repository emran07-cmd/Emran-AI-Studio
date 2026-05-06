document.getElementById('sendBtn').addEventListener('click', function() {
    const input = document.getElementById('userInput');
    const chatWindow = document.getElementById('chatWindow');
    const model = document.getElementById('modelSelect').value;

    if (input.value.trim() !== "") {
        // User Message add karein
        const userDiv = document.createElement('div');
        userDiv.className = 'msg user';
        userDiv.textContent = input.value;
        chatWindow.appendChild(userDiv);

        // Bot Response (Simulated)
        const botDiv = document.createElement('div');
        botDiv.className = 'msg bot';
        
        if (model === 'eleven-voice') {
            botDiv.textContent = "Processing Voice Synthesis for: " + input.value;
        } else {
            botDiv.textContent = "Emran AI is thinking... (API integration pending)";
        }
        
        chatWindow.appendChild(botDiv);

        // Scroll to bottom
        chatWindow.scrollTop = chatWindow.scrollHeight;
        
        // Clear input
        input.value = "";
    }
});
