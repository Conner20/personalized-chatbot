# personalized-chatbot

### Run
1. Open your terminal and enter the following commands
```
source "/myenv/bin/activate"
python3 chat.py
```

2. Navigate to your browser and open base.html
3. Select the chatbot button in the bottom right corner of the screen
4. Use the application!

### Setup
1. Create file constants.py, this is where you will store your Open API key
   - [ ] Navigate to [OpenAI API Keys](https://platform.openai.com/api-keys)
   - [ ] Login / Sign Up
   - [ ] Your profile > API keys > + Create new secret key
   - [ ] After obtaining secret key, enter APIKEY = "{secret_key}" into constants.py, where {secret_key} is your secret key
   - [x] Purchasing a model is required -- I'm using text-embedding-3-small (it's cheap)
2. Create file data.txt
    - This is where you will store your data, which is protected and private
    - Enter whatever information you would like the chatbot to be informed about
