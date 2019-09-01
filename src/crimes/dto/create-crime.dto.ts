import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class CreateCrimeDto {
  @IsString()
  @IsNotEmpty()
  readonly title: string;
  @IsString()
  @IsOptional()
  readonly description: string;
}
