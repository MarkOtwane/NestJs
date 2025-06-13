import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.createCats(
      createCatDto.name,
      createCatDto?.age,
      createCatDto.breed,
    );
  }

  @Get()
  findAll() {
    return this.catsService.getAllCats();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.catsService.getCatById(+id);
  }

  @Patch(':id')
  upDate(@Param('id') id: number, @Body() updateCatDto: UpdateCatDto) {
    const { name, breed, age } = updateCatDto;
    return this.catsService.updateCats(id, name, breed, age);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.catsService.deleteCat(+id);
  }
}
