const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/details/:id', (req, res) => {
    // load the detail page for each item that was clicked on
    console.log('in details router, req.params is', req.params);
    console.log('req.params.id is', req.params.id);
    console.log('req.body is ', req.body);
    console.log('req.body.title is', req.body.title);

    let individualMovieId= req.params.id;
  
    const sqlText = `
    SELECT "movies"."id", "movies"."title", "movies"."description", "movies"."poster" 
    FROM "movies"
      JOIN "movies_genres" ON "movies"."id" = "movies_genres"."movie_id"
      JOIN "genres" ON "movies_genres"."genre_id"="genres"."id"
      WHERE "movies"."id" = 1
      GROUP BY "movies"."id";`;

    const sqlParams = {
        id: individualMovieId,
        title: req.body.title,
        description: req.body.description,
        poster: req.body.poster
    }
    pool.query(sqlText, [individualMovieId])
      .then( result => {
        res.send(result.rows);
      })
      .catch(err => {
        console.log('ERROR: Get all genres', err);
        res.sendStatus(500)
      })
  });

  module.exports=router;
    