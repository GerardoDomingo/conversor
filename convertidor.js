function convertir() {
    var tipomon = document.getElementById("tipomoneda").value;
    var valordol = document.getElementById("valordolar").value;
    var cantidad = document.getElementById("cantidad").value;
    var resul = document.getElementById("resultado");

    if (tipomon == "mxn") {
        var cantidadmxn = parseFloat(cantidad);
        var cantidadusd = cantidadmxn / parseFloat(valordol);
        resul.textContent = cantidadusd.toFixed(2) + " USD";
    } else if (tipomon == "usd") {
        var cantidadusd = parseFloat(cantidad);
        var cantidadmxn = cantidadusd * parseFloat(valordol);
        resul.textContent = cantidadmxn.toFixed(2) + " MXN";
    }
}
