import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CampersModule } from './campers/campers.module';
import { AstronautasModule } from './astronautas/astronautas.module';


@Module({
  imports: [CampersModule,MongooseModule.forRoot('mongodb+srv://juanjvs1409:astronautas12345@clusterastronautas.rj8lqx6.mongodb.net/astronautasDB'), AstronautasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
