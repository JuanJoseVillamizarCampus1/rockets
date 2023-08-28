import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Astronauta } from './schemas/astronautas';
import { Model } from 'mongoose';
@Injectable()
export class AstronautasService {
    constructor(
        @InjectModel(Astronauta.name) private astronautaModel:Model<Astronauta>
    ){}
    async create (astronauta:any){
        const createAstronauta = new this.astronautaModel(astronauta)
        return createAstronauta.save()
    }
}
