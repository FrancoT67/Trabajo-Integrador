/* Creating an array of objects. */
let admins=[
    {
        user:'admin',
        pass:'admin123'
    }];


/* Creating an array of objects. */
let alumnos=[
    {
        user:'pepe1',
        pass:'pepe1',
        name:'pepe alberto',
        dni:'45892487',
        curso:'5A',
        telefono:'0658145',
        correo:'pepe1@gmail.com',
        matters:[{name:'matematica',note:6.20},/*{name:'lengua',note:6.7}*/]
    }];




const login = () =>{
    let username = document.querySelector(".user").value; 
    let password = document.querySelector(".pass").value;
    admins.forEach(admin => {
        if((username === admin.user)&&(password === admin.pass)){
            location.href='/homeAdmin.html'
        }else if((username != admin.user)&&(password != admin.pass)){
            alumnos.forEach(alumno => {
                if((username === alumno.user)&&(password === alumno.pass)){
                    location.href = '/homeUser.html'
                }else{
                    alert('Datos Incorrectos')
                }

            })
        }else{
            alert('Datos Incorrectos')
        }
    })
}


/**
 * It takes the values from the input fields and pushes them into the arrays.
 */
const createUser = () =>{
    let nameUser = document.querySelector('.nombre').value;          
    let dniUser = document.querySelector('.dni').value              
    let cursoUser = document.querySelector('.curso').value          
    let telefonoUser = document.querySelector('.telefono').value    
    let correoUser = document.querySelector('.correo').value        
    let userUser = document.querySelector('.usuario').value
    let passUser = document.querySelector('.contraseña').value
    if(nameUser.length === 0 || dniUser.length === 0 || cursoUser.length === 0 ||telefonoUser.length === 0 ||correoUser.length === 0 ||userUser.length === 0 ||passUser.length === 0){
        alert('Por Favor complete todos los campos')
    }else{
        alumnos.push({user:userUser, pass:passUser, name:nameUser,dni:dniUser, curso:cursoUser, telefono:telefonoUser, correo:correoUser})
        alert('Alumno Creado')
    }
}



/**
 * It takes the value of the input with the class matterName and the value of the input with the class
 * matterDivision and pushes them into the matters array as an object with the keys names and
 * divisions.
 */

const createMatter = () =>{
    let matterName = document.querySelector('.matterName').value
    let matterDivision = document.querySelector('.matterDivision').value
    matters.push({names:matterName,divisions:matterDivision});
    alert('Materia creada')
}


/**
 * It takes the values of the inputs and if the userDni is equal to the dni of the object in the array,
 * it pushes the values of the inputs to the array.
 */
const addNoteForAlumno = () =>{
    let userName = document.querySelector('.alumnoName').value;
    let userDNI = document.querySelector('.userDNI').value
    let matter = document.querySelector('.matterName').value;
    let note = document.querySelector('.matterNote').value;
    if((userDNI === alumnos.find(element => element === alumnos.dni))){
        alumno.matters.push({matterName:matter,matterNote:note})
    }else{
        alert('datos incorrectos o alumno no existente')
    }
}



/* mostrar todas las materias,si tiene 5.99 o menos Desaprobado(pintar en rojo)*/ 
let nameMatter = document.querySelector('.nombre')
let noteMatter= document.querySelector('.nota')
let stateMatter= document.querySelector('.estado')
let materias = document.querySelector('.materias')
let divContenerdor = document.querySelector('.contenedorMaterias')
const inspectMatter = () =>{
    alumnos.forEach(alumno => {
        alumno.matters.forEach(matter => {
           if(matter.note<= 5.99){
            materias.classList.add('materias','Desaprobado')
            nameMatter.innerHTML = matter.name
            noteMatter.innerHTML = matter.note
            stateMatter.innerHTML = 'Desaprobado'
           }else{
            materias.classList.add('materias','Aprobado')
            nameMatter.innerHTML = matter.name
            noteMatter.innerHTML = matter.note
            stateMatter.innerHTML = 'Aprobado'
           }
        })
     }); 
     //lo de arriba anda con una sola materias
// lo de abajo le falta revisar mucho
    // alumnos.forEach(alumno => {
    //     alumno.matters.forEach(matter => {
    //         const tr = document.createElement('tr')
    //         const td = document.createElement('td')
    //         divContenerdor.appendChild(tr)
    //         tr.appendChild(td)

    //     });
        
    // });

}
















// intento fallido de crear etiquetas desde JS

//     if(matter.note <= 5.99){
//         const td = document.createElement('td')
//         const tr = document.createElement('tr')
//         td.textContent=matter.name
        
//         tr.appendChild(td)
//         matterState = 'Desaprobado'
//     }else{
//         matterState = 'Aprobado'
//     }
// });
// // contenido.innerHTML += `<tr><td>${alumno.matters.name}</td>
// // <td>${alumno.matters.note}</td>
// // <td>${matterState}</td>
// // </tr>`
// contenido.appendChild(tr)








