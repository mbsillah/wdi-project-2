const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CharacterSchema = new Schema({
    name: String,
    img: String
});

//const TeamSchema = new Schema({
//    characters: [CharacterSchema]
//});


const PlayerSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    gamertag: {
        type: String,
        required: true
    },
    img: String,
    twitterHandle: String,
    characters: [CharacterSchema]
    //team: [TeamSchema] 
});



const PlayerModel = mongoose.model('Player', PlayerSchema);
//const TeamModel = mongoose.model('Team', TeamSchema);
const CharacterModel = mongoose.model('Character', CharacterSchema);


module.exports = {
    PlayerModel: PlayerModel,
    //TeamModel: TeamModel,
    CharacterModel: CharacterModel
}