const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();


//get all the games to wishlist 
router.get('/wishlist', (req,res) => {
    console.log('in wishlist get');
    const sqlQuery = `SELECT * FROM "wishlist`
    

})

//POSTing to wishlist
router.post('/', (req, res) => {
  const newGame = req.body
  console.log('newGame is ', newGame)
  const sqlQuery = `INSERT INTO "wishlist" ("game_name", "game_id")
                    VALUES ($1,$2)`
  pool.query(sqlQuery,[newGame.game_name, newGame.game_id])
  .then(() => {
    res.sendStatus(200);
  })
  .catch(error => {
    console.log('error posting to database', error)

  })
});

//PUT 

//DELETE