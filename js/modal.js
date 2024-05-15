const OK_TEXT = "Aceptar";
/**
 *  Muestra un modal con el id especificado (sin #) Se añade el listener del evento que indica el cierre del modal solo si se acepta 
 * @param {string} modal_id
 * @param {string} title Titulo del modal
 * @param {string}  msg Mensaje de texto que se mostrará al usuario
 * @param {string} opt_ok_text Texto a mostrar en el botón. Si es null, se mostrará el contenido de la constante OK_TEXT
 * @param {callable} opt_ok_function Función a ejecutar si el usuario ha hecho clic en el botón de aceptar. Se deberá ejecutar después de cerrar el diálogo. Si se aporta null o no se aporta la función, simplemente se cerrará el diálogo.

 
 */
function showModalInfo(modal_id, title, msg, opt_ok_text = null, opt_ok_function = null) {


    //Se crea con un objeto options, pero no se pedía en el 
    let myModal = new bootstrap.Modal(document.getElementById(modal_id), { backdrop: 'static', keyboard: true, focus: true });

    let modal_id_selector = '#' + modal_id;

    let title_el = document.querySelector(modal_id_selector + ' #modal_title');
    let msg_el = document.querySelector(modal_id_selector + '  #modal_msg');
    let optok_el = document.querySelector(modal_id_selector + '  #opt_ok');

    title_el.innerHTML = title;
    msg_el.innerHTML = msg;


    if (opt_ok_text !== null) {
        optok_el.innerHTML = opt_ok_text;
    } else {
        optok_el.innerHTML = OK_TEXT;
    }

  

    let myModalEl = document.getElementById(modal_id);
    //Este evento se dispara cuando se termina de mostrar el modal

    optok_el.onclick = function () {
        ok_clicked = true;
      

        myModalEl.addEventListener('hidden.bs.modal', function (event) {

            if (opt_ok_function !== null) {
                opt_ok_function();
            }

        }, { once: true });
        //Con once:true 
        //nos aseguramos de que solo se ejecute una vez y que justo después se quite el manejador de enventos
        //https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener


        myModal.hide();



    };
   
    //Establecemos el foco en OK button con el evento que nos avisa de que se ha mostrado el modal al usuario
    /*Due to how HTML5 defines its semantics, the autofocus HTML attribute has no effect in Bootstrap modals. To achieve the same effect, use some custom JavaScript:
     * 
     */
    myModalEl.addEventListener('shown.bs.modal', function () {
        optok_el.focus();
    }, { once: true });

    //Finalmente mostramos el modal
    myModal.show();

}