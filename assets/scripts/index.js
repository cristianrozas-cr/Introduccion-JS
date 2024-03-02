let precio = 400000;
let cantidad = 1;

let precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;

let cantidadSpan = document.querySelector(".cantidad");
cantidadSpan.innerHTML = cantidad;

let total = document.querySelector(".valor-total");
total.innerHTML = precio;