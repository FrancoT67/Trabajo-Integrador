const db = require('./conexion')
let x = db.showUser('alumno','nombre',45089239)
console.log(x)

/*********************************************************************
 * no funciona, error en el insert del email
 *********************************************************************/

// let y = db.addUser('alumno','toledo',45089240,'6A',3547628424,'nicolas@gmail.com','admin')
// console.log(y)


/*********************************************************************
 * error con los campos parece
 *********************************************************************/
// let c = db.updateUser('alumno','franco toledo',45089238,'5B',123456789)
// console.log(c)

let b = db.removeUser('alumno',45089238)
