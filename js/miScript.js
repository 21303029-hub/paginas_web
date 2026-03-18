
        function calculando(){
            let cliente = document.getElementById("cliente");
            let producto = document.getElementById("producto");
            let cantidad = document.getElementById("cantidad");
            let entrega = document.querySelector('input[name="entrega"]:checked');

            let totalBebida = 0;
            let nombresBebida = [];
            const bebidas = document.querySelectorAll('input[name="bebida"]:checked');
            bebidas.forEach(bebida => {
                totalBebida += Number(bebida.value);
                nombresBebida.push(bebida.value == "40" ? "Grande $40" : "Chico $36");
            });

            let totalExtra = 0;
            let nombresExtra = [];
            const extras = document.querySelectorAll('input[name="extra"]:checked');
            extras.forEach(extra => {
                totalExtra += Number(extra.value);
                nombresExtra.push(extra.value == "10" ? "Chispas $10" : "crema batida $5");
            });

            let totalFinal = totalBebida + totalExtra;
            let entregaValor = entrega ? entrega.value : "Sin seleccionar";

            let detalleBebida = nombresBebida.length > 0 ? nombresBebida.join(", ") : "Ninguna";
            let detalleExtra = nombresExtra.length > 0 ? nombresExtra.join(", ") : "Ninguno";

            alert(
                 
                "cliente: " +cliente.value+ "\n"+
                "producto:" +producto.value+ "\n"+
                "cantidad:" +cantidad.value+ "\n"+
                "entrega:" +entregaValor+ "\n"+
                "bebida:" + detalleBebida + "\n"+
                "extras:" +detalleExtra+ "\n"+
                "total a pagar:$" + totalFinal
            );
        }

      let BotonDos = document.getElementById("botonDos")
      BotonDos.addEventListener('click',function(event){
        event.preventDefault();
        alert("oprimiste el boton dos....")
      })

        


       