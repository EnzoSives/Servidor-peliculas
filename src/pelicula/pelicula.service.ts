import { Injectable } from '@nestjs/common';
import { Pelicula } from './pelicula';
import * as fs from 'fs';

@Injectable()
export class PeliculaService {
  [x: string]: any;
  private static readonly CANTIDAD_PELICULAS = 10;
  private listaPeliculas: Pelicula[] = [];
  constructor() {
    this.loadPeliculas();
  }

  private loadPeliculas(): void {
    let archivo = fs.readFileSync('./src/pelicula/peliculas.csv', 'utf8');
    let datos = archivo
      .split('\n')
      .map((p) => p.replace('\r', ''))
      .map((p) => p.split(','));
    this.listaPeliculas = [];
    for (let i = 0; i < datos.length; i++) {
      let peliculas = new Pelicula(
        parseInt(datos[i][0]),
        datos[i][1],
        parseInt(datos[i][2]),
        datos[i][3],
        datos[i][4],
        datos[i][5],
        datos[i][6],
        parseInt(datos[i][7])
      );
      this.listaPeliculas.push(peliculas);
    }
  }

  public getPeliculas(): Pelicula[] {
    return this.listaPeliculas;
  }

  public getPelicula(id: number): Pelicula {
    let pelicula = null;
    // Más adelante agregar manejo de status code
    for (let i = 0; i < this.listaPeliculas.length; i++) {
      if (this.listaPeliculas[i].getIdentificador() == id) {
        pelicula = this.listaPeliculas[i];
      }
    }
    return pelicula;
  }
  

  public getPeliculasPorGenero(genero: string): Pelicula[] {
    return this.listaPeliculas.filter((pelicula) => pelicula.getGenero() === genero);
  }

  public addPelicula(peliculaNueva: any): string {
    let pelicula = new Pelicula(
      peliculaNueva.identificador,
      peliculaNueva.titulo,
      peliculaNueva.duracion,
      peliculaNueva.genero,
      peliculaNueva.imagen,
      peliculaNueva.sinopsis,
      peliculaNueva.imagen,
      peliculaNueva.fecha
    );
    if (
      pelicula.getIdentificador() &&
      pelicula.getTitulo() &&
      pelicula.getDuracion() &&
      pelicula.getGenero()
    ) {
      this.listaPeliculas.push(pelicula);
      fs.appendFileSync(
        'peliculas.csv',
        `\n${pelicula.getIdentificador()},${pelicula.getTitulo()},${pelicula.getDuracion()},${pelicula.getGenero()}`,
      );
      return 'ok';
    } else return 'parametros incorrectos';
  }

  public deletePelicula(id: number): string {
    let index = this.listaPeliculas.filter(pelicula => pelicula.getIdentificador() != id);
    if (index.length != this.listaPeliculas.length) {
      this.listaPeliculas = index;
      return "ok";
    }
    return "404";
  }

  public updatePelicula(id : number, peliculaNueva: any): string {
    let index = this.listaPeliculas.filter(pelicula => pelicula.getIdentificador() != id);

    if(index.length != this.listaPelicula.length){
      let updatePelicula = new Pelicula(peliculaNueva.identificador,peliculaNueva.titulo,peliculaNueva.duracion,peliculaNueva.genero,peliculaNueva.actores,peliculaNueva.sinopsis,peliculaNueva.imagen,peliculaNueva.fecha);
      this.deletePelicula(id);
      this.listaPeliculas.push(updatePelicula)

      return "ok";
      }
      else{
      return "404";
      }
    }
  }
