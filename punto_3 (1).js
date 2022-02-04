/*
Se tiene el objeto "Can" y el objeto "Perro" en el objeto "Perro"
 se debe crear un vínculo con un prototipo hacia el objeto "Can" 
 para mostrar todas sus propiedades y funciones.
*/

let log = console.log

let Can = {
    ladra: true,
    cantidadDePatas: 4,
    __proto__: {
        correr() {
            return "corriendo";
        },
        salta() {
            return "saltando"
        }
    }
};

let Perro = {
   nombre:"tornado",
   __proto__: Can
}; 

log(Can.ladra,Can.cantidadDePatas, Can.__proto__.correr(), Can.__proto__.salta())
log("nombre : " + Perro.nombre, "," ,
    "Ladra : " + Perro.__proto__.ladra, ", " ,
    "Patas : " + Perro.__proto__.cantidadDePatas, ",", 
    "Estado : " + Perro.__proto__.__proto__.correr(), " y ",
    Perro.__proto__.__proto__.salta())
