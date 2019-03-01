const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente por hacer'
};

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra una tarea por hacer', {
        descripcion
    })
    .command('listar', 'Lista tareas ya sea completada o no ', {
        completado: {
            alias: 'c',
            desc: 'Marca como completado o pendiente por hacer'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}