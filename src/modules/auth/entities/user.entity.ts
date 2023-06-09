import { Cart } from '../../sale/entities/cart.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ unique: true, nullable: false })
  public email!: string;

  @Column({ unique: false, nullable: false })
  public first_name!: string;

  @Column({ unique: false, nullable: false })
  public last_name!: string;

  @Column({ unique: false, nullable: false })
  public password!: string;

  @Column({ type: 'bytea' })
  public image!: Buffer;

  @OneToOne(() => Cart, (cart) => cart.user)
  public cart!: Cart;

}
