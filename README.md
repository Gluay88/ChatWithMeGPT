"ChatWithMe" 💬👽💋
It's a Chat Application using OpenAI ChatGPT

`npm run dev`

https://platform.openai.com/account/api-keys

- .env get API_KEY (paste the api key in there)
- npm init -y (generate package.json)
- npm i dotenv openai (load .env file - and api we work with)
- in package.json change how we start the app..

```
"scripts": {
    "dev": "node script.js"
  }
```

- in package.json

```
 "name": "chatwithme",
  "version": "1.0.0",
  "description": "",
  "type":"module",
  "main": "index.js",
```

```
console.log(process.env.API_KEY);
```

- console.log(response) after .then

```
data: {
    id: 'chatcmpl-6wibWhHUi4pAAQLbKSbzNYNNUZWT5',
    object: 'chat.completion',
    created: 1679452502,
    model: 'gpt-3.5-turbo-0301',
    usage: { prompt_tokens: 15, completion_tokens: 12, total_tokens: 27 },
    choices: [ [Object] ]
  }
```

You will get choices: [ [Object] ]

```
console.log(response.data.choices)
```

```
{
    message: {
      role: 'assistant',
      content: "Hello there! As an AI language model, I'm happy to chat with you. How can I assist you today?"
    },
    finish_reason: 'stop',
    index: 0
  }

```

```
console.log(response.data.choices[0].message.content)
```

The response is pretty funny

```
As an AI language model, I do not have emotions. However, I'm programmed to help you with any questions or conversations you have on your mind. How can I assist you today?
```
