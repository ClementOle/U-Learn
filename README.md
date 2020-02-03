# U-Learn
U'Lean projet for IPI Lyon MESI

## Pour installer le projet 

## Liste des plugins à installer 

- Lombok (Permet d'utiliser Lombok)
- MapStruct Support (Permet d'utiliser mapstruct qui permet de générer des mapper pour transformer les objet du package model en object du package DTO)
- SonarLint (Permet de faire des analyse de code pour détecter d'éventuelle mauvaise pratique ou erreur que l'IDE ne signalerait pas déjà)
- Git Flow Integration (Permet de simplifier l'utilisation de GIT)

### Maven
- Clic droit sur les trois pom.xml -> `Add as maven project`

### Node
- Clic droit sur `frontend/package.json` -> `Run npm install`
### Base de données

- Créer la base de données dans [phpMyAdmin](http://localhost/phpmyadmin)
- Définir l'username de phpMyAdmin à `root`
- Définir le mot de passe de phpMyAdmin à `root`

### Autre
- Ctrl+Alt+S -> Settings -> Editor -> Code Style 
- Cocher `Enable formatter markers in comments`.

- Clicker sur le petit `+` en dessous.

- Clicker sur le petit plus en haut en gauche.
- Choisir `Local` 

- Lui donner le nom `remote`

- Dans pattern écrire : `file[frontend]:src/remote/*`

Puis valider

## Démarche pour créer une nouvelle feature

###  Partie Backend
- Créer votre nouvelle branche grâce on plugin git flow qui est présent en bas à droite de l'IDE

- Créer les models nécessaires dans le package model de `backend` 

- Créer les DTO dans le package dto

- Créer les mapper dans package mapper ([doc mapstruct](https://mapstruct.org/documentation/stable/reference/html/))

- Créer votre service dans le package service et son implémentation(Y mettre toute la logique)

- Créer le controller

- Créer les test unitaires correspondant dans le package test

- Lancer le projet spring boot 

- Ouvrir le terminal en base de l'IDE

- Positionner vous dans le dossier `frontend`

- Executer `codegen.cmd`

- Développer la partie front


