import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesController } from './controllers/categories.controller';
import { ProductsController } from './controllers/products.controller';
import { Category } from './entities/category.entity';
import { Product } from './entities/product.entity';
import { CategoryRepository } from './repositories/category.repository';
import { ProductRepository } from './repositories/product.repository';
import { CategoriesServiceImpl } from './services/categories/categories.service';
import { CategoriesService } from './services/categories/categories.service.abstract';
import { ProductsServiceImpl } from './services/products/products.service';
import { ProductsService } from './services/products/products.service.abstract';

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
