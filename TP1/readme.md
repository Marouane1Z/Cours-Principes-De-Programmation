<h1 align="center">Rapport TP 1 : Principes De Programmation</h1>

<h1 align="center">TP n°1 : RMI et Services Web SOAP</h1>

Ce TP est réalisé par Zaid Marouane (No : 12508678), et suivi par Mr : YOUCEF SAMIR

L'objectif de ce TP est le développement et déploiement d'une Web Service type : **soap*, 

## Web Service SOAP
SOAP : Simple Object Access Protocol

Les **Web Services** permettent la communication entre des systèmes hétérogènes. Parmi eux, on trouve **SOAP**.
**SOAP** est un protocole d'échange d'information structurée dans l'implémentation de services web bâti sur XML.

## Format SOAP
**SOAP** repose sur :
- Le format XML pour structurer les messages
- Le protocole HTTP pour le transport des données

## Fonctionnement
**SOAP** suit une architecture **Client / Serveur** :
- Le client envoie une requête SOAP
- La requête est envoyée sous une encapsulation XML 
- Le serveur SOAP traite la requête
- Le serveur renvoie une réponse SOAP sous format XML (Sérialization)

Le message reçu de **XML** contient les informations décrites (paramètres, méthodes, opérations)

## Avantages
- Protocole puissant qui peut être utilisé dans les entreprises
- Un seul format proposé (XML)
- Sécurité élevée

## WSDL
**SOAP** utilise un fichier appelé **WSDL (Web Services Description Language)**.
Le WSDL décrit :
- Les méthodes
- Les paramètres
- Le type des données
- L’URL : Uniform Resource Locator

## Contenu d'un message SOAP (XML)
Un message **SOAP/XML** est composé principalement de :
- **Envelope** : racine du message SOAP
- **Header** : informations de sécurité ou authentification.
- **Body** : la requête ou la réponse attendue

## Exemple tirée de l'application de ce tp :

```
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:pol="http://www.polytech.fr">
   <soapenv:Header/>
   <soapenv:Body>
  	 <pol:getEtudiant>
   	 	<arg0>1</arg0>
      </pol:getEtudiant>
   </soapenv:Body>
</soapenv:Envelope>
```

Pour accéder au fichier **WSDL**, on utilise **lien_url/?wsdl**

On utilise **lien_url/?xsd=** pour accéder à un élement où on peut voir les différentes opérations faites à ce niveau.

Pour tester les différentes requêtes, on utilise **SoapUI**, il permet d'envoyer des requêtes et de visualiser les réponses du serveur.

<img width="1905" height="692" alt="image" src="https://github.com/user-attachments/assets/70865216-a6d5-435c-bf38-c972a5ab9819" />



Ce rapport présente les étapes d'application d'un exemple ce protocole.

