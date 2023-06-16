import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { User } from '../entities/user.entity';

@Injectable()
export class UserRepository extends Repository<User> {

  constructor(_dataSource: DataSource) {
    super(User, _dataSource.createEntityManager());
  }

}
