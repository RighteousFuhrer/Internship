import * as bcrypt from 'bcrypt';
import {
  BeforeInsert,
  Column,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Cart } from '../../cart/entities/cart.entity';

@Entity()
export class User {

  @PrimaryGeneratedColumn('uuid')
  public id!: string;

  @Column({ unique: true, nullable: false })
  public email!: string;

  @Column({ unique: false, nullable: false })
  public first_name!: string;

  @Column({ unique: false, nullable: false })
  public last_name!: string;

  @Column({ unique: false, nullable: false })
  public password!: string;

  @Column({ type: 'bytea', nullable: true })
  public image!: Buffer;

  @Column({ type: 'text', nullable: true })
  public hashedRt!: string | null;

  @OneToOne(() => Cart, (cart) => cart.user)
  public cart?: Cart;

  @BeforeInsert()
  public hashPassword = async (): Promise<void> => {
      this.password = await bcrypt.hash(this.password, 10);
    };

}
