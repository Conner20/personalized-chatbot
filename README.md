# personalized-chatbot

Run
1. Open your terminal and enter the following commands
source "/myenv/bin/activate"
python3 chat.py

2. Navigate to your browser and open base.html
3. Select the chatbot button in the bottom right corner of the screen
4. Use the application!

Setup
1. Create file constants.py, this is where you will store your Open API key
    a. Navigate to https://platform.openai.com/api-keys
    b. Login / Sign Up
    c. Your profile > API keys > + Create new secret key
    d. After obtaining secret key, enter APIKEY = "{secret_key}" into constants.py, where {secret_key} is your secret key
    e. Purchasing a model is required -- I'm using text-embedding-3-small (it's cheap)
2. Create file data.txt
    a. This is where you will store your data, which is protected and private
    b. Enter whatever information you would like the chatbot to be informed about
