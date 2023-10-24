//les aspects avancés de javascript
//1-creation d'un classe
class Etudiant{
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