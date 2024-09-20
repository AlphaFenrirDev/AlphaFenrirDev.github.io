let gifInterval; // Guardamos el intervalo de creación de GIFs

document.getElementById('trustMeButton').addEventListener('click', function() {

  // Oculta el botón
  this.style.display = 'none';

  // Cambia el fondo al efecto arcoíris
  document.getElementById('container').classList.add('rainbow-background');

  // Muestra el GIF principal en el centro
  const mainGif = document.getElementById('mainGif');
  mainGif.style.display = 'block';
  mainGif.style.zIndex = 20;

  // Reproduce la música
  const music = document.getElementById('Music');
  music.play();

  // Cambia el fondo
  document.body.classList.add('rainbow-background');

  // Elimina todos los GIFs flotantes existentes
  function clearFloatingGifs() {
    const floatingGifs = document.querySelectorAll('.floating-gif');
    floatingGifs.forEach(gif => gif.remove()); // Elimina cada GIF flotante
  }

  // Crea múltiples GIFs flotantes (al menos 15 al mismo tiempo)
  function createFloatingGif() {
    // Limpiamos los GIFs anteriores antes de generar nuevos
  

    // Definimos un rango de velocidades
    const speedRange = [5, 10]; // Velocidades en segundos (5s a 10s)

    // Crear nuevos GIFs
    for (let i = 0; i < 15; i++) { // 15 GIFs flotantes
      const gif = document.createElement('img');
      gif.src = 'assets/eevee-dance.gif'; // Cambia la ruta al GIF local o URL
      gif.classList.add('floating-gif');

      // Determinamos si el GIF vendrá desde la izquierda o la derecha
      const fromLeft = Math.random() > 0.5;

      // Posicionamiento inicial fuera de la pantalla
      gif.style.position = 'absolute'; // Asegúrate de que el GIF se posicione correctamente
      gif.style.top = Math.random() * 100 + '%'; // Posición vertical aleatoria dentro del contenedor
      gif.style.left = fromLeft ? '-10%' : '100%'; // Posición horizontal inicial

      // Añade el GIF al contenedor
      document.getElementById('container').appendChild(gif);

      // Generar una duración aleatoria para la animación
      const duration = (speedRange[0] + Math.random() * (speedRange[1] - speedRange[0])).toFixed(2); // Entre 5s y 10s
      gif.style.animation = `moveGif ${duration}s linear infinite`;
      gif.style.animationDirection = fromLeft ? 'normal' : 'reverse'; // Dirección de la animación

      // Definir la animación en CSS
      const styleSheet = document.styleSheets[0];
      styleSheet.insertRule(`
        @keyframes moveGif {
          0% { left: ${fromLeft ? '-10%' : '100%'}; }
          100% { left: ${fromLeft ? '100%' : '-10%'}; }
        }
      `, styleSheet.cssRules.length);
    }
  }

  // Bucle para generar nuevas tandas de GIFs cada 10 segundos
  gifInterval = setInterval(createFloatingGif, 30000); // Nueva tanda cada 10 segundos
});
