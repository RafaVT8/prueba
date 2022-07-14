let historial = document.querySelector('.h-ventas');
let selector = document.querySelector('.selectorProductos');

//console.log(historial);
for (let i = 1; i <= 10; i++) {

    //ventas += `<p>Venta-${i} | 10:${i}3:${i}4 <span class='agregar'>+</span></p>`;
    let venta = document.createElement('p');
    let node = document.createTextNode(`Venta-${i} | 10:${i}3:${i}4`);
    venta.appendChild(node);
    historial.appendChild(venta);


}

let ventas = '';
for (let i = 1; i <= 10; i++) {

    ventas += `<p>Producto-${i} | 10:${i}3:${i}4 <span class='agregar'>+</span></p>`;

}
selector.innerHTML = ventas;

//historial.innerHTML = ventas;