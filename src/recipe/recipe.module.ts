import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { RecipeController } from './recipe.controller';
import { RecipesService } from './recipe.service';

@Module({
  imports: [PrismaModule],
  controllers: [RecipeController],
  providers: [RecipesService],
})
export class RecipeModule {}
