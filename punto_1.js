/*
Se tiene creado un objeto, en el cual se desea agregar 2 propiedades
dentro de su prototipo, las propiedades son: edad: 300, pais:"narnia"
*/

let persona = {
    nombre: "foo"
};

let persona_caracteristicas = {
    __proto__:persona,
    edad: "300",
    pais: "Narnia"
}

console.log(persona_caracteristicas.__proto__);
console.log("edad : ",persona_caracteristicas.edad);
console.log("Pais : ",persona_caracteristicas.pais)
