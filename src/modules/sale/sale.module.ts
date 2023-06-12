import { Module } from '@nestjs/common';
import { CategoriesService } from './services/categories.service';
import { ProductsService } from './services/products.service';
import { CategoriesController } from './controllers/categories.controller';
import { ProductsController } from './controllers/products.controller';

@Module({
  controllers: [ProductsController, CategoriesController],
  providers: [CategoriesService, ProductsService],
})
export class AuthModule {}
