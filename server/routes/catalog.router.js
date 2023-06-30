const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();
const pool = require ('../modules/pool')

//get all the played games from database 
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
    const sqlQuery = `INSERT INTO "catalog" ("played_game_name","image_url","description","rating","game_id","user_id")
                      VALUES($1,$2,$3,$4,$5,$6)`
    pool.query(sqlQuery,[newPlayedGame.name, newPlayedGame.cover.url, newPlayedGame.description, newPlayedGame.rating,newPlayedGame.id,req.user.id])
    .then(() => {
        res.sendStatus(200);
    })
    .catch(error => {
        console.log('error posting to database', error)
    })
})

//PUT
//updating 
router.put(':id', (req, res) => {
    const description = req.body
    console.log('req.body is', req.body)
    console.log('req.params.id is', req.params.id);
    const sqlQuery = `UPDATE "catalog" SET "description" = ${description}, "rating" = ${req.body} WHERE "id" = $1 `
    pool.query(sqlQuery, [req.params.id])
    .then(result => {
        res.sendStatus(200)
        console.log('Finished updating')
    })
    .catch(error => {
        console.log('error in updating rating and description', error)
    })
})

module.exports = router