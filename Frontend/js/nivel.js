// Archivo: Raffles/js/nivel.js

// Datos de los niveles (hardcoded por ahora)
const nivelesData = {
    1: {
        titulo: "Nivel 1 | Raffles",
        encabezado: "Detalles del Nivel 1",
        premio: "Premio: $100",
        suscripcion: "Suscripción: $5"
        // Aquí podrías añadir una lista de participantes si la tuvieras disponible en el frontend
    },
    2: {
        titulo: "Nivel 2 | Raffles",
        encabezado: "Detalles del Nivel 2",
        premio: "Premio: $200",
        suscripcion: "Suscripción: $10"
    },
    3: {
        titulo: "Nivel 3 | Raffles",
        encabezado: "Detalles del Nivel 3",
        premio: "Premio: $500",
        suscripcion: "Suscripción: $20"
    }
    // Añade más niveles aquí si los tienes
};

// Función para obtener un parámetro de la URL
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Función para cargar y mostrar los detalles del nivel
function cargarDetallesNivel() {
    const levelId = getUrlParameter('id'); // Obtener el ID del parámetro 'id' en la URL
    const nivel = nivelesData[levelId]; // Buscar los datos para ese ID

    const titleElement = document.getElementById('level-title');
    const headingElement = document.getElementById('level-heading');
    const prizeElement = document.getElementById('level-prize');
    const subscriptionElement = document.getElementById('level-subscription');
    // const sorteoBoxElement = document.getElementById('sorteo-box'); // Si quisieras actualizar participantes aquí

    if (nivel) {
        // Actualizar el título de la página
        if (titleElement) {
            titleElement.textContent = nivel.titulo;
        }
        // Actualizar el encabezado principal
        if (headingElement) {
            headingElement.textContent = nivel.encabezado;
        }
        // Actualizar el premio
        if (prizeElement) {
            prizeElement.textContent = nivel.premio;
        }
        // Actualizar la suscripción
        if (subscriptionElement) {
            subscriptionElement.textContent = nivel.suscripcion;
        }
        // Aquí podrías cargar y mostrar la lista de participantes si la tuvieras
        // if (sorteoBoxElement && nivel.participantes) { ... }

    } else {
        // Mostrar un mensaje de error si el ID no es válido o falta
        if (headingElement) {
            headingElement.textContent = "Nivel no encontrado";
        }
        if (prizeElement) {
             prizeElement.textContent = ""; // Limpiar info antigua
        }
        if (subscriptionElement) {
             subscriptionElement.textContent = ""; // Limpiar info antigua
        }
        if (titleElement) {
            titleElement.textContent = "Error | Raffles";
        }
        // if (sorteoBoxElement) { sorteoBoxElement.innerHTML = "<p>El nivel especificado no existe.</p>"; }
    }
}

// Ejecutar la función cuando la página haya cargado
document.addEventListener('DOMContentLoaded', cargarDetallesNivel);

// NOTA: La lógica actual del sorteo (sortearGanador) está en script.js.
// Podrías moverla a nivel.js si solo se usa en esta página.
// También, la lista de participantes 'participants' en script.js es global y hardcoded.
// Idealmente, esta lista debería cargarse también según el nivel.