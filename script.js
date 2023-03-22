// get api key config from .env
import { config } from "dotenv";
config();
// import from openai
import { Configuration, OpenAIApi } from "openai";
// import readline that is built in to node.js
import readline from "readline";

// set up the user interface here...
// input and output
const userCreateInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// use can type stuff in there... prompt() and setup the listener on line when the user hits the enter..
// use async to wait untill the promise to finish before showing a result.. in this case openai.createChatCompletion is a promise
userCreateInterface.prompt();
userCreateInterface.on("line", async (input) => {
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: input }],
  });
  console.log(response.data.choices[0].message.content);
  // show the prompt back after hit enter to the user
  userCreateInterface.prompt();
});

const openai = new OpenAIApi(
  new Configuration({
    apiKey: process.env.API_KEY,
  })
);
// create a chat
// version 3.5
// create messages - role - user (messages from user) and content " " (whatever users type in here..)
// it's a promise that comes with the result .then
// console.log(process.env.API_KEY);
