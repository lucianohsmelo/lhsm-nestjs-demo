import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor() {
    this.users = [
      {
        userId: 1,
        username: 'john',
        password: 'changeme',
      },
      {
        userId: 2,
        username: 'chris',
        password: 'secret',
      },
    ];
  }

  async findOne(username: string): Promise<User | undefined> {
    console.log(username);
    return this.users.find((user) => user.username === username);
  }
}
