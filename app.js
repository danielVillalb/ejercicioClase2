/*Consigna
Crear una aplicación adivina_numero_secreto que contenga el código del juego:
● Genera un número aleatorio entre 1 y 100 para que el usuario lo adivine.
● Pide al usuario que ingrese un número y compáralo con el número generado.
● Proporciona retroalimentación al usuario si el número es demasiado alto o demasiado bajo.
● Continúa solicitando números al usuario hasta que adivine el número correcto.
● Muestra un mensaje de felicitaciones cuando el usuario adivina el número.
Utilizaremos el paquete npm readline-sync que nos permitirá interactuar con el usuario a través de
la consola.
Consideraciones:
● Tanto los comandos como el código fuente de este paso a paso se encuentra disponible para
que lo puedan copiar y pegar, y así no escribirlo completamente.
*/
const readlineSync = require("readline-sync");
const {generarNumeroRamdon,ingreseNumero,verificar}=require("./funciones")
//iniciamos el juego
const juego = () => {
  const numeroSecreto = generarNumeroRamdon();
  let numeroAdivinado = 0;
  console.log(numeroSecreto)
  console.log("¡Bienvenido a Adivina el número secreto!");
  console.log("Intenta adivinar el número del 1 al 100.\n");
  while(numeroAdivinado!==numeroSecreto){
    numeroAdivinado=ingreseNumero();
    verificar(numeroAdivinado, numeroSecreto);
  }
};
juego();

