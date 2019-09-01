import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Param,
  Post,
  SerializeOptions,
  UseInterceptors,
} from '@nestjs/common';
import { CrimesService } from './crimes.service';
import { CreateCrimeDto } from './dto/create-crime.dto';
import { CrimeEntity } from './entities/crime';

@Controller('crimes')
@UseInterceptors(ClassSerializerInterceptor)
@SerializeOptions({
  excludePrefixes: ['_'],
})
export class CrimesController {
  constructor(private readonly crimesService: CrimesService) {}

  @Post()
  async create(@Body() createCatDto: CreateCrimeDto) {
    return await this.crimesService.create(createCatDto);
  }

  @Get()
  async findAll() {
    return await this.crimesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id) {
    let crime = await this.crimesService.findOne(id);

    crime = JSON.parse(JSON.stringify(crime)); //TODO: clarify

    return new CrimeEntity(crime);
  }
}
