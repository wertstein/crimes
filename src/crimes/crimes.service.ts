import { Injectable } from '@nestjs/common';
import { Crime } from './interfaces/crime.interface';

const CRIMES: Crime[] = [
  { id: '1', title: 'MH17' },
  { id: '2', title: 'Salisbury' },
];

@Injectable()
export class CrimesService {
  private readonly crimes: Crime[] = [...CRIMES];

  create(crime: Crime) {
    this.crimes.push(crime);
  }

  findAll(): Crime[] {
    return this.crimes;
  }

  findOne(id: string): Crime {
    return this.crimes[0];
  }
}
