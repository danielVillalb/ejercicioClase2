const verificar = (numero, numeroSecreto) => {
    if (numero === numeroSecreto) {
      console.log("Felicidades, Usted gano!!");
    } else if (numero > numeroSecreto) {
      console.log("ingrese un numero mas chico");
      
    } else if(numero<numeroSecreto) {
      console.log("ingrese un numero mas grande");
  
    }
  };
  const generarNumeroRamdon = () => {
    return Math.floor(Math.random() * 100) + 1;//genero el numero ramdom
  };
  
  const ingreseNumero = () => {
    return parseInt(readlineSync.question("ingrese un numero: "));//transformamos con parseInt a numero el valor que ingreso el usuario
  };
  module.exports={verificar,generarNumeroRamdon,ingreseNumero};//exportamos las funciones para usarlas en mi app