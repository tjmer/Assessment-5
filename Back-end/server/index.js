const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.


app.get("/api/people", (req, res) => {
let characters = ["luke", "Han", "Darth Vador"]

let randomIndex = Math.floor(Math.random() * characters.length);
let randomCharacter = characters[randomIndex];

res.status(200).send(randomCharacter)
});


app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req, res) => {
  const fortunes = ["A fresh start will put you on your way.", "A lifetime friend shall soon be made.", "A person full of words not deeds is like a garden full of weeds.",
"It takes courage to admit fault.", "Observe all men, but most of all yourself.", "success is a journey, not a destination.",
"The small courtesies sweeten life, the greater ennoble it.", "The weather is wonderful", "You are busy, but you are happy.", 
"You look pretty.", "You never know who you touch.", "Your talents will be recognized and suitalbly rewarded."];

let randomIndex = Math.floor(Math.random() * fortunes.length);
let randomFortune = fortunes[randomIndex];

res.status(200).send(randomFortune)
});



app.listen(4000, () => console.log("Server running on 4000"));
