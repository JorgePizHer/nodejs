class Jugador{
    constructor(){
        this.edad = 0; //El objeto parte con edad 0
        this.nombre ="";
        this.media ="";
        this.potencial="";
    }
    informe(){
        console.log("El nombre del jugador es " + this.nombre + " y tiene " + this.edad + " años. Su valoración actual es de " + this.media + " puntos de media y su potencial es de " + this.potencial)
    }
}

var jugador1 = new Jugador();
jugador1.edad = 17;
jugador1.nombre = "José Da Silva";
jugador1.media = 63;
jugador1.potencial = 89;
jugador1.informe();