var mysql      = require('mysql');
var connection = mysql.createConnection({
  host:'localhost',
  user:'root',
  database:'prueba',
  password:''
  
  
  // host:'localhost',
  // user:'root',
  //database:'prueba',
  // password:'falla'

  
  // host: 'localhost',
  // database:'prueba',
  // user: 'bdII_7mo',
  // password: 'Septimo-2022'

});

connection.connect(function(error){
  if(error){
    throw error;
  }else{
    console.log('Conectado')
  }
});



function addUser(tabla,val2){
  connection.query(`SELECT * FROM ${tabla}`,function(error, results,fields){
    if(error){throw error}
    results.forEach(result => {
      x=result[`${val2}`]
    });

    console.warn(x)
  })
}
/* Calling the function `addUser` and passing in the arguments `'alumno'` and `'Nombre'`. */
addUser('alumno','Nombre')


function removeUser(){}
function updateUser(){}
function showUser(){}

function addAdmin(){}
function removeAdmin(){}
function updateAdmin(){}
function showAdmin(){}


connection.end();

module.exports = addUser()
  /*,removeUser,updateUser,showUser,addAdmin,removeAdmin,updateAdmin,showAdmin*/
