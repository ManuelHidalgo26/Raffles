// Interactividad del menú hamburguesa
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

const participants = ["Participante 1", "Participante 2", "Participante 3", "Participante 4", "Participante 5"];

// Función para mostrar participantes
function mostrarParticipantes() {
    const sorteoBox = document.getElementById("sorteo-box");
    participants.forEach(participante => {
        const span = document.createElement('span');
        span.textContent = participante;
        span.style.display = 'block';
        sorteoBox.appendChild(span);
    });
}

// Función para sortear al ganador
function sortearGanador() {
    const sorteoBox = document.getElementById("sorteo-box");
    sorteoBox.innerHTML = ''; // Limpia el contenido
    mostrarParticipantes(); // Muestra participantes
    
    setTimeout(() => {
        const participantesElementos = sorteoBox.children;
        const indiceGanador = Math.floor(Math.random() * participantesElementos.length);
        const ganador = participantesElementos[indiceGanador].textContent;
        alert(`El ganador es: ${ganador}`);
    }, 1000);
}

document.getElementById('iniciar-sorteo').addEventListener('click', sortearGanador);
