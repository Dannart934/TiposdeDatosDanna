interface Direccion{
    calle:string;
    pais:string;
    estado:string
}

interface DatosAlumno{
    nombre:string;
    edad:number;
    direccion:Direccion;
    mostrarDireccion:()=>string;
}

const AlumnoUtl:DatosAlumno={
    nombre:'Danna',
    edad:20,
    direccion:{
        calle:'SanNicolas',
        pais:'Mexico',
        estado:'Leon'
    },

    mostrarDireccion(){
        return this.nombre+', '+this.direccion.estado+', '+this.direccion.pais;
    }
}

const direccion=AlumnoUtl.mostrarDireccion();
console.log(direccion)

