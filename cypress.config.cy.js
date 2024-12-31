const { defineConfig } = require('cypress');
const mysql = require('mysql')
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')

// module.exports = defineConfig({
  // setupNodeEvents can be defined in either
  // the e2e or component configuration

  
  //e2e: {
   // setupNodeEvents(on, config) {
     //    on('task', {downloadFile})
//},
 //   },

    
   // viewportHeight:760,
   // viewportWidth:535


//});

const readXlsx = require('C:/Users/DCKLP-097/Cypress automation/cypress/plugins/read-xlsx.js')

const xlsx = require('node-xlsx').default;

  const fs = require('fs'); // for file
  const path = require('path'); // for file path
const { error } = require('console');

  module.exports = defineConfig({
  chromeWebSecurity: false,

  projectId: 'pbbjcz',
  video: true,
  reporter: 'cypress-mochawesome-reporter', //for html report




    e2e: {
      setupNodeEvents(on, config) {
     
          on('task', { queryDb: query => { return queryTestDb(query, config) }, }); //For running sql query
        
    //For connecting to SQL Server

    function queryTestDb(query, config) {
// creates a new mysql connection using credentials from cypress.json env's
const connection = mysql.createConnection(config.env.db)
// start connection to db

connection.connect()
// exec query + discount to db as a Promise
return new Promise((resolve, reject) => { 
connection.query(query, (error, results) => {
if (error) reject(error)
  else {
    connection.end()
    return resolve(results)
  }

})

})


}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {

      function queryTestDb(query, config) {

      }
    }}
    
})
     
     on('task', {'readXlsx':readXlsx.read, parseXlsx({ filePath }) 
     { return new Promise((resolve, reject) =>
       { try 
        {
           const jsonData = xlsx.parse(fs.readFileSync(filePath))
           resolve(jsonData);
           } catch (e) 
           {
              reject(e);
           } });
         }}); 
        },

"env": {

  "db": {
    "server": "127.0.0.1",
    "user": "root",
    "password": "root",
    "database": "db_name"


  }
}
},

        })
    
