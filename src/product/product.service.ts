import { Inject, Injectable } from '@nestjs/common';
import { Op } from 'sequelize';
import { createProductDTO, updateProductDTO } from './product.dto';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
  constructor(
    @Inject('PRODUCT_REPOSITORY') private productRepository: typeof Product,
  ) {}
  getAll() {
    return this.productRepository.findAll();
  }
  findOne(id: number) {
    return this.productRepository.findByPk(id);
  }
  create(product: createProductDTO) {
    return this.productRepository.create<Product>({
      quantidadeEmEstoque: 0,
      ...product,
    });
  }
  update(id: number, product: updateProductDTO) {
    return this.productRepository.update(product, { where: { id: id } });
  }
  delete(id: number) {
    return this.productRepository.destroy({ where: { id: id } });
  }
  quantity() {
    return this.productRepository.count();
  }
  async min() {
    return this.productRepository.findOne({
      where: {
        quantidadeEmEstoque: await this.productRepository.min('quantidadeEmEstoque'),
      },
    });
  }
  async max() {
    return this.productRepository.findOne({
      where: {
        quantidadeEmEstoque: await this.productRepository.max('quantidadeEmEstoque'),
      },
    });
  }
  lowStock() {
    return this.productRepository.findAll({
      where: { quantidadeEmEstoque: { [Op.lt]: 5 } },
    });
  }
}
