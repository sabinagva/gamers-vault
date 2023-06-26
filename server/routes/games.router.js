const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();

//GET for search view from api
router.get('/:id', async (req, res) => {
  const gameId = req.params.id;

  try {
    //requesting game data from games endpoint
    const gamesResponse = await axios.post(
      'https://api.igdb.com/v4/games',
      {
        fields: '*',
        search: gameId,
        limit: 100,
      },
      {
        headers: {
          Accept: 'application/json',
          'Client-ID': '67cmtfjjiza9jdagz5nezdjsp7q2jb',
          Authorization: 'Bearer w142s80hf0xtr3kmgrmebjz9zq425p',
        },
      }
    );
//extracting game data from the response
      console.log(gamesResponse.data.id)
    const games = gamesResponse.data.id;
//requesting data in covers endpoint from the api
    const coversResponse = await axios.post(
      'https://api.igdb.com/v4/covers',
      {
        fields: '*',
        where: { game: gameId },
      },
      {
        headers: {
          Accept: 'application/json',
          'Client-ID': '67cmtfjjiza9jdagz5nezdjsp7q2jb',
          Authorization: 'Bearer w142s80hf0xtr3kmgrmebjz9zq425p',
        },
      }
    );
//extracting covers data from covers response
    const covers = coversResponse.data;
//combining games and covers endpoint
    const combinedData = {
      games: games,
      covers: covers,
    };
//sending combined data as response
    res.json(combinedData);
  } catch (error) {
    console.error('Error getting games and images on server', error);

  }
});

//POSTing to wishlist
router.post('/', (req, res) => {
  //req.body.id ? params?
  const newGame = req.body
  const sqlQuery = `INSERT INTO "wishlist" ("game_name", "game_id")
                    VALUES ($1,$2)`
  pool.query(sqlQuery,[newGame.game_name, newGame.game_id])
  .then(() => {
    res.sendStatus(200);
  })
  .catch(error => {
    console.log('error posting to database ')

  })
});

//PUT 

//DELETE

module.exports = router;


