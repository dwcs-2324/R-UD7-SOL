function comprobarReserva(event) {
    event.preventDefault();
    console.log('comprobando reserva...');

    let tel = document.getElementById('tel').value;
    let restId = document.getElementById('restaurante').value;

    let data = { 'tel': tel, restId };

    let url = BASE_URL + "?controller=Reserva&action=comprobarReservaJSON";
    
   

    var myInit = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
          }
       
    };
    
    fetch(url, myInit)
        .then(response => {
            if (response.status == 400 || response.status == 500) {
                return false;
            }
            else {
                return response.json();
            }
        }
        )
        .then(data => {
            if (!data) {
                showMsg("Ha ocurrido un error en el servidor", true, ERROR_MSG_TYPE);
            }
           else if (data.code == 0) {
                showModalInfo('spa_modal', 'Información', 'No puede realizar la reserva. Se ha detectado otra reserva en otro restaurante');
            } else if (data.code == 1) {
                showModalInfo('spa_modal', 'Información', 'Su solicitud ha sido validada. Puede proceder a su reserva');
            }
         else if (data.code == 2) {
            showModalInfo('spa_modal', 'Información', 'Ya ha reservado en este restaurante');
        }
            else {
                showMsg("Ha ocurrido un error inesperado", true, ERROR_MSG_TYPE);
         
            }
        
        }).catch(error => showMsg('Ha ocurrido un erro inesperado. Compruebe que tiene acceso a Internet + error', true, ERROR_MSG_TYPE));
    
      
      
}

