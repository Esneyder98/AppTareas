const fs = require('fs');

const db= require('./persistencia/tareas.json')

const registerHomework = (titulo, estado) => {

    const tarea ={
        titulo : titulo,
        estado : estado,
    }
    const currentDataBase = db
    //agrega  la tarea a currenData
    currentDataBase.push(tarea)
    //convierte el currentDataBase a formato JSON
    const tareaJson = JSON.stringify(currentDataBase,null,4)
    //sobre escribe el archivo 
    fs.writeFileSync('./persistencia/tareas.json',tareaJson)

};

const showHomeWords =()=>{
    console.log(db)
}
module.exports = { registerHomework, showHomeWords };