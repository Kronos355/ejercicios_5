/*
Hay 2 Objetos: Can y Perro, que deben ser transformados en un esquema de clases,
donde la clase Perro herede las propiedades y funciones de la clase Can y mostrar
todo el perfil del Perro por pantalla / terminal.
*/



/*let Can = {
    ladra: true,
    cantidadDePatas: 4,
    correr() {
        return "corriendo";
    },
    salta() {
        return "saltando"
    }
};


let Perro = {
    nombre: "tornado",
};*/

class Can{

    constructor (ladra,cantidadDePatas,corre,salta){
    this.ladra = true;
    this.cantidadDePatas = 4;
    this.correr = function corre(){
        return "correr";
    };
    this.salta = function salta(){
        return "saltar";
    };    
}
};

class Perro extends Can{
    constructor(ladra,cantidadDePatas,corre,salta,nombre){
        super(ladra,cantidadDePatas,corre,salta)
        this.nombre = "tornado"; 
    }
}

let Canino= new Perro;
let l = console.log;


l("ladra :", Canino.ladra);
l("patas :", Canino.cantidadDePatas);
l("nombre :", Canino.nombre);
l("Actividad favorita :", Canino.correr());
l("le gusta : ", Canino.salta());

