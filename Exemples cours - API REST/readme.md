# Cours Principes de Programmation

## Application Flask REST API – Students & Employees
Ce repertoire contient deux applications Flask développés pour application des principes de base des API REST avec Flask vus en cours de Pricipes de Programmation.
Les deux projets illustrent les méthodes HTTP **(GET/POST/PUT/DELETE)**.

## Technologies utilisées
Python/Flask
Postman pour tester les requêtes HTTP: **POST/PUT/DELETE** 

## Exécution de l'app Flask :
L'execution de l'app Flask se fait au niveau du terminal **WINDOWS** par les commandes suivantes : 
**set FLASK_APP=file.py** puis **flask run**



## Application 1 : Students (Vus en cours)
Cette application **Flask** permet la gestion d'une liste d’étudiants (**Récupération**/**Ajout**/**Modification**/**Suppression**).

La liste d'étudiants est représentée sous forme d'une liste de dictionnaires : 
students = [ {"id":1, "name":"youcef", "age":21}, {"id":2, "name":"samir", "age":41} ]

Chaque dictionnaire d'étudiant est identifié par les clés : **id**, **name**, **age**

L'app définit les routes suivantes : 

**@app.route('/')** : racine de l'API 
**@app.route('/students', methods=['GET'])** : Récupération de la liste des étudiants par la méthode : **GET**
**@app.route('/students', methods=['POST'])** : Ajout d'un nouveau étudiant par la méthode : **POST**  (testé par Postman)
**@app.route('/students/<int:id>', methods=['GET'])** : Affichage d'un étudiant en passant son **id** par la méthode **GET**
**@app.route('/students/<int:id>', methods=['PUT'])** : Mise à jour d'un étudiant par la méthode : **PUT** (testé par Postman)
**@app.route('/students/<int:id>', methods=['DELETE'])** : Suppression d'un étudiant par la méthode : **DELETE** (testé par Postman)



## Application 2 : Employees (Exercice d'application en cours)
Cette application **Flask** permet la gestion d'une liste d’employess (**Récupération**/**Ajout**/**Modification**/**Suppression**).

La liste des employées est représentée sous forme d'une liste de dictionnaires : 
employees = [ {"id":1, "name":"Marouane Zaid", "age":26, "company":"Google", "role":"Junior Software Engineer"},
              {"id":2, "name":"Saad", "age":23, "company":"Meta", "role":"Junior Software Engineer"},
              {"id":3, "name":"Christophe", "age":35, "company":"Microsoft", "role":"senior architect"},
              {"id":4, "name":"Adrien", "age":30, "company":"Microsoft", "role":"project manager"},
              {"id":5, "name":"Julien", "age":55, "company":"Google", "role":"executive director"} ]

Chaque dictionnaire d'employee est identifié par les clés : **id**, **name**, **age**, **company**, **role**

Les résultats sont affichés sous forme d'une table initiée comme suit : 

tab = ("<h2 style='text-align:center;'>Liste des employées</h2>"
         + "<table border='1' style='margin:auto;'>"
         + "<tr>"
         + "<th>ID</th>"
         + "<th>Nom</th>"
         + "<th>Age</th>"
         + "<th>Entreprise</th>"
         + "<th>Role</th>"
         + "</tr>")

Cette table s'incrémente en fonction de chaque opération qu'on va définir : (**GET**,**POST**,**PUT**,**DELETE**)

L'app définit les routes suivantes : 

**@app.route('/')** : racine de l'API 
**@app.route('/employees', methods=['GET'])** : Récupération de la liste des employees par la méthode : **GET**
**@app.route('/employees', methods=['POST'])** : Ajout d'un nouveau employee par la méthode : **POST**  (testé par Postman)
**@app.route('/employees/<company>', methods=['GET'])** : Filtre sur la liste des employees en passant le paramètre **company** par la méthode **GET**
**@app.route('/employees/<int:id>', methods=['PUT'])** : Mise à jour d'un employee par la méthode : **PUT** (testé par Postman)
**@app.route('/employees/<int:id>', methods=['DELETE'])** : Suppression d'un employee par la méthode : **DELETE** (testé par Postman)
