function timeConversion(s) {
    var partes = s.split(":");
    var hora = parseInt(partes[0]);
    var minutos = parseInt(partes[1]);
    var segundos = parseInt(partes[2].replace(/[^\d]/g, ''));

    if (isNaN(hora)) {
        return null;
    }

    // Si la hora es "12" y la cadena incluye "AM", establecer la hora a "0"
    if (hora === 12 && s.includes("AM")) {
        hora = 0;
    }

    // Si la hora no es "12" y la cadena incluye "PM", sumar 12 a la hora
    if (hora !== 12 && s.includes("PM")) {
        hora += 12;
    }

    // Devolver la hora en formato de 24 horas como una cadena de texto
    return hora.toString().padStart(2, '0') + ":" + minutos.toString().padStart(2, '0') + ":" + segundos.toString().padStart(2, '0');
}

//pruebas
console.log(timeConversion("07:05:45PM"));