function open_notice(){
    document.getElementById("Homepage").style.display="none";
    document.getElementById("noticeboard1").style.display="block";
}
function close_notice(){
    document.getElementById("Homepage").style.display="block";
    document.getElementById("noticeboard1").style.display="none";
}


const chatMessages = document.getElementById('chat-messages');
const nameInput = document.getElementById('name-input');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

function sendMessage() {
    const name = nameInput.value;
    const message = messageInput.value;
    if (name.trim() !== '' && message.trim() !== '') {
        const messageElement = document.createElement('p');
        messageElement.textContent = `${name}: ${message}`;
        chatMessages.appendChild(messageElement);
        messageInput.value = '';
    }
}

sendButton.addEventListener('click', sendMessage);
nameInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        sendMessage();
    }
});

messageInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        sendMessage();
    }
});

function open_chat(){
    document.getElementById("homepage2").style.display="none";
    document.getElementById("chat1").style.display="block";
}
function close_chat(){
    document.getElementById("homepage2").style.display="block";
    document.getElementById("chat1").style.display="none";
}
