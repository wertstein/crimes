import { Controller, Get, Req, Post, Param, Body } from '@nestjs/common';
import { Request } from 'express';
import { Observable, of } from 'rxjs';
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
  async findAll(@Req() request: Request) {
    return await this.crimesService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id): Observable<any> {
  //   return of(this.crimesService.findOne(id));
  // }
}
