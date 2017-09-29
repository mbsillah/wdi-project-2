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
const jill = new CharacterModel({name: "Jill", img:`http://wiki.shoryuken.com/images/5/5f/Umvc3_jill_face.jpg`});
const nemesis = new CharacterModel({name: "Nemesis", img:`http://wiki.shoryuken.com/images/a/a4/Umvc3_nemesis_face.jpg`});
const firebrand = newCharacterModel({name: "Firebrand", img:`http://wiki.shoryuken.com/images/8/81/Umvc3_firebrand_face.jpg`});
const striderHiryu = new CharacterModel({name: "Strider Hiryu", img:`http://wiki.shoryuken.com/images/e/e9/Umvc3_strider_face.jpg`});
const phoenixWright = new CharacterModel({name: "Phoenix Wright", img: "http://wiki.shoryuken.com/images/2/23/Umvc3_phoenixwright_face.jpg"});
const chris = new CharacterModel({name: "Chris", img: "http://wiki.shoryuken.com/images/9/9b/Umvc3_chris_face.jpg"});
const arthur = new CharacterModel({name: "Arthur", img: "http://wiki.shoryuken.com/images/c/c9/Umvc3_arthur_face.jpg"});
const frankWest = new CharacterModel({name: "Frank West", img: "http://wiki.shoryuken.com/images/e/e8/Umvc3_frankwest_face.jpg"});
const vergil = new CharacterModel({name: "Vergil", img: "http://wiki.shoryuken.com/images/4/48/Umvc3_vergil_face.jpg"});
const wesker = new CharacterModel({name: "Wesker", img: "http://wiki.shoryuken.com/images/0/0e/Umvc3_wesker_face.jpg"});
const zero = new CharacterModel({name: "Zero", img: "http://wiki.shoryuken.com/images/8/8b/Umvc3_zero_face.jpg"});
const ryu = new CharacterModel({name: "Ryu", img: "http://wiki.shoryuken.com/images/4/49/Umvc3_ryu_face.jpg"});
const dante = new CharacterModel({name: "Dante", img: "http://wiki.shoryuken.com/images/8/85/Umvc3_dante_face.jpg"});
const morrigan = new CharacterModel({name: "Morrigan", img: "http://wiki.shoryuken.com/images/5/59/Umvc3_morrigan_face.jpg"});
const tron = new CharacterModel({name: "Tron", img: "http://wiki.shoryuken.com/images/8/8d/Umvc3_tron_face.jpg"});
const chunli = new CharacterModel({name: "Chun-Li", img: "http://wiki.shoryuken.com/images/9/92/Umvc3_chunli_face.jpg"});
const trish = new CharacterModel({name: "Trish", img: "http://wiki.shoryuken.com/images/d/d7/Umvc3_trish_face.jpg"});
const felicia = new CharacterModel({name: "Felicia", img: "http://wiki.shoryuken.com/images/4/40/Umvc3_felicia_face.jpg"});
const spencer = new CharacterModel({name: "Spencer", img: "http://wiki.shoryuken.com/images/8/87/Umvc3_spencer_face.jpg"});
const akuma = new CharacterModel({name: "Akuma", img: "http://wiki.shoryuken.com/images/b/b0/Umvc3_akuma_face.jpg"});
const viewtifulJoe = new CharacterModel({name: "Viewtiful Joe", img: "http://wiki.shoryuken.com/images/6/62/Umvc3_vjoe_face.jpg"});
const hsienko = new CharacterModel({name: "Hsien-Ko", img: "http://wiki.shoryuken.com/images/a/a1/Umvc3_hsienko_face.jpg"});
const haggar = new CharacterModel({name: "Haggar", img: "http://wiki.shoryuken.com/File:Umvc3_haggar_face.jpg"});
const cViper = new CharacterModel({name: "Crimson Viper", img: "http://wiki.shoryuken.com/images/a/a2/Umvc3_viper_face.jpg"});
const nova = new CharacterModel({name: "Nova", img: "http://wiki.shoryuken.com/images/0/06/Umvc3_nova_face.jpg"});
const ghostRider = new CharacterModel({name: "Ghost Rider", img: "http://wiki.shoryuken.com/images/9/94/Umvc3_ghostrider_face.jpg"});
const hawkeye = new CharacterModel({name: "Hawkeye", img: "http://wiki.shoryuken.com/images/0/03/Umvc3_hawkeye_face.jpg"});
const doctorStrange = new CharacterModel({name: "Doctor Strange", img: "http://wiki.shoryuken.com/images/d/df/Umvc3_doctorstrange_face.jpg"});
const ironFist = new CharacterModel({name: "Iron Fist", img: "http://wiki.shoryuken.com/images/9/9a/Umvc3_ironfist_face.jpg"});
const rocketRaccoon = new CharacterModel({name: "Rocket Raccoon", img: "http://wiki.shoryuken.com/images/e/e8/Umvc3_rocketraccoon_face.jpg"});
const captainAmerica = new CharacterModel({name: "Captain America", img: "http://wiki.shoryuken.com/images/b/bc/Umvc3_captamerica_face.jpg"});
const dormammu = new CharacterModel({name: "Dormammu", img: "http://wiki.shoryuken.com/images/c/c9/Umvc3_dormammu_face.jpg"});
const deadpool = new CharacterModel({name: "Deadpool", img: "http://wiki.shoryuken.com/images/a/ab/Umvc3_deadpool_face.jpg"});
const wolverine = new CharacterModel({name: "Wolverine", img: "http://wiki.shoryuken.com/images/7/7d/Umvc3_wolverine_face.jpg"});
const ironMan = new CharacterModel({name: "Iron Man", img: "http://wiki.shoryuken.com/images/c/c4/Umvc3_ironman_face.jpg"});
const x23 = new CharacterModel({name: "X-23", img: "http://wiki.shoryuken.com/images/c/cb/Umvc3_x23_face.jpg"});
const storm = new CharacterModel({name: "Storm", img: "http://wiki.shoryuken.com/images/3/30/Umvc3_storm_face.jpg"});
const thor = new CharacterModel({name: "Thor", img: "http://wiki.shoryuken.com/images/4/4b/Umvc3_thor_face.jpg"});
const modok = new CharacterModel({name: "M.O.D.O.K.", img: "http://wiki.shoryuken.com/images/7/7c/Umvc3_modok_face.jpg"});
const spiderMan = new CharacterModel({name: "Spider-Man", img: "http://wiki.shoryuken.com/images/8/84/Umvc3_spiderman_face.jpg"});
const sentinel = new CharacterModel({name: "Sentinel", img: "http://wiki.shoryuken.com/images/9/90/Umvc3_sentinel_face.jpg"});
const hulk = new CharacterModel({name: "Hulk", img: "http://wiki.shoryuken.com/images/f/fa/Umvc3_hulk_face.jpg"});
const superSkrull = new CharacterModel({name: "Super-Skrull", img: "http://wiki.shoryuken.com/images/e/e4/Umvc3_superskrull_face.jpg"});
const phoenix = new CharacterModel({name: "Phoenix", img: "http://wiki.shoryuken.com/images/a/a7/Umvc3_phoenix_face.jpg"});
const sheHulk = new CharacterModel({name: "She-Hulk", img: "http://wiki.shoryuken.com/images/4/4b/Umvc3_shehulk_face.jpg"});
const taskmaster = new CharacterModel({name: "Taskmaster", img: "http://wiki.shoryuken.com/images/e/e4/Umvc3_taskmaster_face.jpg"});



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

