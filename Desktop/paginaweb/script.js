// script.js

function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('clock').textContent = timeString;
}

// Actualizar el reloj cada segundo
setInterval(updateClock, 1000);

// Llamar a updateClock por primera vez para evitar un segundo de retraso inicial
updateClock();