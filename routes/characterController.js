const express = require('express');
const router = express.Router({ mergeParams: true });

const Schema = require("../db/schema.js");
const PlayerModel = Schema.PlayerModel;
const CharacterModel = Schema.CharacterModel;

router.get('/new', (req, res) => {
    const playerId = req.params.playerId
    PlayerModel.findById(playerId)
        .then((player) => {
            CharacterModel.find({}).then((characters => {
                res.render('characters/new', {
                    characters: characters,
                    player: player
                })
            }))
        })
})

router.post('/', (req, res) => {
    const playerId = req.params.playerId
    const newCharacter1Id = req.body.character1
    const newCharacter2Id = req.body.character2
    const newCharacter3Id = req.body.character3

    PlayerModel.findById(playerId)
        .then((player) => {
            CharacterModel.find({}).or([
                { "_id": newCharacter1Id },
                { "_id": newCharacter2Id },
                { "_id": newCharacter3Id }])
                .then((characters) => {
                    console.log(characters)
                    player.characters = characters;
                    return player.save()
                })
                .then(() => {
                    res.redirect(`/players/${playerId}`)
                })
        })
        .catch((error) => {
            console.log(error)
        })

})


router.get('/:character1Id&:character2Id&:character3Id/edit', (req, res) => {
    const playerId = req.params.playerId
    const character1Id = req.params.character1Id
    const character2Id = req.params.character2Id
    const character3Id = req.params.character3Id

    PlayerModel.findById(playerId)

        .then((player) => {
            CharacterModel.find({}).then((characters => {
                res.render('characters/edit', {
                    characters: characters,
                    player: player
                })
            }))
        })
})

router.put('/:character1Id&:character2Id&:character3Id/', (req, res) => {
    const playerId = req.params.playerId
    const newCharacter1Id = req.body.character1
    const newCharacter2Id = req.body.character2
    const newCharacter3Id = req.body.character3

    PlayerModel.findById(playerId)
        .then((player) => {
            CharacterModel.find({}).or([
                { "_id": newCharacter1Id },
                { "_id": newCharacter2Id },
                { "_id": newCharacter3Id }])
                .then((characters) => {
                    console.log(characters)
                    player.characters = characters;
                    return player.save()
                })
                .then(() => {
                    res.redirect(`/players/${playerId}`)
                })
        })
        .catch((error) => {
            console.log(error)
        })



})

router.get('/:character1Id&:character2Id&:character3Id/delete', (req, res) => {

    const playerId = req.params.playerId
    const character1Id = req.params.character1Id
    const character2Id = req.params.character2Id
    const character3Id = req.params.character3Id

    PlayerModel.findById(playerId)
        .then((player) => {

            const character1 = player.characters.id(character1Id).remove()
            const character2 = player.characters.id(character2Id).remove()
            const character3 = player.characters.id(character3Id).remove()
            return player.save();
        })
        .then(() => {
            res.redirect(`/players/${playerId}`)
        })
        .catch((error) => {
            console.log(error)
        })
})


module.exports = router
