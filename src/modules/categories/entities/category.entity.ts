import { Product } from 'src/modules/products/entities/product.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Category {

  constructor(id: number, name: string, image: Buffer) {
    this.id = id;
    this.name = name;
    this.image = image;
  }

  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ unique: true, nullable: false })
  public name: string;

  @Column({ type: 'bytea' })
  public image: Buffer;

  @OneToMany(() => Product, (product) => product.category)
  public products: Promise<Product[]> | undefined;

}
