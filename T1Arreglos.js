let arregloIzquierdo = [];
let arregloDerecho = [];
 
function agregarEdad() {
    let valor = document.getElementById("txtEdad").value;
    let edad = parseInt(valor);
    arregloIzquierdo.push(edad);
    pintarArregloIzquierda();
}

function pintarArregloIzquierda() {
    let tbody = document.getElementById("tablaIzquierda");
    tbody.innerHTML = "";
 
    if (arregloIzquierdo.length === 0) {
        tbody.innerHTML = '<tr class="empty-row"><td colspan="3">Sin elementos</td></tr>';
        return;
    }
 
    for (let i = 0; i < arregloIzquierdo.length; i++) {
        let fila = "<tr>";
        fila += "<td>" + arregloIzquierdo[i] + "</td>";
        fila += '<td><button class="btn-eliminar" onclick="eliminarIzquierdo(' + i + ')">Eliminar</button></td>';
        fila += '<td><button class="btn-mover" onclick="moverHaciaDerecha(' + i + ')">→</button></td>';
        fila += "</tr>";
        tbody.innerHTML += fila;
    }
}

function pintarArregloDerecha() {
    let tbody = document.getElementById("tablaDerecha");
    tbody.innerHTML = "";
 
    if (arregloDerecho.length === 0) {
        tbody.innerHTML = '<tr class="empty-row"><td colspan="3">Sin elementos</td></tr>';
        return;
    }
 
    for (let i = 0; i < arregloDerecho.length; i++) {
        let fila = "<tr>";
        fila += '<td><button class="btn-mover" onclick="moverHaciaIzquierda(' + i + ')">←</button></td>';
        fila += "<td>" + arregloDerecho[i] + "</td>";
        fila += '<td><button class="btn-eliminar" onclick="eliminarDerecho(' + i + ')">Eliminar</button></td>';
        fila += "</tr>";
        tbody.innerHTML += fila;
    }
}

function eliminarDerecho(indice) {
    arregloDerecho.splice(indice, 1);
    pintarArregloDerecha();
}
 
function moverHaciaDerecha(indice) {
    let valor = arregloIzquierdo[indice];
    arregloDerecho.push(valor);
    arregloIzquierdo.splice(indice, 1);
    pintarArregloIzquierda();
    pintarArregloDerecha();
}
 
function moverHaciaIzquierda(indice) {
    let valor = arregloDerecho[indice];
    arregloIzquierdo.push(valor);
    arregloDerecho.splice(indice, 1);
    pintarArregloIzquierda();
    pintarArregloDerecha();
}