/*
Este string "fooziman" se debe proyectar de la siguiente forma "fOozimAn" 
NOTA: con la segunda letra en upper y la ante  penúltima en upper.
*/

let log = console.log;
let str = "fooziman";


log(str[0] + str[1].toUpperCase() + str[2] + str[3] + str[4] + str[5] +
    str[6].toUpperCase() + str[7])