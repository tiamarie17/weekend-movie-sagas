const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
  // Add query to get all genres for the movie clicked
  console.log('in genres router, req.params.id is', req.params.id);

  let id = req.params.id;


  const sqlText = `
  SELECT JSON_AGG("genres"."name") AS genres
  FROM "movies"
    JOIN "movies_genres" ON "movies"."id" = "movies_genres"."movie_id"
    JOIN "genres" ON "movies_genres"."genre_id"="genres"."id"
    WHERE "movies"."id"=$1
    GROUP BY "movies"."id";`;
  pool.query(sqlText, [id])
    .then( result => {
      res.send(result.rows[0]);
    })
    .catch(err => {
      console.log('ERROR: Get all genres', err);
      res.sendStatus(500)
    })
});
  

module.exports = router;