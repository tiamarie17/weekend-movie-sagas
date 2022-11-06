const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  // Add query to get all genres
  //Update to incldue just the list of genres?
  console.log('in genres router, req.body is', req.body);

  const sqlText = `
  SELECT "movies"."id", "movies"."title", JSON_AGG("genres"."name") AS genres
  FROM "movies"
    JOIN "movies_genres" ON "movies"."id" = "movies_genres"."movie_id"
    JOIN "genres" ON "movies_genres"."genre_id"="genres"."id"
    GROUP BY "movies"."id"
    ORDER BY "movies"."id" ASC;`;
  pool.query(sqlText)
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all genres', err);
      res.sendStatus(500)
    })
});
  

module.exports = router;