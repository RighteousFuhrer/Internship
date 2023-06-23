import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Cart } from './cart.entity';
import { Product } from '../../sales/entities/product.entity';

@Entity()
export class Product_list {

  @PrimaryGeneratedColumn('uuid')
  public id!: string;

  @Column({ nullable: false, default: 1 })
  public quontity!: number;

  @ManyToOne(() => Product, (product) => product.product_lists)
  public product!: Product | null;

  @ManyToOne(() => Cart, (cart) => cart.product_lists, { onDelete: 'CASCADE' })
  public cart!: Cart | null;

}
