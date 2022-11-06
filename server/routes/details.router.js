const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/details/:id', (req, res) => {
    // create router for details pages, practice setting up connection to database with SQL
    console.log('in details router, req.params is', req.params);
    console.log('req.params.id is', req.params.id);
   

    let clickedMovieId= req.params.id;
  
    const sqlText = `
    SELECT "movies"."id", "movies"."title", "movies"."description", "movies"."poster" 
    FROM "movies"
      JOIN "movies_genres" ON "movies"."id" = "movies_genres"."movie_id"
      JOIN "genres" ON "movies_genres"."genre_id"="genres"."id"
      WHERE "movies"."id" = $1
      GROUP BY "movies"."id";`;


    pool.query(sqlText, [clickedMovieId])
      .then( result => {
        res.send(result.rows);
      })
      .catch(err => {
        console.log('ERROR: Get all genres', err);
        res.sendStatus(500)
      })
  });

  module.exports=router;
    