const express = require('express');
const router = express.Router();

const Schema = require("../db/schema.js");
const PlayerModel = Schema.PlayerModel;

//Index Route
router.get('/', (req, res) => {
    PlayerModel.find({})
        .then((players) => {
            res.render('players/index', {
                players: players
            })
        })
        .catch((error) => {
            console.log(error)
        })
})

//New Route
router.get('/new', (req, res) => {
    res.render('players/new')
})

//Create Route
router.post('/', (req, res) => {
    const newPlayer = req.body;
    PlayerModel.create(newPlayer)
        .then(() => {
            res.redirect('/players')
        })
        .catch((error) => {
            console.log(error)
        })
})


//Edit
router.get('/:playerId/edit', (req, res) => {

    const playerId = req.params.playerId

    PlayerModel.findById(playerId)
        .then((player) => {
            res.render('players/edit', {
                player: player
            })
        })
        .catch((error) => {
            console.log(error)
        })
})

//Update
router.put('/:playerId', (req, res) => {

    const playerId = req.params.playerId
    const updatedPlayer = req.body

    PlayerModel.findByIdAndUpdate(playerId, updatedPlayer, { new: true })
        .then(() => {
            res.redirect(`/players/${playerId}`)
        })
        .catch((error) => {
            console.log(error)
        })
})


//Show Route
router.get('/:playerId', (req, res) => {

    const playerId = req.params.playerId;

    PlayerModel.findById(playerId)
        .then((player) => {
            res.render('players/profile', {
                player: player
            })
        })
        .catch((error) => {
            console.log(error)
        })
})

//Delete
router.get('/:playerId/delete', (req, res) => {

    const playerId = req.params.playerId

    PlayerModel.findByIdAndRemove(playerId)
        .then(() => {
            res.redirect('/players')
        })
        .catch((error) => {
            console.log(error)
        })
})

module.exports = router