/**
 * Tenemos un abasto que procesa el código, nombre y costo de varios artículos
 * Se desea procesar estos artículos sabiendo que el precio de venta es con un
 * incremento del 25% del costo.
 * Se desea saber:
 * + El precio de venta de cada articulo
 * + Los artículos con menor precio de venta
 * + Los artículos con costo mayor que el promedio
 * + Cantidad de artículos con menor precio de venta
 * Cantidad de artículos con costo mayor que el promedio
 *
 * id   nombre     costo    pvp()
 * 1    Cerveza     1000    1250
 * 2    Coca-cola    500     625
 * 3    Pepsi        100     125
 * 4    Agua         300     375
 * 5    Jugo         100     125
 *
 * Artículos con menor precio de venta: Pepsi y Jugo (Resultado es ARRAY)
 * El promedio es: 400 (Resultado es número)
 * Artículos con costo mayor que el promedio: Cerveza y Coca-cola (Resultado es ARRAY)
 * Cantidad de artículos con menor precio de venta: 2 (Resultado es número)
 * Cantidad de artículos con costo mayor que el promedio: 2 (Resultado es número)
 */

import Cl_abasto from "./Cl_abasto.js";
import Cl_articulo from "./Cl_articulo.js";
import Dt_articulos from "./data.js";

const abasto = new Cl_abasto();

Dt_articulos.forEach((articulo) =>
  abasto.agregarArticulo(
    new Cl_articulo(articulo.id, articulo.nombre, articulo.costo)
  )
);

let salida = document.getElementById("salida");

/*let articulos = abasto.articulosMenorPvp();
salida.innerHTML += `Artículos con menor precio de venta:
<br>id   nombre     costo    pvp()`;
articulos.forEach((articulo) => {
  salida.innerHTML += `<br> ${articulo.id}    ${articulo.nombre}     ${
    articulo.costo
  }     ${articulo.pvp()}`;
});

salida.innerHTML += `<br><br>El promedio es: ${abasto.costoPromedio()}`;*/

let articulos = abasto.articulosCostoMayorPromedio();
let salidaTmp = `<br><br>Artículos con costo mayor que el promedio:
<br>
<table>
  <tr>
    <th>id</th>
    <th>nombre</th>
    <th>costo</th>
    <th>pvp</th>
  </tr>`;
articulos.forEach((articulo) => {
  salidaTmp += `
  <tr>
    <td>${articulo.id}</td>
    <td>${articulo.nombre}</td>
    <td>${articulo.costo}</td>
    <td>${articulo.pvp()}</td>
  </tr>`;
});
salidaTmp += "</table>";

salida.innerHTML += salidaTmp;
