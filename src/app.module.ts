import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { PeliculaController } from './pelicula/pelicula.controller';
import { PeliculaService } from './pelicula/pelicula.service';

@Module({
  imports: [ServeStaticModule.forRoot({ rootPath: join(__dirname, '..', 'client') }),],
  controllers: [AppController, PeliculaController],
  providers: [AppService, PeliculaService],
})
export class AppModule {}
