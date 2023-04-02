INSERT INTO department (name_id)
VALUES ("Sales"),
       ("Marketing"),
       ("Engineering"),
       ("Human Resources");

INSERT INTO role (title, salary, department_id)
VALUES("Sales Lead", 80, 1),
      ("Salesperson", 60, 1),
      ("Director of marketing", 90, 2),
      ("Marketing specialis", 65, 2)
      ("Lead Engineer",100, 3),
      ("Software Enginner", 85, 3),
      ("Talent Management", 70, 4),
      ("HR Compliance", 50, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES("Kevin", "Durant",),
       ("Lebron", "James",)
       ("Kyrie", "Irving",),
       ("Jayson", "Tatum",),
       ("Joel", "Embid"),
       ("Anthony", "Davis"),
       ("Steph", "Curry",),
       ("James", "Harden");