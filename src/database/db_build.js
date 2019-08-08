const fs = require("fs");
const path = require("path");

console.log("HERE!");

const runDbBuild = () => {
  console.log("HERE");
  const dbConnection = require("./db_connection.js");

  const sqlPath = path.join(__dirname, "db_build.sql");
  const sql = fs.readFileSync(sqlPath).toString();

  dbConnection.query(sql, (err, res) => {
    if (err) throw err;
    console.log("DB Created");
    dbConnection.end(() => {
      console.log("connection closed");
    });
  });
};

runDbBuild();
// const runDbBuild = cb => dbConnection.query(sql, cb)

module.exports = runDbBuild;
