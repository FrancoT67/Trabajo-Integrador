DROP DATABASE IF exists prueba;

CREATE DATABASE prueba;

USE prueba;

create table materias(
nombreM VARCHAR(255),
nota1 decimal(2,2),
nota2 decimal(2,2),
nota3 decimal(2,2),
estado VARCHAR(30),
cod_materia INT NOT NULL AUTO_INCREMENT,
PRIMARY KEY(cod_materia));

CREATE TABLE Alumno(
Nombre VARCHAR(30) NOT NULL,
DNI VARCHAR(9) NOT NULL ,
Curso VARCHAR (8) NOT NULL,
Telefono INT(10),
Email VARCHAR (20),
cod_alumno INT NOT NULL AUTO_INCREMENT,
foreign KEY(cod_alumno) references materias(cod_alumno),
PRIMARY KEY (cod_alumno)
);
