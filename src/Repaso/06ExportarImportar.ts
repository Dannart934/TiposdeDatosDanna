

import { calcularIVA, Producto } from './05DestructuraFunciones';

const carrito:Producto[]=[
{
    desc:'Telefono1',
    precio:1270
},
{
    desc:'Telefono2',
    precio:1270
}
];

const [total,iva]=calcularIVA(carrito);
console.log('Total:',total);
console.log('Total con Iva:',iva);
