class Jugador{
    constructor(){
        
    }
    juega(){
        return "El jugador juega al fútbol";
    }
}

class Delantero extends Jugador{
    constructor(){
        super();
        this.edad = 0;
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
        return "El nombre del jugador es " + delantero1.getNombre() + " y tiene " + delantero1.getEdad() + " años. Su valoración actual es de " + delantero1.getMedia() + " puntos de media y su potencial es de " + delantero1.getPotencial() + "."
    }
}

var delantero1 = new Delantero();
delantero1.setEdad(17);
delantero1.setNombre("José Da Silva");
delantero1.setMedia(63);
delantero1.setPotencial(89);
console.log(delantero1)
console.log(delantero1.informe());
console.log(delantero1.juega());