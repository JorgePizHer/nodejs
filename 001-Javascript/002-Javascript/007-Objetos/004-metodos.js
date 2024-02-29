class jugador{
    constructor(){
        this.edad = 0; //El objeto parte con edad 0
        this.nombre ="";
        this.media ="";
        this.potencial="";
    }
    informe(){
        console.log("El nombre del jugador es " + this.nombre + ", tiene " + this.edad + " años. Su valoración actual es de " + this.media + " puntos de media y su potencial es de " + this.potencial)
    }
}

var jugador1 = new Jugador();
console.log(jugador1);