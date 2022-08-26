var mysql      = require('mysql');
var connection = mysql.createConnection({
  // host:'localhost',
  // user:'root',
  // database:'prueba',
  // password:''
  
  
  // host:'localhost',
  // user:'root',
  //database:'prueba',
  // password:'falla'

  
  host: 'localhost',
  database:'prueba',
  user: 'bdII_7mo',
  password: 'Septimo-2022'

});

connection.connect(function(error){
  if(error){
    throw error;
  }else{
    console.log('Conectado')
  }
});


connection.end();