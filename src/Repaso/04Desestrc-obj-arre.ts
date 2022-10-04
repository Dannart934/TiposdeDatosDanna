//Destructuracion de objetos y arreglos 
interface Detalles{
    autor:string;
    anio:number;
}

interface Reproductor{
    volumen:number;
    segundo:number;
    cancion:string;
    detalles:Detalles;
}

const reproductor:Reproductor={
    volumen:90,
    segundo:60,
    cancion:'Mañanitas',
    detalles:{
        autor:'Cepillin',
        anio:1900,
    }
}

const {cancion, volumen, segundo}=reproductor;

//const {autor, anio}=detalles;
//No sé por qué me da error en detalles :(


console.table('El nombre de la cancion: '+ cancion);
console.table('El nombre de la cancion: ' +volumen);
console.table('El nombre de la cancion: ' +segundo);
//console.table('El nombre de la cancion: ' +autor);

const dbz:string[]=['Goku', 'Vegeta', 'Krillin', 'Yamcha'];

const[p1,p2,p3,p4]=dbz;

console.log('Personaje1: ', p1);
console.log('Personaje2: ', p2);
console.log('Personaje3: ', p3);
console.log('Personaje4: ', p4);
