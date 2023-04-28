//Variables y tipo de datos Lee las instrucciones de cada comentario y escribí el código para realizar la tarea*

/*SE CREAN TODAS LAS VARIABLES*/
//Crea una variable numero y asígnale un valor de tipo number. 
let numero = 1;
//Crea una variable texto y asígnale un valor de tipo string. 
let texto = "gato";
//Crea una variable verdadero y asígnale un valor de tipo boolean que represente una afirmación verdadera.
let verdadero = true;
//Crea una variable falso y asígnale un valor de tipo boolean que represente una afirmación falsa.
let falso = false;
//Crea una variable nulo y asígnale un valor de tipo null.
let nulo = null;
//Crea una variable indefinido y asígnale un valor de tipo undefined. 
let indefinido;
//Crea una variable arreglo y asígnale un arreglo con varios valores de diferentes tipos de datos.
let arreglo = ["Perro", "gato", 1, 2, 3, true, false];
/*  SE IMPRIME EL VALOR DE TODAS LAS VARIABLES  */
//Imprime en la consola el valor de la variable número y el tipo de dato que almacena.
console.log("La variable número vale: " + numero + ", y es un tipo de dato " + typeof numero);
//Imprime en la consola el valor de la variable texto y el tipo de dato que almacena. 
console.log("La variable texto vale: " + texto + ", y es un tipo de dato " + typeof texto);
//Imprime en la consola el valor de la variable verdadero y el tipo de dato que almacena.
console.log("La variable verdadero vale: " + verdadero + ", y es un tipo de dato " + typeof verdadero);
//Imprime en la consola el valor de la variable falso y el tipo de dato que almacena.
console.log("La variable falso vale: " + falso + ", y es un tipo de dato " + typeof falso);
//Imprime en la consola el valor de la variable nulo y el tipo de dato que almacena.
console.log("La variable nulo vale: " + nulo + ", y es un tipo de dato " + typeof nulo);
//Imprime en la consola el valor de la variable indefinido y el tipo de dato que almacena.
console.log("La variable indefinido vale: " + indefinido + ", y es un tipo de dato " + typeof indefinido);
//Imprime en la consola el valor de la variable arreglo y el tipo de dato que almacena. 
console.log("La variable arreglo vale: " + arreglo + ", y es un tipo de dato " + typeof arreglo);

/*Decisiones en javascript (if,if else, switch)*/
function imprimirDecisiones(){
    //Escribe un programa que tome un número como entrada y muestre un mensaje en la consola indicando si es mayor, menor o igual a 10. 
    //No vuelvo a declarar numero, ya que ya fue declarado
    if (numero > 10){
        console.log("El número " + numero + " es mayor a 10");
    }
    else if(numero === 10){
        console.log("El numero es igual a 10!");
    }
    else{
        console.log("El número " + numero + " es menor a 10")
    }

    //Escribe un programa que solicite al usuario que ingrese un número y verifique si es par o impar. 
    let valorIngresado = prompt("Ingrese un numero: ",0);
    if(valorIngresado % 2 === 0? console.log("El numero " + valorIngresado + " es par"): console.log("El numero " + valorIngresado + " es impar"));

    //Escribe un programa que solicite al usuario que ingrese una letra y verifique si es una vocal o una consonante. 
    valorIngresado = prompt("Ingrese una letra: ",0);
    if(['a','e','i','o','u'].includes(valorIngresado)? console.log('La letra es una vocal'): console.log('La letra no es una vocal, consonante'));

    //Escribe un programa que solicite al usuario que ingrese una edad y verifique si es mayor o menor de edad. 
    let edad = prompt("Ingrese una edad: ",0);
    if(edad < 18? console.log("Es menor de edad"): console.log("Es mayor de edad"));

    //Escribe un programa que solicite al usuario que ingrese un número del 1 al 7 y muestre un mensaje en la consola indicando el día de la semana correspondiente. 
    let dia = parseInt(prompt("Ingrese un numero y se imprimirá a que día de la semana corresponde: ",0),10);
    switch(dia){
        case 1: 
            console.log("Domingo");
            break;
        case 2: 
            console.log("Lunes");
            break;
        case 3: 
            console.log("Martes");
            break;
        case 4: 
            console.log("Miércoles");
            break;
        case 5: 
            console.log("Jueves");
            break;
        case 6: 
            console.log("Viernes");
            break;
        case 7: 
            console.log("Sábado");
            break;
        default: 
            console.log("Opción incorrecta, elija número del 1 al 7. Intente otra vez!");
            break;
    }
}
    imprimirDecisiones();

    //Funciones
    //Escribe una función que tome dos números como argumentos y devuelva su suma. 
    function suma(num1,num2) {
        return (num1 + num2)
      }
    console.log('La suma de dos elementos por medio de una funcion es: ' + suma(2,3));
    //Escribe una función que tome un número como argumento y devuelva true si es par o false si es impar. 
    function parImpar(num) {
        if(num % 2 == 0){
          return true
        }if(num % 2 == 1){
          return false
        }
      }
    console.log('Funcion booleana parImpar devuelve: ' + parImpar(44));
    //Escribe una función que tome un array de números como argumento y devuelva la suma de sus elementos. 
    function sumaElementos(vector){
        let suma = 0;
        vector.forEach(x => suma += x);
        return suma;
    }
    console.log('La suma de los elementos de un vector es: ' + sumaElementos([2,3,5,8,3]));
    //Escribe una función que tome un array de strings como argumento y devuelva la longitud del string más largo. 
    function stringMasLargo(cadenas){
        let mayor = "";
        cadenas.forEach(elemento => {
            if(elemento.length>mayor.length) mayor = elemento;
        });
        return mayor;
    }
    console.log('El string más largo del array es:' +  stringMasLargo(['perro', 'gato', 'hipopotamo']));
    //Escribe una función que tome un objeto como argumento y devuelva un array con los valores de todas sus propiedades. 
    let obj = {
        name: "Juan",
        edad: 15
      }
      
    function cambObj(objs) {
        let arrayComp = []
        for(const [key, value] of Object.entries(objs)){
            arrayComp.push(key);
            arrayComp.push(value);
        }
        return arrayComp;
    }
    console.log('El objeto convertido a array queda: ' + cambObj(obj));
//Vectores
//Escribe una función que tome un array de números como argumento y devuelva el número más grande. 
let vectorNumerico = [2,2,3,4,5]
function numMayor(vectorNum){
    let mayor = vectorNum[0];
        vectorNum.forEach(elemento => {
            if(elemento>mayor) mayor = elemento;
        });
    return mayor;
}
console.log('El mayor elemento del vector es: ' + numMayor(vectorNumerico));
//Escribe una función que tome un array de números como argumento y devuelva un array con los números ordenados de menor a mayor. 
function ordenarMenAMay(vector){
    let aux = 0;
    for(let i = 0; i<vector.length-1; i++){
        for(let j = 0; j<vector.length-1; j++){
            if(vector[j] > vector[j+1]){
                aux = vector[j];
                vector[j] = vector[j+1];
                vector[j+1] = aux;
            }
        }
    }
    return vector;    
}
//Escribe una función que tome dos arrays como argumentos y devuelva un array que contenga los elementos comunes entre ambos. 
function elementosComunes(vector1, vector2){
    resultado = [];
    vector1.forEach(elemento => vector2.forEach(elemento2=> {if(elemento === elemento2) resultado.push(elemento);}));
    return resultado;
}
//Escribe una función que tome un array de strings como argumento y devuelva un nuevo array que contenga los strings convertidos a mayúsculas. 
function converMayusc(myArray) {
    let newArray = []
    myArray.forEach(element => newArray.push(element.toUpperCase()))
    return newArray;
  }
  console.log(['perro','gato','auto']);
//Escribe una función que tome un array de números como argumento y devuelva un nuevo array que contenga la suma acumulativa de sus elementos. 
let array = [1,2,3,4,5];
function sumaAcumulativa(array) {
    let suma = 0;
    const resultado = array.map((num) => {
      suma += num;
      return suma;
    });
    return resultado;
  }
  console.log(sumaAcumulativa(array)); 

//Bucles
//Escribe un bucle for que imprima en la consola los números del 1 al 10. 
for(let i = 1; i<=10; i++){
    console.log(i + "\n");
}
//Escribe un bucle while que imprima en la consola los números del 1 al 5. 
let contador  = 1;
while(contador <= 5){
    console.log(contador + "\n");
    contador++;
}
//Crea un vector con los números del 1 al 5. Escribe un bucle for que imprima en la consola cada uno de los elementos del vector. 
let aux = [1,2,3,4,5];
for(let i = 0; i < aux.length; i++){
  console.log(array[i]);
}
//Crea una función que reciba un número n y devuelva la suma de todos los números del 1 al n. Utiliza un bucle for para calcular la suma y muestra el resultado en la consola. 
function sumaHastaN(n) {
    let suma = 0;
    for (let i = 1; i <= n; i++) {
      suma += i;
    }
    return suma
  }  
console.log(sumaHastaN(5))
//Crea una función que reciba un vector y devuelva la suma de todos sus elementos. Utiliza un bucle while para calcular la suma y muestra el resultado en la consola. 
function sumaElementosVector(vector){
    let suma = 0;
    vector.forEach(element => {suma += element});
    return suma;
}


//DOM y eventos
//Crea un archivo HTML con un botón y un div vacío. Usa JavaScript para agregar un mensaje al div cuando se hace clic en el botón. 
    const BOTON = document.getElementById('boton');
    const DIV = document.getElementById('divVacio');
    let parrafoNuevo = document.createElement('p');
    let input = document.createElement('input');
    parrafoNuevo.innerText = "Mi primer DOM!! :D";

    BOTON.addEventListener('click', ()=>{
        DIV.appendChild(parrafoNuevo);
        DIV.appendChild(input);
        input.focus();
    });
//Crea una función que cambie el color de fondo de un elemento HTML a rojo cuando el mouse se mueve sobre él. Agrega esta función como un listener de evento para el div del ejercicio anterior. 
parrafoNuevo.addEventListener('mouseover', ()=>{
    parrafoNuevo.style.color = 'red';
});
//Crea una función que cambie el tamaño de fuente de un elemento HTML cuando se presiona una tecla en el teclado. Agrega esta función como un listener de evento para el div del ejercicio anterior. 
input.addEventListener('keypress', (e) => {
    if (e){
        parrafoNuevo.style.fontSize = '50px';
    }
});
//Crea una función que cambie el contenido de un elemento HTML cuando se hace doble clic sobre él. Agrega esta función como un listener de evento para el div del ejercicio anterior. 
parrafoNuevo.addEventListener('dblclick', ()=>{
    parrafoNuevo.innerHTML = "O será el segundo? :O";
    input.focus();
});
//Crea una función que cambie la imagen de fondo de un elemento HTML cuando se carga la página. Agrega esta función como un listener de evento para el body del documento.
   let CUERPO = document.getElementById('cuerpo');
    window.addEventListener('load', ()=>{
        CUERPO.style.backgroundImage = 'url("michi.png")';
    });












