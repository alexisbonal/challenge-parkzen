import { IsNotEmpty } from 'class-validator';

export class CreateParkDTO {
  @IsNotEmpty()
  firstName: string;
}
