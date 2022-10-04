class FormulaGeneral{
    private valor1:number;
    private valor2:number;
    public respuesta;
    public resultado(){
        this.respuesta();
    }

    private valor(){
        this.valor1=Math.floor(Math.random()+5);
        this.valor2=Math.floor(Math.random()+5);
    }
    public imprimir(){
        console.log(`La respuesta ${this.valor1}+${this.valor2}= ${this.respuesta}`);
    }
}