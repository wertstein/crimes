import { Expose } from 'class-transformer';

export class CrimeEntity {
  _id: string;

  @Expose()
  get id() {
    return this._id;
  }

  constructor(partial: Partial<CrimeEntity>) {
    Object.assign(this, partial);
  }
}
