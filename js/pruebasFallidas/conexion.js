const mysql =need('mysql');

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

function conexion(){
  connection.connect(function(error){
    if(error){
      throw error;
    }else{
      console.log('Conectado')
    }
  });
}

//addUser('alumno','pedro',24459789,'4C',3547456987,'pedroemail@gmail.com','alumno','pepe123','pepe456')
//showUser('alumno','pepe123','pepe456')
//updateUser('alumno','pedro',24459789,'2C',3547456987,'pedroemail@gmail.com','alumno','pepe123','pepe456')
//removeUser('alumno',24459789)




function showUser(tabla,val1,val2){
  connection.query(`SELECT * FROM ${tabla} WHERE alumno.${val1} = '${val1}';`,function(error, results,fields){
    if(error){
      throw error
    }else{
      results.forEach(result => {
       
        return (console.log(result))
      });
      
    }
  })
}
 function login(){
  let a=document.querySelector('.user')
  let b=document.querySelector('.pass')
  let user= showUser('alumno',`${a}`)
  let pass= showUser('alumno',`${b}`)
  if( (a === user)&&(b=pass)){
    console.log(user)
  }
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



function updateUser(tabla,nombre,dni,curso,telefono,email,tipo,usuario,password){
  connection.query(`UPDATE ${tabla} SET nombre="${nombre}", dni = ${dni}, curso="${curso}", telefono=${telefono},email="${email}", tipo="${tipo}",usuario="${usuario}",password="${password}" WHERE ${tabla}.dni = ${dni}`,function(error,results,fields){
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


export {conexion};




