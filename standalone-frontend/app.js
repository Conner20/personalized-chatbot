class Chatbox {
    constructor() {
        this.args = {
            openButton: document.querySelector('.chatbox__button'),
            chatBox: document.querySelector('.chatbox__support'),
            sendButton: document.querySelector('.send__button')
        }

        this.state = false;
        this.messages = [];
    }

    display() {
        const {openButton, chatBox, sendButton} = this.args;

        openButton.addEventListener('click', () => this.toggleState(chatBox))

        sendButton.addEventListener('click', () => this.onSendButton(chatBox))

        const node = chatBox.querySelector('input');
        node.addEventListener("keyup", ({key}) => {
            if (key === "Enter") {
                this.onSendButton(chatBox)
            }
        })
    }

    toggleState(chatbox) {
        this.state = !this.state;

        // show or hides the box
        if(this.state) {
            chatbox.classList.add('chatbox--active')
        } else {
            chatbox.classList.remove('chatbox--active')
        }
    }

    onSendButton(chatbox) {
        var textField = chatbox.querySelector('input');
        let text1 = textField.value;
        if (text1 === "") {
            return;
        }

        // Add user input to the chat instantly
        let msg1 = { name: "User", message: text1 };
        this.messages.push(msg1);
        this.updateChatText(chatbox);
        textField.value = '';  // Clear input field

        // Show "thinking..." while waiting for response
        let thinkingMessage = { name: "Conner", message: "thinking..." };
        this.messages.push(thinkingMessage);
        this.updateChatText(chatbox);

        fetch('http://127.0.0.1:5001/predict', {
            method: 'POST',
            body: text1,
            headers: {
                'Content-Type': 'text/plain'
            },
        })
            .then(response => response.json())
            .then(data => {
                // Remove "thinking..." message
                this.messages = this.messages.filter(msg => msg.message !== "thinking...");

                // Add chatbot's response
                let msg2 = { name: "Conner", message: data.content };
                this.messages.push(msg2);
                this.updateChatText(chatbox);
            })
            .catch((error) => {
                console.error('Error:', error);

                // Remove "thinking..." and replace with error message
                this.messages = this.messages.filter(msg => msg.message !== "thinking...");
                let errorMessage = { name: "Conner", message: "Sorry, something went wrong." };
                this.messages.push(errorMessage);
                this.updateChatText(chatbox);
            });
    }


    updateChatText(chatbox) {
        var html = '';
        this.messages.slice().reverse().forEach(function(item) {
            if (item.message === "thinking...") {
                html += '<div class="messages__item messages__item--thinking">' + item.message + '</div>';
            } else if (item.name === "Conner") {
                html += '<div class="messages__item messages__item--visitor">' + item.message + '</div>';
            } else {
                html += '<div class="messages__item messages__item--operator">' + item.message + '</div>';
            }
            // if (item.name === "Conner")
            // {
                
            //     html += '<div class="messages__item messages__item--visitor">' + item.message + '</div>'
            // }
            // else
            // {
            //     html += '<div class="messages__item messages__item--operator">' + item.message + '</div>'
            // }
          });

        const chatmessage = chatbox.querySelector('.chatbox__messages');
        chatmessage.innerHTML = html;
    }
}


const chatbox = new Chatbox();
chatbox.display();