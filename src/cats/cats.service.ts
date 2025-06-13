import { Injectable } from '@nestjs/common';
import { Cat } from './interface/cats.interface';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

@Injectable()
export class CatsService {
  create(name: string, breed: string, age: number, createCatDto: CreateCatDto) {
    throw new Error('Method not implemented.');
  }
  findAll() {
    throw new Error('Method not implemented.');
  }
  findOne(arg0: number) {
    throw new Error('Method not implemented.');
  }
  update(arg0: number, updateCatDto: UpdateCatDto) {
    throw new Error('Method not implemented.');
  }
  remove(arg0: number) {
    throw new Error('Method not implemented.');
  }
  private cats: Cat[] = [
    {
      name: 'Mercedes',
      age: 2,
      breed: 'Hig breed',
      id: 1,
    },
    {
      name: 'Mercedes',
      age: 7,
      breed: 'Hig breed',
      id: 2,
    },
    {
      name: 'Mercedes',
      age: 5,
      breed: 'Hig breed',
      id: 3,
    },
  ];

  createCats(name: string, age: number, breed: string): Cat {
    const id = this.cats.length + 1;
    const cat: Cat = {
      id,
      name,
      age,
      breed,
    };
    this.cats.push(cat);
    return cat;
  }

  getAllCats(): Cat[] {
    return this.cats;
  }

  getCatById(id: number): Cat | undefined {
    return this.cats.find((cat) => cat.id === id);
  }

  updateCats(
    id: number,
    name: string,
    breed: string,
    age: number,
  ): Cat | undefined {
    const cat = this.getCatById(id);
    if (cat) {
      cat.id = id;
      cat.name = name;
      cat.breed = breed;
      cat.age = age;
      return cat;
    }
    return cat;
  }

  deleteCat(id: number): { message: string } {
    this.cats = this.cats.filter((cat) => cat.id !== id);
    return { message: `cat with ${id} deleted successfully` };
  }
}
