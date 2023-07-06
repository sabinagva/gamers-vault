const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();
const pool = require ('../modules/pool')


//get all the games to wishlist 
router.get('/', (req,res) => {
    console.log('in wishlist get');
    const sqlQuery = `SELECT * FROM "wishlist" WHERE user_id = $1;`
    pool.query(sqlQuery, [req.user.id])
    .then((result) =>{
        console.log('wishlist get is a success', result);
        res.send(result.rows)
    }).catch((error) => {
        console.log('error with wishlist get', error);
        res.sendStatus(500)
    })
    

})

//POSTing to wishlist table in database
router.post('/', (req, res) => {
  const newGame = req.body
  console.log('newGame is ', newGame)
  const sqlQuery = `INSERT INTO "wishlist" ("game_name", "game_id", "image_url","user_id")
                    VALUES ($1,$2,$3,$4)`
                    //this should match how api data is sent 
  pool.query(sqlQuery,[newGame.name, newGame.id, newGame.cover.url, req.user.id])
  .then(() => {
    res.sendStatus(200);
  })
  .catch(error => {
    console.log('error posting to database', error)

  })
});

//DELETE
//req.params.id is id to delete
router.delete('/:id', (req,res) => {
  const sqlQuery = `DELETE FROM "wishlist" where "id" = $1 `
  pool.query(sqlQuery, [req.params.id])
  .then(result => {
    res.sendStatus(201)
  })
  .catch(error => {
    console.log('error deleting wishlist game', error)
    res.sendStatus(418)
  })
})
module.exports = router;
