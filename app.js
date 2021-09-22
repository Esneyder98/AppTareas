const homeWord = require('./homework.js')
let opciones = process.argv[2];
console.log(opciones);
//homeWord.registerHomework("Consultar play graund","en proceso")
switch (opciones) {
    case "listar":
        homeWord.showHomeWords()
        break;
    case undefined:
        console.log("Tienes que pasar una accion");
        break;
    default:
        console.log("No se que queres hacer");
        break;
}