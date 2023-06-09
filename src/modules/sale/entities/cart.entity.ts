import { Product_list } from './product_list.entity';
import { User } from '../../auth/entities/user.entity';
import {
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

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
