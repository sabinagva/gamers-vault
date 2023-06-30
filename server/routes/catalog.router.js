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
//eq.body grabs the whole object of the data
//req.params grabs single data from the url

router.post('/', (req,res) => {
    const newPlayedGame = req.body
    console.log('newPlayedGame is', newPlayedGame)
    const sqlQuery = `INSERT INTO "catalog" ("played_game_name","image_url","description","rating","game_id","user_id")
                      VALUES($1,$2,$3,$4,$5,$6)`
    pool.query(sqlQuery,[newPlayedGame.name, newPlayedGame.cover.url, newPlayedGame.description, newPlayedGame.user_rating,newPlayedGame.id,req.user.id])
    .then(() => {
        res.sendStatus(200);
    })
    .catch(error => {
        console.log('error posting to database', error)
    })
})

//PUT
//updating 
//req.body is used when we are passing it as a data 
//req.params is when we are passing data in the url
router.put('/:id/:description/:user_rating', (req, res) => {
    const newEdit = req.params
    console.log('req.body is', req.body.description)
    console.log('req.params is', req.params);
    console.log('description is', req.params.description)
    console.log('rating is', req.params.user_rating)
    console.log('id  is', req.params.id)

    const sqlQuery = `UPDATE "catalog" SET "description" = $1, "rating" = $2 WHERE "id" = $3;`
    pool.query(sqlQuery, [newEdit.description,newEdit.user_rating, newEdit.id])
    .then(result => {
        res.sendStatus(200)
        console.log('Finished updating')
    })
    .catch(error => {
        console.log('error in updating rating and description', error)
    })
})

// //post 
// router.post('/', (req,res) => {
//     const newEdit = req.body;
//     console.log('new edit is', newEdit);
//     const sqlQuery = `INSERT INTO "catalog" ("description", "rating")
//                       VALUES ($1,$2);`;
//     pool.query(sqlQuery,[newEdit.description, newEdit.rating])
//     .then(result => {
//         res.sendStatus(201);
//     })
//     .catch(error => {
//         console.log('error posting user input to database', error)
//     })

// })

module.exports = router