import { Product_list } from 'src/modules/product_lists/entities/product_list.entity';
import { User } from 'src/modules/users/entities/user.entity';
import {  Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cart {

  constructor(id: number) {
    this.id = id;
  }

  @PrimaryGeneratedColumn()
  public id: number;

  @OneToOne(() => User, (user) => user.cart, { onDelete: 'CASCADE' })
  @JoinColumn()
  public user: User | undefined;

  @OneToMany(() => Product_list, (product_list) => product_list.cart)
  public product_lists: Promise<Product_list[]> | undefined;

}
