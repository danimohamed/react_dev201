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