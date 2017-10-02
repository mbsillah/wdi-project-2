require('dotenv').config();

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);
//mongoose.connect("mongodb://heroku_1ddt7tjx:jj97anojlueslaidfjj7vmrhgl@ds155644.mlab.com:55644/heroku_1ddt7tjx")

const db = mongoose.connection;

const characters = require('../db/characters.js');

db.on('error', (error) => {
    console.log(error)
});

db.once('open', () => {
    console.log('Connected to MongoDB')
});

const Schema = require("./schema.js");

const PlayerModel = Schema.PlayerModel;
const CharacterModel = Schema.CharacterModel;

PlayerModel.remove({}, (err) => {
    console.log(err);
});

CharacterModel.remove({}, (err) => {
    console.log(err);
})

const musa = new PlayerModel({ firstName: "Musa", lastName: "Sillah", gamertag: `Macktastic`, img: `https://i.imgur.com/Tf2Z9dj.jpg`, twitter: "twitter.com/MusaFGC" })

musa.characters = characters.filter((character) => {
    return (character.name === "Magneto" || character.name === "Doctor Doom" || character.name === "Amaterasu")
})
musa.save()
    .then((player) => {
        console.log(`Musa saved!`)
    })
    .catch((error) => {
        console.log(error)
    })

characters.forEach((character) => {
        
            character.save()
            .then((character) => {
                console.log(`${character.name} saved!`)
            })
            .catch((error) => {
                console.log(error)
            })
        })        

db.close();

