let arregloIzquierdo = [];
let arregloDerecho = [];
 
function agregarEdad() {
    let valor = document.getElementById("txtEdad").value;
    let edad = parseInt(valor);
    arregloIzquierdo.push(edad);
    pintarArregloIzquierda();
}