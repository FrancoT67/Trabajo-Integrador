DROP DATABASE IF exists prueba;

CREATE DATABASE prueba;

USE prueba;

create table materias(
nombreM VARCHAR(255),
nota1 decimal(2,2),
nota2 decimal(2,2),
nota3 decimal(2,2),
estado VARCHAR(30),
cod_materia INT not null,
PRIMARY KEY(cod_materia));

CREATE TABLE Alumno(
Nombre VARCHAR(30) NOT NULL,
DNI VARCHAR(9) NOT NULL ,
Curso VARCHAR (8) NOT NULL,
Telefono INT(10),
Email VARCHAR (20),
division varchar(6),
cod_materia INT not NULL,
foreign KEY(cod_materia) references materias(cod_materia),
PRIMARY KEY (DNI)
);
