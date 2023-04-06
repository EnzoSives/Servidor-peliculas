export class Pelicula{
    private identificador:number;
    private titulo:string;
    private actores:string;
    private sinopsis:string;
    private imagen: string;
    private duracion:number;
    private genero:string;
    private fecha:number;
    constructor(identificador:number,titulo:string,duracion:number,genero:string,actores:string,sinopsis:string,imagen:string,fecha:number){
        this.identificador = identificador;
        this.titulo = titulo;
        this.duracion = duracion;
        this.genero = genero;
        this.actores= actores;
        this.imagen = imagen;
        this.fecha = fecha;
        this.sinopsis = sinopsis;
    }

    getIdentificador(){
        return this.identificador;
    }
    getTitulo(){
        return this.titulo;
    }
    getDuracion(){
        return this.duracion;
    }
    getGenero(){
        return this.genero;
    }
    getActores(){
        return this.actores;
    }
    getImagen(){
        return this.imagen;
    }
    getSinopsis(){
        return this.sinopsis;
    }
    getFecha(){
        return this.fecha;
    }
}