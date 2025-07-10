
let estudiantes = [];
let contadorEstudiantes = 0; 

const agregarEstudiantes = () => {
    let continuar = true;
    while (continuar) {
        let nombre = prompt("Ingrese el nombre del estudiante (o escriba 'fin' para terminar):").trim();

        if (nombre.toLowerCase() === 'fin') {
            continuar = false;
            break;
        }

        let promedioStr = prompt(`Ingrese el promedio de ${nombre} (0-10):`);
        let promedio = parseFloat(promedioStr);

        if (nombre && !isNaN(promedio) && promedio >= 0 && promedio <= 10) {
            estudiantes[contadorEstudiantes] = { nombre: nombre, promedio: promedio };
            contadorEstudiantes++; 
            alert(`promedio agregado.`);
        } else {
            alert('credenciales incorrectas.');
        }
    }
};


const calcularYMostrarResultados = () => {
    if (contadorEstudiantes === 0) {
        document.writeln("No hay estudiantes ingresados para calcular los resultados.<br>");
        return;
    }

    let sumaPromedios = 0;
    let mejorPromedioEstudiante = { nombre: "", promedio: -1 }; 
    
    for (let i = 0; i < contadorEstudiantes; i++) {
        const estudianteActual = estudiantes[i];
        sumaPromedios += estudianteActual.promedio;

        if (estudianteActual.promedio > mejorPromedioEstudiante.promedio) {
            mejorPromedioEstudiante = estudianteActual;
        }
    }

    const promedioGeneral = sumaPromedios / contadorEstudiantes;

    document.writeln("---<br>");
    document.writeln("<h2>Resultados Académicos:</h2><br>");
    document.writeln(`<strong>Promedio General:</strong> ${promedioGeneral.toFixed(2)}<br>`);
    document.writeln(`<strong>Estudiante con Mejor Promedio:</strong> ${mejorPromedioEstudiante.nombre} (${mejorPromedioEstudiante.promedio.toFixed(2)})<br><br>`);

    document.writeln("<h3>Lista de Estudiantes (Promedio Descendente):</h3><br>");
    

    let estudiantesCopia = [];
    for (let i = 0; i < contadorEstudiantes; i++) {
        estudiantesCopia[i] = estudiantes[i];
    }


    estudiantesCopia.sort((a, b) => b.promedio - a.promedio);


    for (let i = 0; i < contadorEstudiantes; i++) {
        const estudiante = estudiantesCopia[i];
        document.writeln(`${estudiante.nombre}: ${estudiante.promedio.toFixed(2)}<br>`);
    }
    document.writeln("---<br>");
};


agregarEstudiantes();


calcularYMostrarResultados();