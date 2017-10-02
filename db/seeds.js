require('dotenv').config();

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

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
//const TeamModel = Schema.TeamModel;
const CharacterModel = Schema.CharacterModel;

PlayerModel.remove({}, (err) => {
    console.log(err);
});

CharacterModel.remove({}, (err) => {
    console.log(err);
})

const musa = new PlayerModel({ firstName: "Musa", lastName: "Sillah", gamertag: `Macktastic`, img: `https://i.imgur.com/Tf2Z9dj.jpg`, twitter: "twitter.com/MusaFGC" })
//const rafytoro = new PlayerModel({firstName: "Rafael", lastName: "Toro", gamertag: `RafyToro`, img: `https://i.imgur.com/Tf2Z9dj.jpg`, twitter: "twitter.com/MusaFGC" })



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

