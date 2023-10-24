//les aspects avancés de javascript
//1-creation d'un classe
/*class Etudiant{
    constructor(nom,age){
        this.nom=nom;
        this.age=age;
        

    }
    affichage(){
        return `Etudiant,${this.nom},"age:",${this.age},"ans" `;
    }
}
let etudiant1=new Etudiant("mohamed",20);
let etudiant2=new Etudiant("ali",30);
//console.log("Etudiant",etudiant1.nom,"age:",etudiant1.age,"ans");
console.log(etudiant1.affichage());
//2) heritage de classe
class stagiere extends Etudiant{
    constructor(nom,age,filiere){
        super(nom,age);
        this.filiere=filiere;
    }
    affichage2(){
        return `${this.nom},"age:",${this.age},"ans","filiere:",${this.filiere} `;
    }
}
let stagiere1=new stagiere("mohamed",20,"dev 201");
console.log(stagiere1.affichage2());
*/


/*
class Personne{
    constructor(nom,prenom,age){
        this.nom=nom;
        this.prenom=prenom;
        this.age=age;
    }
    aff(){
        return `${this.nom},${this.prenom} ,${this.age} ans`;
    }
}
class Eomploye extends Personne{
    constructor(nom,prenom,age,salaire){
        super(nom,prenom,age);
        this.salaire=salaire;
    }
    aff(){
        return `${super.aff()} -salaire : ${this.salaire} `;
    }
}

class Chef extends Eomploye{
    constructor(nom,prenom,age,salaire,departement){
        super(nom,prenom,age,salaire);
        this.departement=departement;
    }
    aff(){
        return `${super.aff()} -departement : ${this.departement} `;
    }
}

let p1=new Personne("mohamed","ali",20);
let e1=new Eomploye("mohamed","ali",20,2000);
let c1=new Chef("mohamed","ali",20,2000,"informatique");
console.log(p1.aff());
console.log(e1.aff());
console.log(c1.aff());*/
/*
import voiture from './voiture.js';
import affichage from './voiture.js';

let v1=new voiture('188-151','bmw');
console.log(affichage(v1));
*/
//------------------------ template literals-----------------------
/*
const nom="mohamed";
const prenom="ali";
console.log(`nom+""+prenom`);
console.log(`${nom} ${prenom}`);



// les opérateur conditionnel ternaire
var moy=10;
var result;
if (moy>=10){
    result("admis");
}else{
    result("non admis");
}
console.log(result);
var moy=10;
var result;
moy>=10 ? result="admis" : result="non admis";
console.log(result); 
//exemple:
let name="mohamed";
let message=name?"bonjour "+name:"bonjour";
console.log(message);

------------>*/
class Document {
    constructor(numEnreg, titre, auteur) {
        this.numEnreg = numEnreg;
        this.titre = titre;
        this.auteur = auteur;
    }
}

class Livre extends Document {
    constructor(numEnreg, titre, auteur) {
        super(numEnreg, titre, auteur);
    }
    infoLivre() {
        return `Numéro d'enregistrement: ${this.numEnreg}, Titre: ${this.titre}, Auteur: ${this.auteur}`;
    }
}

let livre1 = new Livre(1, "Le Petit Prince", "Antoine de Saint-Exupéry");
let livre2 = new Livre(2, "Harry Potter à l'école des sorciers", "J.K. Rowling");
let livre3 = new Livre(3, "1984", "George Orwell");
