/*
https://jsonplaceholder.typicode.com/users 

Mediante la anterior url, se debe acceder al endpoint /users 
para mostrar todos los usuarios, con el uso de la librería axios, 
se debe hacer 2 diseños de consumo de este recurso. 

1 consumirlo con promesas es decir con then(...).catch(...)
2 consumirlo con el formato de diseño async / await

docs:

https://github.com/axios/axios

npm install axios
*/








const axios = require("axios");


async function metodo_1(){
    try{
        const users = await axios.get("https://jsonplaceholder.typicode.com/users ");
        console.log(users.data);

    }
    catch(err){
        console.log("err");
    }

}


//metodo_2();

async function metodo_2(){
    try{
        const resultado = await axios.get("https://jsonplaceholder.typicode.com/users")
        console.log(resultado.data)
    }
    catch(error){
        console.log("error")
    }
}

metodo_2();