import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { productProviders } from './product.repository';
import { ProductService } from './product.service';

@Module({
  imports: [],
  controllers: [ProductController],
  providers: [ProductService, ...productProviders],
})
export class ProductModule {}
