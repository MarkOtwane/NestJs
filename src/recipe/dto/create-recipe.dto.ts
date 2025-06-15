import { IsString, IsOptional } from 'class-validator';

export class CreateRecipeDto {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString()
  title: string;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsOptional()
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString()
  description?: string;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString()
  ingredients: string;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString()
  instructions: string;
}
