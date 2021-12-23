class Usuario {
    constructor(nombre, apellido, mascotas, libros) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    } 
    getFulName = () => {
        console.log(`mi nombre es ${this.nombre} ${this.apellido}`)
    }
    addMascotas = () => {
        this.mascotas = []
        this.mascotas.push()
    }
    countMascotas = () => {
        console.log(`Usted tiene ${this.mascotas}`)
    }
    addBook = () => {
        this.libros = [{nombre: '', autor: ''}]
        this.libros.push()
    }
    getBookNames = () => {
        console.log(this.libros.nombre)
    }
}
const usuario1 = new Usuario('perro', 'gato')
usuario1.addMascotas()
usuario1.countMascotas()
    
