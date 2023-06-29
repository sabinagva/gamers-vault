const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();
const pool = require ('../modules/pool')

//get all the played games from database(catalog reducer) 
//to catalog page

router.get('/', (req,res) => {
    console.log('in catalog get');
    const sqlQuery = `SELECT * FROM "catalog";`
    pool.query(sqlQuery)
    .then((result) => {
        console.log('catalog get is a success', result);
        res.send(result.rows)
    }).catch((error) => {
        console.log('error with catalog get', error);
    })
})

//Posting (adding) to catalog table in data base

router.post('/', (req,res) => {
    const newPlayedGame = req.body
    console.log('newPlayedGame is', newPlayedGame)
    const sqlQuery = `INSERT INTO "catalog" ("played_game","image_url","description","rating")
                      VALUES($1,$2,$3,$4)`
    pool.query(sqlQuery,[newPlayedGame.name, newPlayedGame.cover.url])
    .then(() => {
        res.sendStatus(200);
    })
    .catch(error => {
        console.log('error posting to database', error)
    })
})

//PUT

module.exports = router