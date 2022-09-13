//
interface Alumno2{
    nombre:string;
    edad:number;
    direccion:()=>void;
    calle:boolean=false;
    pais:string;
    estado:string;
    numero:number;
}

function alumno1003(alumno:Alumno2, mostrarDireccion:boolean):void{
    alumno.nombre='Danna';
    alumno.edad=20;
    alumno.direccion
}


const Alumnonuevo:Alumno2={
    nombre:'Mario',
    edad:23,
    direccion:{
        calle:'brisas de san nicolas',
        pais:'mexico',
        estado:'leon',
        numero:103,
    }

    
    mostrarDireccion(direccion:Alumno2,calle,pais,estado,numero):void{

        return this.nombre ', '+this.direccion.estado+', '+this.direccion.pais

    }
}

