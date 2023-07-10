const express = require("express");
const router = express.Router();
const axios = require("axios");
require("dotenv").config();

//GET games from api for search view
//api developer tool is outdated needed postman for accurate axios.get
router.get("/:id", async (req, res) => {
  const gameName = req.params.id;
  console.log("gamename is", gameName);

  let data = `fields *, cover.url ;\nsearch "${gameName}";\nlimit 10;`;

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://api.igdb.com/v4/games",
    headers: {
      "Client-ID": process.env.CLIENT_ID,
      Authorization: process.env.AUTHORIZATION,
      Accept: "application/json",
      "Content-Type": "text/plain",
      Cookie:
        "__cf_bm=DlxOwur5Inz60Em5pSZ8qM6mIJ8zo8cGcLsP4MmkyzE-1687898318-0-AWpMyxT06Kj2MklbNv93eCb1egi0Vt85eA4EYmWNjeru8GTlGBDh6nypsqF4rylHca08iuupp6sgSEqyja6HiDA=",
    },
    data: data,
  };
  const gameResponse = await axios(config);
  console.log("gameResponse is", gameResponse);
  res.send(gameResponse.data);
});

module.exports = router;
