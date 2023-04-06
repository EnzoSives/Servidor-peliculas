import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PeliculaService } from './pelicula.service';
import { Pelicula } from './pelicula';

@Controller('peliculas')
export class PeliculaController {
  constructor(private peliculaService: PeliculaService) {}

  @Get()
  public getPeliculas(): Pelicula[] {
    return this.peliculaService.getPeliculas();
  }

  @Get(':id')
  public getPelicula(@Param('id') id): Pelicula {
    return this.peliculaService.getPelicula(parseInt(id));
  }
  @Get(':genero')
  public getPeliculasPorGenero(@Param('genero') genero: string): Pelicula[] {
    return this.peliculaService.getPeliculasPorGenero(genero);
  }
  @Post()
  create(@Body() pelicula: any): string {
    return this.peliculaService.addPelicula(pelicula);
  }

  @Delete(':id')
  public deletePelicula(@Param('id') id: number): string {
    return this.peliculaService.deletePelicula(id);
  }

  @Put(':id')
  public update(@Body() pelicula: any, @Param('id') id: number): string {
    return this.peliculaService.updatePelicula(id, pelicula);
  }
}
