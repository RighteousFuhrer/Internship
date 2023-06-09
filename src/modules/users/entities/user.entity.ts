import { Cart } from 'src/modules/carts/entities/cart.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {

  constructor(
    id: number,
    email: string,
    password: string,
    first_name: string,
    last_name: string,
    image: Buffer,
  ) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.first_name = first_name;
    this.last_name = last_name;
    this.image = image;
  }
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ unique: true, nullable: false })
  public email: string;

  @Column({ unique: false, nullable: false })
  public first_name: string;

  @Column({ unique: false, nullable: false })
  public last_name: string;

  @Column({ unique: false, nullable: false })
  public password: string;

  @Column({ type: 'bytea' })
  public image: Buffer;

  @OneToOne(() => Cart, (cart) => cart.user)
  public cart: Cart | undefined;

}
