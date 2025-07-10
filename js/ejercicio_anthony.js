function sistemaAcademico() {
    let numEstudiantes;
    let estudiantes = [];
    let sumaPromedios = 0;
    let estudianteMejorPromedio = null;

    numEstudiantes = parseInt(prompt("Ingrese el numero de estudiantes:"));
    if (isNaN(numEstudiantes) || numEstudiantes <= 0) {
        console.log("Numero de estudiantes invalido.");
        return;
    }

    for (let i = 0; i < numEstudiantes; i++) {
        let nombre = prompt(`Ingrese el nombre del estudiante ${i + 1}:`).trim();
        if (nombre === "") {
            nombre = `Estudiante ${i + 1}`;
        }

        let promedio = parseFloat(prompt(`Ingrese el promedio de ${nombre}:`));
        if (isNaN(promedio) || promedio < 0 || promedio > 100) {
             promedio = 0;
            console.log(`Advertencia: Promedio invalido para ${nombre}, se establecio a 0.`);
        }

        const estudiante = { nombre: nombre, promedio: promedio };
        estudiantes.push(estudiante);
        sumaPromedios += promedio;

        if (estudianteMejorPromedio === null || estudiante.promedio > estudianteMejorPromedio.promedio) {
            estudianteMejorPromedio = estudiante;
        }
    }

    let promedioGeneral = numEstudiantes > 0 ? sumaPromedios / numEstudiantes : 0;
    const estudiantesOrdenados = [...estudiantes].sort((a, b) => b.promedio - a.promedio);

    console.log("\n--- Reporte Academico ---");
    console.log(`Promedio General: ${promedioGeneral.toFixed(2)}`);

    if (estudianteMejorPromedio) {
        console.log(`Mejor Estudiante: ${estudianteMejorPromedio.nombre} (${estudianteMejorPromedio.promedio.toFixed(2)})`);
    } else {
        console.log("No hay datos de estudiantes.");
    }

    console.log("\nLista de Estudiant");
    estudiantesOrdenados.forEach(est => {
        console.log(`${est.nombre}: ${est.promedio.toFixed(2)}`);
    });

} 

