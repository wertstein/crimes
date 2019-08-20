import { Controller, Get, Req, Post, Param, Body } from '@nestjs/common';
import { CreateCrimeDto } from './dto/create-crime.dto';
import { CrimesService } from './crimes.service';

@Controller('crimes')
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
    return await this.crimesService.findOne(id);
  }
}
