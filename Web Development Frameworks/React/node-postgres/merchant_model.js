const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'Gowsikkan@13',
  port: 5432,
});

const getMerchants = () => {
    return new Promise(function(resolve, reject) {
      pool.query('SELECT * FROM cars', (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(results.rows);

      })
    }) 
  } 
  
  module.exports = {
    getMerchants
  }