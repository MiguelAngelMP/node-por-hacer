const argv = require('./config/yargs').argv;

const porHacer = require('./por-hacer/por-hacer');

const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        break;

    case 'listar':
        if (!argv.completado) {

            let listado = porHacer.getListado();

            for (let tarea of listado) {
                console.log('==========Por hacer==============='.green);
                console.log(tarea.descripcion);
                console.log(`Estado por la tarea:  ${tarea.completado}`);
                console.log('=================================='.green);
            }

        } else {
            let listado = porHacer.getListadoCompletado(argv.completado);
            for (let tarea of listado) {
                console.log(`==========Por hacer que son  ${tarea.completado} === `);
                console.log(tarea.descripcion);
                console.log(`Estado de la tarea: ${tarea.completado }`.green);
                console.log('=================================='.green);
            }

        }

        break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':
        let borrrado = porHacer.borrar(argv.descripcion);
        console.log(borrrado);
        break;

    default:
        console.log('comando no es reconocido');
        break;
}