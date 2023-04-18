
const suma = document.getElementById("+");
const resta = document.getElementById("-");
const mult = document.getElementById("*");
const div = document.getElementById("/");



suma.addEventListener("click", 
async (event)=>{
    event.preventDefault();
    
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const respuesta = await fetch(
        'http://localhost:3001/api/sumar',
        {
            "method":"POST",
            "headers":{
                "Content-Type":"application/json"
            },
            "body": JSON.stringify({num1,num2})

        
        }

    );
    const dato=await respuesta.json();
    const div_resultado = document.getElementById("resultado");
    div_resultado.innerHTML=dato;
}
);

    resta.addEventListener("click", 
async (event)=>{
    event.preventDefault();
    const num1 = parseFloat(document.getElementById("num1").value);
const num2 = parseFloat(document.getElementById("num2").value);
    
    const respuesta = await fetch(
        'http://localhost:3001/api/restar',
        {
            "method":"POST",
            "headers":{
                "Content-Type":"application/json"
            },
            "body": JSON.stringify({num1,num2})

        
        }
    );
    const dato=await respuesta.json();
    const div_resultado = document.getElementById("resultado");
    div_resultado.innerHTML=dato;
}
);

    mult.addEventListener("click", 
async (event)=>{
    event.preventDefault();
    
    const num1 = parseFloat(document.getElementById("num1").value);
const num2 = parseFloat(document.getElementById("num2").value);
    
    const respuesta = await fetch(
        'http://localhost:3001/api/multiplicar',
        {
            "method":"POST",
            "headers":{
                "Content-Type":"application/json"
            },
            "body": JSON.stringify({num1,num2})

        
        }
    );
    const dato=await respuesta.json();
    const div_resultado = document.getElementById("resultado");
    div_resultado.innerHTML=dato;
}
);
    div.addEventListener("click", 
async (event)=>{
    event.preventDefault();
    
    const num1 = parseFloat(document.getElementById("num1").value);
const num2 = parseFloat(document.getElementById("num2").value);
    
    const respuesta = await fetch(
        'http://localhost:3001/api/dividir',
        {
            "method":"POST",
            "headers":{
                "Content-Type":"application/json"
            },
            "body": JSON.stringify({num1,num2})

        
        }
    );
    const dato=await respuesta.json();
    const div_resultado = document.getElementById("resultado");
    div_resultado.innerHTML=dato;
}
);
  

 
