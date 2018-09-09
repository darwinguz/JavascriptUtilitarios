var c = 2;
var d = "hola2";

//impresiones de consola
console.log(d);
console.info(d);
console.error(d);
console.warn(d);

console.log(e);//undefined
var e = "holae";
console.log(e);//


//demo javascript no asincrono
function imprimir() {
    for (var i = 0; i<8000; i++){
        console.log("Imprimio");
    }
}
imprimir();

function presionoClick() {
    console.log("Click en el boton");
}

