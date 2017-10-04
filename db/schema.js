const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CharacterSchema = new Schema({
    name: String,
    img: String
});


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

});



const PlayerModel = mongoose.model('Player', PlayerSchema);
const CharacterModel = mongoose.model('Character', CharacterSchema);


module.exports = {
    PlayerModel: PlayerModel,
    CharacterModel: CharacterModel
}

//const TeamSchema = new Schema({
//    characters: [CharacterSchema]
//});

 //TeamModel: TeamModel,
 
  //team: [TeamSchema] 

  //const TeamModel = mongoose.model('Team', TeamSchema);
