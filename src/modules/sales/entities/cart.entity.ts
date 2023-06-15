import {
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Product_list } from './product_list.entity';

@Entity()
export class Cart {

  @PrimaryGeneratedColumn()
  public id!: number;

  @OneToOne(() => User, (user) => user.cart, { onDelete: 'CASCADE' })
  @JoinColumn()
  public user!: User;

  @OneToMany(() => Product_list, (product_list) => product_list.cart)
  public product_lists!: Promise<Product_list[]>;

}
