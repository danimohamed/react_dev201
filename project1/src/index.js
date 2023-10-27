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

//ex

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



//object destructuring

const stagiere={
    nom:"mohamed",
    prenom:"ali",
    age:20,
    adresse:{rue:5,ville:"tunis"}
};


//mth1

const nm=stagiere.nom;
const pr=stagiere.prenom;
const ag=stagiere.age;
const rue=stagiere.adresse.rue;
const ville=stagiere.adresse.ville;

//mth2
const {nom,prenom,age,adresse:{rue,ville}}=stagiere;
console.log(nom,prenom,age,rue,ville);



function affichage({
    nom,
    prenom,
    age,
    adresse:{rue,ville}
}){
    console.log("bonjour",nom,prenom,age,rue,ville);
}


affichage(stagiere);



const produit = {
    ref: 1,
    designation: "pc portable",
    prix: 10000,
    caracterstique: {poids: "5kg", couleur: "noir"}
};
//const {ref,designation,prix,caracterstique:{poids,couleur}}=produit;
//console.log(ref,designation,prix,poids,couleur);


function affichage({
    ref,
    designation,
    prix,
    caracterstique:{poids,couleur}
}){
    console.log(ref,designation,prix,poids,couleur);
}
affichage(produit);



const stagiere=[
    {nom:"dani",age:20,bac:true},
    {nom:"mohamed",age:20,bac:false},
    {nom:"ali",age:20,bac:true},
];
console.log(stagiere);

//les array methods
//meth1
const couleur1=["rouge","vert","bleu"];


//couleur1.splice(1,1);
//couleur1.pop();
//couleur1.unshift("jaune");
//couleur1.push("jaune");
for(let i=0;i<couleur1.length;i++){
    console.log(couleur1[i]);
}
 


//meth2
const couleur2=new Array("rouge","vert","bleu");

//meth3
const couleur3=[];
couleurs[0]="rouge";
couleurs[1]="vert";
couleurs[2]="bleu";





const T1=[1,2,3,4,5];
const T2=[6,7,8,9,10];
const T3=[11,12,13,14,15];

const T4=T1.concat(T2,T3);
console.log(T4);


const numbers = [3, 5, 7, 9, 8, 1, 4];
const nm=numbers.slice(2,6);
console.log(nm);


//1)sort()
const noms = ["mohamed", "ali", "dani", "jamal", "kamal", "farouq"];
noms.sort();
noms.reverse();
console.log(noms);




const nomber=[7,8,3,42,512,6,100,2,9,10];
nomber.sort(function (a,b){return a-b});
console.log(nomber);

const nomber=[7,8,3,42,512,6,100,2,9,10];
let max,min;

for(let i=0;i<nomber.length;i++){
    if(i==0){
        max=nomber[i];
        min=nomber[i];
    }
    if(nomber[i]>max){max=nomber[i];}
    if(nomber[i]<min){min=nomber[i];}
}
console.log("le max est:",max);
console.log("le min est:",min);









const nomber=[7,8,3,42,512,6,100,2,9,10];
console.log(trouverMax(nomber));
console.log(trouverMin(nomber));
function trouverMax(arr){
    return Math.max.apply(null,arr);
}
function trouverMin(arr){    
    return Math.min.apply(null,arr);
}

------------>*/
const voiture = [
    { marque: "bmw", couleur: "rouge", prix: 10000 },
    { marque: "audi", couleur: "vert", prix: 20000 },
    { marque: "mercedes", couleur: "bleu", prix: 30000 },
    { marque: "ford", couleur: "jaune", prix: 40000 },
    { marque: "peugeot", couleur: "noir", prix: 50000 },
    { marque: "fiat", couleur: "blanc", prix: 60000 },
    { marque: "citroen", couleur: "gris", prix: 70000 },
    { marque: "volkswagen", couleur: "orange", prix: 80000 },
    { marque: "renault", couleur: "violet", prix: 90000 },
    { marque: "opel", couleur: "marron", prix: 100000 },
];

const marques = voiture.map(function (voiture) {
    return voiture.marque;
});
console.log(marques);