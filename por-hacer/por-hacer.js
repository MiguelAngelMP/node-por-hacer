const fs = require('fs');

let listadoPorHacer = [];

const guarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('no se pudo grabar', err);
    });
}

const cargarDb = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = []
    }

}

const getListado = () => {
    cargarDb();
    return listadoPorHacer;
}


const crear = (descripcion) => {

    cargarDb();
    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);

    guarDB();

    return porHacer;
}


const actualizar = (descripcion, completado = true) => {
    cargarDb();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guarDB();
        return true;
    } else {
        return false;
    }
}



const borrar = (descripcion) => {
    cargarDb();

    let nuevaLista = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);

    if (nuevaLista.length === listadoPorHacer.length) {
        return false;
    } else {
        listadoPorHacer = nuevaLista;
        guarDB();
        return true;
    }
}


const getListadoCompletado = (completado = true) => {
    cargarDb();
    let nuevaLista = listadoPorHacer.filter(tarea => tarea.completado === completado);
    if (nuevaLista.length === 0) {
        return false;
    } else {
        return nuevaLista;
    }
}


module.exports = {
    crear,
    getListado,
    actualizar,
    borrar,
    getListadoCompletado
}