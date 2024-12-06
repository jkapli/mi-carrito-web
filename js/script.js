// console.log("HOLA")
// let boton = document.getElementById('boton');
// let lista = document.getElementById('lista')



document.querySelectorAll('#producto').forEach(botonProducto => {
    botonProducto.addEventListener('click', function(){
        productos = listadoProductos();
        let cardId = botonProducto.closest('.card').id;
        console.log("EL ID DEL PRODUCTO ES : ",cardId);
        let parrafo = botonProducto.closest('.card').querySelector('#parrafo');
        parrafo.textContent = productos[cardId-1].descripcion;
    });
});

function listadoProductos() {
    const productos = [
        {id: 1, nombre: 'Producto 1', descripcion: 'Producto 1 Descripcion' ,precio: 100},
        {id: 2, nombre: 'Producto 2', descripcion:'Producto 2 Descripcion'  ,precio: 200},
        {id: 3, nombre: 'Producto 3', descripcion:'Producto 3 Descripcion'  ,precio: 300},
        {id: 4, nombre: 'Producto 4', descripcion:'Producto 4 Descripcion'  ,precio: 400},
        {id: 5, nombre: 'Producto 5', descripcion:'Producto 5 Descripcion'  ,precio: 500}
    ];
    return productos;
}

productos = listadoProductos();
console.log(productos);
