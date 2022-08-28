DROP DATABASE IF exists prueba;

CREATE DATABASE prueba;

USE prueba;

create table materias(
nombreM VARCHAR(255) NOT NULL,
nota1 decimal(2,2)NOT NULL,
nota2 decimal(2,2) NOT NULL,
nota3 decimal(2,2) NOT NULL,
estado VARCHAR(30) NOT NULL,
cod_materia INT NOT NULL AUTO_INCREMENT,
PRIMARY KEY(cod_materia));

CREATE TABLE alumno(
nombre VARCHAR(30) NOT NULL,
dni VARCHAR(9) NOT NULL ,
curso VARCHAR (8) NOT NULL,
telefono INT(10) NOT NULL,
email VARCHAR (20) NOT NULL,
cod_materia INT AUTO_INCREMENT,
cod_alumno INT NOT NULL AUTO_INCREMENT,
foreign KEY(cod_materia) references materias(cod_materia),
PRIMARY KEY (cod_alumno)
);
