DROP DATABASE IF EXISTS department_db
CREATE DATABASE department_db

USE department_db;

CREATE TABLE department (
    id INT PRIMARY KEY,
    name_id VARCHAR(30) NOT NULL,
);

CREATE TABLE role (
    id INT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT NOT NULL
);

CREATE TABLE employee (
       id INT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name  VARCHAR(30),
    role_id INT NOT NULL
    manager_id INT NOT NULL
);

