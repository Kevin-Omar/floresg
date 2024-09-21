// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Cuando te vi sentí algo raro por dentro", time: 8 },
  { text: "Una mezcla de miedo con locura", time: 13 },
  { text: "Y tu mirada, me juro que si te pierdo", time: 17 },
  { text: "Habré perdido la más grande fortuna", time: 20 },
  { text: "No sé nada de tu historia", time: 26 },
  { text: "Ni de tu filosofía", time: 30 },
  { text: "Hoy te escribo sin pensar", time: 35 },
  { text: "Y sin ortografía", time: 37 },
  { text: "Para aprender a quererte", time: 45 },
  { text: "Voy a estudiar cómo se cumplen tus sueños", time: 49 },
  { text: "Voy a leerte siempre muy lentamente", time: 53 },
  { text: "Quiero entenderte", time: 58 },
  { text: "Cuando te vi, tuve un buen presentimiento", time: 62 },
  { text: "De esos que llegan una vez en la vida", time: 66 },
  { text: "Quiero tenerte aunque sea solo un momento", time: 70 },
  { text: "Y si me dejas, tal vez todos los días", time: 76 },
  { text: "No sé nada de tu historia", time: 81 },
  { text: "Ni de tu filosofía", time: 85 },
  { text: "Hoy te escribo sin pensar", time: 90 },
  { text: "Y sin ortografía", time: 92 },
  { text: "Para aprender a quererte", time: 99 },
  { text: "Voy a estudiar cómo se cumplen tus sueños", time: 101 },
  { text: "Voy a leerte siempre muy lentamente", time: 108 },
  { text: "Quiero entenderte", time: 111 },

  { text: "Para enseñarte a extrañarme", time: 116 },
  { text: "Voy a escribirte mi canción más honesta", time: 119 },
  { text: "Darte una vida con más sumas que restas", time: 122 },
  { text: "Si tú me dejas, no habrá preguntas, solo respuestas", time: 128 },

  { text: "No descansaré, solo quiero tenerte a mi lado", time: 138 },
  { text: "(Aquí a mi lado)", time: 142 },
  { text: "Ruego que mi voz", time: 147 },
  {
    text: "Te demuestre lo que te he esperado (Lo que te he esperado)",
    time: 152,
  },
  { text: "Antes de estar junto a ti", time: 157 },
  { text: "Por toda la vida", time: 161 },
  { text: "Quiero aprender a quererte", time: 163 },
  { text: "Quiero estudiar cómo se cumplen tus sueños", time: 157 },
  { text: "Voy a leerte siempre muy lentamente", time: 161 },
  { text: "Quiero entenderte", time: 165 },

  { text: "Para enseñarte a extrañarme", time: 170 },
  { text: "Voy a escribirte mi canción más honesta", time: 174 },
  { text: "Darte una vida con más sumas que restas", time: 179 },
  { text: "Si tú me dejas, no habrá preguntas, solo respuestas", time: 184 },
  { text: "Si tú me dejas, no habrá preguntas", time: 189 },
  { text: "Solo respuestas", time: 200 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);