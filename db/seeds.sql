INSERT INTO department (name_id)
VALUES ("Sales"),
       ("Marketing"),
       ("Engineering"),
       ("Human Resources");

INSERT INTO role (title, salary, department_id)
VALUES("Sales Lead", 80000, 1),
      ("Salesperson", 60000, 1),
      ("Director of marketing", 90000, 2),
      ("Marketing specialis", 65000, 2),
      ("Lead Engineer",100000, 3),
      ("Software Enginner", 85000, 3),
      ("Talent Management", 70000, 4),
      ("HR Compliance", 500000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES("Kevin", "Durant", 1, NULL),
       ("Lebron", "James",2, 1),
       ("Kyrie", "Irving",3, NULL),
       ("Jayson", "Tatum",4, 3 ),
       ("Joel", "Embid", 5, NULL),
       ("Anthony", "Davis", 6, 5),
       ("Steph", "Curry",7, NULL),
       ("James", "Harden", 8, 7);