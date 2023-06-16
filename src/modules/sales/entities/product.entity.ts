import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Category } from './category.entity';
import { Product_list } from './product_list.entity';

@Entity()
export class Product {

  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ unique: true, nullable: false })
  public name!: string;

  @Column({ nullable: false })
  public price!: number;

  @Column({ nullable: false, default: 0 })
  public total_sold!: number;

  @Column({ type: 'bytea' })
  public image!: Buffer;

  @OneToMany(() => Product_list, (product_list) => product_list.product)
  public product_lists!: Promise<Product_list[]>;

  @ManyToOne(() => Category, (category) => category.products, {
    onDelete: 'SET NULL',
  })
  public category!: Category;

}
