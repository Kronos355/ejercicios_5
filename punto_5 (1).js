/*
Determinar con un loop/ciclo en el array de personas cuantas 
son mayores de edad y cuantas menores de edad, adicional decir 
el total de personas que compone el array.
*/

let personas = [{
        nombre: "foo",
        edad: 18
    },
    {
        nombre: "bar",
        edad: 17
    },
    {
        nombre: "zap",
        edad: 40
    },
    {
        nombre: "qux",
        edad: 19
    }
];


    for(let c = 0;c <= 3;c++ ){
    if(personas[c].edad >= 18){
    
    console.log(`\n${personas[c].nombre}:eres mayor de edad`)}
    
    else{
        
    console.log(`\n${personas[c].nombre}:eres menor de edad`)}}

    const CantidadDePersona = personas.length
    console.log(`\n${"CANTIDAD DE PERSONAS:"}` + CantidadDePersona)

    var mayoresDeEdad = 0;
    var menoresDeEdad = 0; 
    for(let c = 0;c <= 3;c++ ){
        if(personas[c].edad >= 18){
        mayoresDeEdad++}
        else{
        menoresDeEdad++;}
    }

console.log("PERSONAS MAYORES : " + mayoresDeEdad);
console.log("PERSONAS MENORES : " + menoresDeEdad);




    





