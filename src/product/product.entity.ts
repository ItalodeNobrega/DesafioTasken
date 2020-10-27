import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class Product extends Model<Product> {
  @Column({ type: DataType.BIGINT, primaryKey: true })
  id: number;

  @Column
  nomeProduto: string;

  @Column
  fabricante: string;

  @Column
  quantidadeEmEstoque: number;

  @Column
  valor: number;
}
