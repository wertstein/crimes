import { IsString } from 'class-validator';

export class CreateCrimeDto {
  @IsString()
  readonly title: string;
}
