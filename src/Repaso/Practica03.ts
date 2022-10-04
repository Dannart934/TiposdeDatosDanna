//Class

import { isJSDocThisTag } from 'typescript';

class Persona{ //private, protected, public
     nombre:string;
     edad:number;

    constructor(a:string, b:number){
        this.nombre=a;
        this.edad=b;
    }
    setNombre(a:string){
        this.nombre=a;
    }
    getNombre():string{
        return this.nombre;
    }

    imprimir():void{
        console.log(`Nombre: ${this.nombre} y edad: ${this.edad}`);
    }
}

class tabla{
    private numero:number;
    setNumero(a:number){
        this.numero=a;
    }
    getNumero():number{
        return this.numero;
    }
    calcular():void{
        for(let i=1; i<11; ++i){
            console.log(`${this.numero} x ${i} = ${i*this.numero}`);
        } 
        let s:number=1;
        while(s<11){
            console.log(`${this.numero} x ${s} = ${s*this.numero}`);
            ++s;
        }
    }
}

let tabla1=new tabla();
tabla1.setNumero(7);
console.log('Variable privada: '+tabla1.getNumero());

//tabla1.tem=6;
//console.log('Variable privada: '+tabla1.tem);

let personal:Persona;
//personal = new Persona();

//let persona2=new Persona();
personal.edad=23;
personal.imprimir();
//persona2.imprimir();

class Dado{
    private valor:number;
    public tirar(){
        this.generar();
    }
    private generar(){
        this.valor=Math.floor(Math.random()*6)+1;
    }
    public imprimir(){
        console.log(`Salio el valor ${this.valor}`);
    }
}

let dado1=new Dado();
dado1.tirar();
dado1.imprimir();