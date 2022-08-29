const mysql      = require('mysql');
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



function showUser(tabla,val2,dni){
  connection.query(`SELECT * FROM ${tabla} WHERE ${tabla}.${val2} = ${dni}`,function(error, results,fields){
    if(error){
      throw error
    }else{
      results.forEach(result => {
        x=result[`${val2}`]
      });
    }

    console.log(x)
  })
}

showUser('usuario','Nombre',45089238)


function removeUser(tabla,dni){
  connection.query(`DELETE FROM ${tabla} WHERE ${tabla}.${dni} = ${dni}`,function(error,results,fields){
    if(error){
      console.log(`el error es: ${error}`)
    }else{
      console.log(`se eliminaron los datos de los campos: ${fields}`)
    }
  })
}
removeUser('usuario',45089238)

function updateUser(tabla,nombre,dni,curso,telefono,email){
  connection.query(`UPDATE ${tabla} SET nombre =${nombre}, dni = ${dni}, curso=${curso}, telefono=${telefono},email=${email}`,function(error,results,fields){
    if(error){
      console.log(`el error es: ${error}`)
    }else{
      console.log(`se actualizaron los datos de los campos: ${fields}`)
    }
  })
}
function addUser(tabla,nombre,dni,curso,telefono,email,tipo){
  connection.query(`INSERT INTO ${tabla} (nombre,dni,curso,telefono,email,tipo) VALUES (${nombre},${dni},${curso},${telefono},${email},${tipo})`,function(error,results,fields){
    if(error){
      console.log(`el error es: ${error}`)
    }else{
      results.forEach(result => {
        console.log(`Se agrego el usuario : ${result}[${nombre}]`)
      });  
    }
  })
}



connection.end();



module.exports = addUser,removeUser,updateUser,showUser