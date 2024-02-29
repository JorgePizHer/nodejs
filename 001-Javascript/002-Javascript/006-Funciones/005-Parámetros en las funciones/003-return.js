function saluda(nombre,edad,correo){
    var cadena = "";
    cadena += "Me llamo " + nombre + ".\n";
    cadena += "Tengo " + edad + " años.\n";
    cadena += "Mi correo es " + correo + ".\n";
   
    return cadena;
}

console.log(saluda("Jorge",26,"jorge@mail.com"));
console.log(saluda("Pepe",33,"pepe@mail.com"));