const dbConnection = require('../database/db_connections.js');


const postDataposts = (name,post,cb) => {
  dbConnection.query(
    'INSERT INTO post (post_title, post_description) VALUES ($1)',
    [post_title, post_description],
    (err, res) => {
      if (err) {
        return cb(err);
      } else {
        cb(null, res);
      }
    }
  );
};





module.exports ={postDataposts};
