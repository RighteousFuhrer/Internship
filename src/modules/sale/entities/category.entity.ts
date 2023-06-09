import { Product } from './product.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Category {

  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ unique: true, nullable: false })
  public name!: string;

  @Column({ type: 'bytea' })
  public image!: Buffer;

  @OneToMany(() => Product, (product) => product.category)
  public products!: Promise<Product[]>;

}
