import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from 'src/apis/users/entities/user.entity';
import * as bcrypt from 'bcrypt';

@Resolver()
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService, //
  ) {}

  @Mutation(() => User)
  async createUser(
    @Args('email') email: string, //
    @Args('password') password: string, //
    @Args('name') name: string, //
    @Args({ name: 'age', type: () => Int }) age: number, //
  ) {
    const hashedPassword = await bcrypt.hash(password, 10.2);
    return this.usersService.create({ email, hashedPassword, name, age });
  }
}
