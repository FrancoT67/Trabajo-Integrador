const db = require('./conexion')


const tablaDB= 'alumno'
let pass = document.querySelector(".pass").value;
let x = db.showUser(tablaDB,pass)
console.log(x)


let y = db.addUser('alumno','toledo',45089240,'6A',3547628424,'nicolas@gmail.com','admin','toledoFranco','franco1235')
console.log(y)



let c = db.updateUser('alumno','Nicolas',45089239,'5B',3547628424,'francotoledo1235@gmail.com','admin','pepe456')
// console.log(c)

// let b = db.removeUser('alumno',45089248)
