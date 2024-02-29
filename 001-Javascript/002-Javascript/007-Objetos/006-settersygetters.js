class Jugador{
    constructor(){
        this.edad = 0; //El objeto parte con edad 0
        this.nombre ="";
        this.media =0;
        this.potencial=0;
    }
    setEdad(nuevaedad){
        this.edad = nuevaedad;
    }
    getEdad(){
        return this.edad;
    }
    setNombre(nuevonombre){
        this.nombre = nuevonombre;
    }
     getNombre(){
        return this.nombre;
    }
    setMedia(nuevamedia){
        this.media = nuevamedia;
    }
     getMedia(){
        return this.media;
    }
    setPotencial(nuevopotencial){
        this.potencial = nuevopotencial;
    }
     getPotencial(){
        return this.potencial;
    }
    
    informe(){
        return "El nombre del jugador es " + jugador1.getNombre() + " y tiene " + jugador1.getEdad() + " años. Su valoración actual es de " + jugador1.getMedia() + " puntos de media y su potencial es de " + jugador1.getPotencial() + "."
    }
}

var jugador1 = new Jugador();
jugador1.setEdad(17);
jugador1.setNombre("José Da Silva");
jugador1.setMedia(63);
jugador1.setPotencial(89);
console.log(jugador1)
console.log(jugador1.informe());