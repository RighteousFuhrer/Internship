import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesController } from './controllers/categories.controller';
import { Category } from './entities/category.entity';
import { Product } from './entities/product.entity';
import { CategoriesServiceImpl } from './services/categories.service';
import { CategoriesService } from './services/categories.service.abstract';
import { ProductsService } from './services/products.service.abstract';
import { ProductsServiceImpl } from './services/products.service';
import { ProductRepository } from './repositories/product.repository';
import { CategoryRepository } from './repositories/category.repository';
import { ProductsController } from './controllers/products.controller';

const categoriesService = {
  provide: CategoriesService,
  useClass: CategoriesServiceImpl,
};
const productService = {
  provide: ProductsService,
  useClass: ProductsServiceImpl,
};

@Module({
  imports: [TypeOrmModule.forFeature([Category, Product])],
  controllers: [CategoriesController, ProductsController],
  providers: [
    productService,
    categoriesService,
    ProductRepository,
    CategoryRepository,
  ],
})
export class SalesModule {}
