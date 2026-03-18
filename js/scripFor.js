
let formulario = document.getElementById("form1");

formulario.addEventListener('submit',function(event){
  event.preventDefault();
    let foData = new FormData (formulario);
    let d1 = foData.get("dato1");
     let d2 = foData.get("dato2");
      let d3 = foData.get("dato3");

      let numero1 =parseFloat(d1);
      let numero2 =parseFloat(d2);
      let numero3 =parseFloat(d3);

     let suma = numero1 + numero2 + numero3;

     let sum="";
    console.log("La suma es:", + suma);

     if ( suma > 10) {
        sum=("El "+ suma +" es mayor que 10");
    } else if (suma < 10) {
         sum=("El "+ suma +" es menor que 10");
    } 
  console.log("La suma es mayor a 10 "+ sum + "");
    })