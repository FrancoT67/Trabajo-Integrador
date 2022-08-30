const mysql = require('mysql');
const connection = mysql.createConnection({
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


let tabla = undefined
let nombre = undefined
let dni = undefined
let curso = undefined
let telefono = undefined
let email = undefined

const showUser = (tabla,val1,val2,dni) => {
  connection.query(`SELECT ${val1}, ${val2} FROM ${tabla} WHERE ${tabla}.dni = ${dni}`,function(error, results,fields){
    if(error){
      throw error
    }else{
      results.forEach(result => {
       
        return result
      });
      console.log(x)
    }
  })
}



function removeUser(tabla,dni){
  connection.query(`DELETE FROM ${tabla} WHERE ${tabla}.dni = ${dni}`,function(error,results,fields){
    if(error){
      console.log(`el error es: ${error}`)
    }else{
      console.log(`se eliminaron los datos solicitados`)
    }
  })
}

function updateUser(tabla,nombre,dni,curso,telefono,email,tipo,password){
  connection.query(`UPDATE ${tabla} SET nombre="${nombre}", dni = ${dni}, curso="${curso}", telefono=${telefono},email="${email}", tipo="${tipo}",password="${password}" WHERE ${tabla}.dni = ${dni}`,function(error,results,fields){
    if(error){
      console.log(`el error es: ${error}`)
    }else{
      console.log('se actualziaron todos los datos')
    }
  })
}
function addUser(tabla,nombre,dni,curso,telefono,email,tipo,usuario,password){
  connection.query(`INSERT INTO ${tabla} (nombre,dni,curso,telefono,email,tipo,usuario,password) VALUES ("${nombre}",${dni},"${curso}",${telefono},"${email}","${tipo}","${usuario}","${password}")`,function(error,results,fields){
    if(error){
      console.log(`el error es: ${error}`)
    }else{
      console.log(`se agrego el usuario ${usuario}`)
    }
  })
}







exports.showUser = showUser;
exports.addUser = addUser;
exports.removeUser = removeUser;
exports.updateUser = updateUser;