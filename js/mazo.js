const titles = [ 'El consejo', 'El desafío', 'El ambiente', 'La ley', 'La fuerza', 'Les amigues', 'La trasmutación', 'Los sentidos', 'El pecado', 'El diálogo', 'La hibridación', 'El final', 'El origen', 'La cadencia', 'El pasado', 'La magia ', 'La conexión ', 'La huella', 'La ruina', 'La colaboración ', 'La soledad', 'El detalle', 'La actualización', 'La contracara', 'El murmullo', 'Lo invisible', 'La resonancia', 'La copia', 'Lo falso', 'La familia', 'Los códigos', 'Las dimensiones', 'El espíritu', 'Los significados', 'La atmósfera', 'El status quo', 'El dorso', 'La ambigüedad', 'El karma', 'El plan' ]
const descriptions = [ '¿Cuánto celeste hay hoy en tu cielo?', 'Imaginá tener recuerdos de situaciones que nunca viviste.', 'Imaginá tu vida como un álbum de figuritas.', 'Registrá todos los likes que diste ayer.', 'Registrá tu respiración por una hora.', 'Imaginá el sabor de la felicidad.', 'Imaginá un lenguaje para los sentimientos.', 'Imaginá ser la única persona que no fuese atraída por la gravedad terrestre.', 'Recordá la última vez que te perdiste.', 'Imaginá una conversación con tu yo del futuro.', 'Imaginá tener el tamaño de una hormiga.', 'Imaginá cada alimento que consumas en un día como un sonido.', 'Resumí un sueño en tres imágenes.', 'Diagramá un mapa de todas las personas que conociste en tu vida.', 'Cerrá los ojos.', 'Diseñá una estrategia para que dos personas del curso interactúen.', 'Diseñá una forma de recorrer el campus de Villa Lynch.', 'Imaginá la vida dentro de 50 años.', 'Diseña un algoritmo para borrar.', '¿Dónde vas a aterrizar después de la pandemia?', 'Imaginá hacer todo lo que dejaste en suspenso.', 'Acostate en el suelo con una oreja y escuchá con atención.', 'Imagina todos los procesos y recursos que hacen posible tu estar aquí.', '¿Cuánto espacio ocupás?' ]
const themes = [ 'red', 'green', 'blue' ]
const sources = {
  visual: [
    { url: 'elementos/visuales/duda_permanente-vanegas _mendez.png', type: 'image' },
    { url: 'elementos/visuales/basel.jpg', type: 'image' },
    { url: 'elementos/visuales/atkins-algae_cyanotype.jpg', type: 'image' },
    { url: 'elementos/visuales/munro-field_of_light.jpg', type: 'image' },
    { url: 'elementos/visuales/cumbia.jpg', type: 'image' },
    { url: 'elementos/visuales/dakivali_my-memory.jpg', type: 'image' },
    { url: 'elementos/visuales/da_cunha-mathur.jpg', type: 'image' },
    { url: 'elementos/visuales/origen_de_los_límites-olivares.jpg', type: 'image' },
    { url: 'elementos/visuales/elementary_carule.png', type: 'image' },
    { url: 'elementos/visuales/diagrama.jpg', type: 'image' },
    { url: 'elementos/visuales/medium.jpg', type: 'image' },
    { url: 'elementos/visuales/halftone_pattern.png', type: 'image' },
    { url: 'elementos/visuales/hoch.jpg', type: 'image' },
    { url: 'elementos/visuales/cactos.jpg', type: 'image' },
    { url: 'elementos/visuales/mentes_paralelas-bocchicchio.jpg', type: 'image' },
    { url: 'elementos/visuales/oskar_schlemmer-sketches.jpg', type: 'image' },
    { url: 'elementos/visuales/soil_chromatography.jpg', type: 'image' },
    { url: 'elementos/visuales/solo_un_gesto.jpg', type: 'image' },
    { url: 'elementos/visuales/levy-love_of_corals.jpg', type: 'image' },
    { url: 'elementos/visuales/adama-fawundu.mp4', type: 'video' },
    { url: 'elementos/visuales/adam_and_eve.mp4', type: 'video' },
    { url: 'elementos/visuales/desenganno_alys.mp4', type: 'video' },
  ],
  sonoro: [
    { url: 'elementos/sonoros/alva_noto.mp3', type: 'audio' },
    { url: 'elementos/sonoros/feria.mp3', type: 'audio' },
    { url: 'elementos/sonoros/frenadas.mp3', type: 'audio' },
    { url: 'elementos/sonoros/herreria.mp3', type: 'audio' },
    { url: 'elementos/sonoros/debate.mp3', type: 'audio' },
    { url: 'elementos/sonoros/reich_wood.mp3', type: 'audio' },
    { url: 'elementos/sonoros/ruido_rosa.mp3', type: 'audio' },
    { url: 'elementos/sonoros/sonic.mp3', type: 'audio' },
    { url: 'elementos/sonoros/irreversible.mp3', type: 'audio' },
    { url: 'elementos/sonoros/sirenas.mp3', type: 'audio' },
    { url: 'elementos/sonoros/twin_peaks.mp3', type: 'audio' },
  ],
  material: [
    { url: 'elementos/materiales/algodon.jpg', type: 'image' },
    { url: 'elementos/materiales/carton.jpg', type: 'image' },
    { url: 'elementos/materiales/espejos.jpg', type: 'image' },
    { url: 'elementos/materiales/ewaste.jpg', type: 'image' },
    { url: 'elementos/materiales/hilos.jpg', type: 'image' },
    { url: 'elementos/materiales/liquido.jpg', type: 'image' },
    { url: 'elementos/materiales/papel.jpg', type: 'image' },
    { url: 'elementos/materiales/peluche.jpg', type: 'image' },
    { url: 'elementos/materiales/piel.jpg', type: 'image' },
    { url: 'elementos/materiales/plantas.jpg', type: 'image' },
    { url: 'elementos/materiales/plastico.jpg', type: 'image' },
    { url: 'elementos/materiales/vidrio.jpg', type: 'image' },
  ]
}

let availableTitles = []
let availableDescriptions = []
let availableSources = {
  visual: [],
  sonoro: [],
  material: []
}

checkAvailability()

function shuffle(deck) {
  const mixedDeck = [...deck].sort(() => Math.random() - 0.5)
  return mixedDeck
}

function createCard(cardType) {
  const source = getElement(availableSources[cardType])
  const card = { 
    type: cardType,
    title: getElement(availableTitles),
    description: getElement(availableDescriptions),
    theme: getTheme(),
    sourceType: source.type,
    source: source.url,
  }
  return card
}

function getHand() {
  checkAvailability()
  return [
    createCard('visual'),
    createCard('material'),
    createCard('sonoro'),
  ].sort(() => Math.random() - 0.5)
}

function checkAvailability() {
  if(availableTitles.length < 3) availableTitles = shuffle(titles)
  if(availableDescriptions.length < 3) availableDescriptions = shuffle(descriptions)
  if(availableSources.visual.length < 3) availableSources.visual = shuffle(sources.visual)
  if(availableSources.sonoro.length < 3) availableSources.sonoro = shuffle(sources.sonoro)
  if(availableSources.material.length < 3) availableSources.material = shuffle(sources.material)
}

function getElement(array) {
  return array.splice(0, 1)[0]
}

function getTheme() {
  const itemId = Math.floor(Math.random()*themes.length)
  return themes[itemId]
}