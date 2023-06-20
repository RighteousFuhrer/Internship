import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './product.entity';

@Entity()
export class Category {

  @PrimaryGeneratedColumn('uuid')
  public id!: string;

  @Column({ unique: true, nullable: false })
  public name!: string;

  @Column({ type: 'bytea' })
  public image!: Buffer;

  @OneToMany(() => Product, (product) => product.category)
  public products!: Promise<Product[]>;

}
