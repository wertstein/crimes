import {
  Injectable,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Crime } from './interfaces/crime.interface';
import { CreateCrimeDto } from './dto/create-crime.dto';

@Injectable()
export class CrimesService {
  constructor(
    @InjectModel('Crime') private readonly crimeModel: Model<Crime>,
  ) {}

  async create(createCrimeDto: CreateCrimeDto): Promise<Crime> {
    const createdCat = new this.crimeModel(createCrimeDto);

    return await createdCat.save();
  }

  async findAll(): Promise<Crime[]> {
    return await this.crimeModel.find().exec();
  }

  async findOne(id: string): Promise<Crime> {
    return await this.crimeModel.findById(id);
  }
}
