import { Cart } from 'src/modules/carts/entities/cart.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product_list {

  constructor(
    id: number,
    price: number,
    name: string,
    total_sold: number,
    image: Buffer,
  ) {
    this.id = id;
    this.price = price;
    this.name = name;
    this.total_sold = total_sold;
    this.image = image;
  }

  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ unique: true, nullable: false })
  public name: string;

  @Column({ nullable: false })
  public price: number;

  @Column({ nullable: false, default: 0 })
  public total_sold: number;

  @Column({ type: 'bytea' })
  public image: Buffer;

  @ManyToOne(() => Cart, (cart) => cart.product_lists, { onDelete: 'CASCADE' })
  public cart: Cart | undefined;

}
