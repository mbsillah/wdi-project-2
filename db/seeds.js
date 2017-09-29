require('dotenv').config();

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

const db = mongoose.connection;

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

const musa = new PlayerModel({ gamertag: `Macktastic`, img: `https://i.imgur.com/Tf2Z9dj.jpg` })
const rafy = new PlayerModel({ gamertag: `RafyToro`, img: `https://i.imgur.com/Tf2Z9dj.jpg` })

const shumaGorath = new CharacterModel({name: "Shuma-Gorath", img:`http://wiki.shoryuken.com/images/0/0b/Umvc3_shumagorath_face.jpg` })
const magneto = new CharacterModel({ name: "Magneto", img: `http://wiki.shoryuken.com/images/0/04/Umvc3_magneto_face.jpg` });
const doctorDoom = new CharacterModel({ name: "Doctor Doom", img: `http://wiki.shoryuken.com/images/9/95/Umvc3_doctordoom_face.jpg` });
const amaterasu = new CharacterModel({ name: "Amaterasu", img: `http://wiki.shoryuken.com/images/9/9b/Umvc3_amaterasu_face.jpg` });

const players = [musa, rafy]
const characters = [magneto, doctorDoom, amaterasu]



players.forEach((player) => {
    player.characters = characters

    player.save()
        .then((player) => {
            console.log(`${player} saved!`)
        })
        .catch((error) => {
            console.log(error)
        })
})

db.close();

