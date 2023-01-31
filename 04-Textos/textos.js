let nombre = "Carolina"
let apellido = "Acosta"
let estudiante = nombre.concat(" ", apellido)
let estudiateMayus = estudiante.toUpperCase()
let estudianteMinus = estudiante.toLocaleLowerCase()

let estudianteLength = estudiante.length
let primeraLetra = nombre.substring(0, 1)
let ultimaLetra = apellido.charAt(apellido.length - 1)
const sacarEspacio = estudiante.replace(/ /g, "")
let existe = estudiante.includes(nombre)