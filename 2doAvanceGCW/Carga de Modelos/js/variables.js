
function activar() {
    
    var m = localStorage.getItem('musicOn');

    if(m == "true"){

        alert("La música ya ha sido activada");
    }
    else{

        localStorage.removeItem('musicOn');
        localStorage.setItem('musicOn', true);

        alert("Música activada");

    }

}
function desactivar() {
    
    var m = localStorage.getItem('musicOn');

    if(m == "false"){

        alert("La música ya ha sido desactivada");
    }
    else{

        localStorage.removeItem('musicOn');
        localStorage.setItem('musicOn', false);

        alert("Música desactivada");

    }

}