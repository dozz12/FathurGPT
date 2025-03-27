async function sendMessage() {
    let userInput = document.getElementById("user-input").value;
    if (!userInput) return;

    let chatBox = document.getElementById("chat-box");
    chatBox.innerHTML += `<p><strong>Anda:</strong> ${userInput}</p>`;

    document.getElementById("user-input").value = ""; 

    let response = await fetch("http://localhost:3000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userInput })
    });

    let data = await response.json();
    chatBox.innerHTML += `<p><strong>AI:</strong> ${data.reply}</p>`;
    chatBox.scrollTop = chatBox.scrollHeight;
}
