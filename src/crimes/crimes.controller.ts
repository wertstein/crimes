import { Controller, Get, Req, Post, Param, Body } from '@nestjs/common';
import { Request } from 'express';
import { Observable, of } from 'rxjs';
import { CreateCrimeDto } from './dto/create-crime.dto';
import { CrimesService } from './crimes.service';

@Controller('crimes')
export class CrimesController {
  constructor(private readonly crimesService: CrimesService) {}

  @Post()
  create(@Body() createCatDto: CreateCrimeDto) {
    this.crimesService.create(createCatDto);
  }

  @Get()
  findAll(@Req() request: Request): Observable<any[]> {
    return of(this.crimesService.findAll());
  }

  @Get(':id')
  findOne(@Param('id') id): Observable<any> {
    return of(this.crimesService.findOne(id));
  }
}
