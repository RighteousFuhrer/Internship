import { Product } from './product.entity';
import { Cart } from './cart.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product_list {

  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ nullable: false, default: 1 })
  public quontity!: number;

  @ManyToOne(() => Product, (product) => product.product_lists)
  public product!: Product;

  @ManyToOne(() => Cart, (cart) => cart.product_lists, { onDelete: 'CASCADE' })
  public cart!: Cart;

}
