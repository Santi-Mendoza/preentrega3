class Alumno {
    constructor(nombre, nota){
        this.nombre = nombre
        this.nota = nota
    }
}

let alumnos = []
const jsonAlmacenados = localStorage.getItem('alumnos')
if (jsonAlmacenados){
    alumnos = JSON.parse(jsonAlmacenados)
}


const formDatos = document.querySelector('#datos')
const inputNombre = document.querySelector('#inputNombre')
const inputNota = document.querySelector('#inputNota')
const pAlumnos = document.querySelector('#pAlumnos')

formDatos.addEventListener('submit', (evento) => {
    evento.preventDefault()

    const nuevoAlumno = new Alumno(inputNombre.value, inputNota.value)
    alumnos.push(nuevoAlumno)
    localStorage.setItem('alumnos', JSON.stringify(alumnos))

    actualizacion()

})

function actualizacion(){
    const soloNombres = alumnos.map(u => u.nombre)
    pAlumnos.innerHTML = soloNombres.join(', ')
}