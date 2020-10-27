import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { createProductDTO, updateProductDTO } from './product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  @Get()
  async getAll() {
    return this.productService.getAll();
  }
  
  @Get('quantity')
  async quantity() {
    return this.productService.quantity();
  }
  @Get('min')
  async min() {
    return this.productService.min();
  }
  @Get('max')
  async max() {
    return this.productService.max();
  }
  @Get('lowStock')
  async lowStock() {
    return this.productService.lowStock();
  }
  @Get(':id')
  async getOne(@Param('id') id: number) {
    return this.productService.findOne(id);
  }

  @Post()
  async create(@Body() product: createProductDTO) {
    return this.productService.create(product);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() product: updateProductDTO) {
    return this.productService.update(id, product);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.productService.delete(id);
  }
}
