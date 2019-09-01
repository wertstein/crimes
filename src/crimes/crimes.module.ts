import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CrimesController } from './crimes.controller';
import { CrimesService } from './crimes.service';
import { CrimeSchema } from './schemas/crime.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Crime', schema: CrimeSchema }]),
  ],
  controllers: [CrimesController],
  providers: [CrimesService],
})
export class CrimesModule {}
