import { Args, Int, Mutation, Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from 'src/apis/users/entities/user.entity';
import { CreateUserInput } from './dto/createUser.input';

@Resolver()
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService, //
  ) {}

  @Mutation(() => User)
  createUser(
    @Args('email') email: string, //
    @Args('password') password: string, //
    @Args('name') name: string, //
    @Args({ name: 'age', type: () => Int }) age: number, //

    // @Args('createUserInput') createUserInput: CreateUserInput, //
  ) {
    // return this.usersService.create({ ...createUserInput });
    return this.usersService.create({ email, password, name, age });
  }
}
