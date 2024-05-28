


const BASE_URL = "http://localhost:3000/controller/FrontController.php";


//Tipos de mensajes
const ERROR_MSG_TYPE = "danger";
const SUCCESS_MSG_TYPE = "success";



window.onload = onceLoaded;


function onceLoaded() {

    console.debug("window loaded");

    document.getElementById('reservaForm').onsubmit = comprobarReserva;
    
  
}


/**
 * Muestra un mensaje o no en función del parámatro show(true/false). 
 * @param {string} msg  mensaje a mostrar
 * @param {boolean} show true/false para indicar si se mostrará o no el mensaje
 * @param {string} type será del tipo (success/danger, otros por definir) de Bootstrap mediante las constantes ERROR_MSG_TYPE y SUCCESS_MSG_TYPE
 */
function showMsg(msg, show, type) {
    var divMsg = document.getElementById("divMsg");
    if (show) {
        divMsg.innerHTML = msg;
        divMsg.classList.remove('invisible');
        divMsg.classList.forEach(cssClass => {
            if (cssClass.startsWith('alert-')) {
                divMsg.classList.remove(cssClass);
            }
        });
        divMsg.classList.add('alert-' + type);

        setTimeout(function () {
            divMsg.innerHTML = '';
            divMsg.classList.add('invisible');
        }
            , 4000);
    } else {
        divMsg.innerHTML = '';
        divMsg.classList.add('invisible');
    }
}


