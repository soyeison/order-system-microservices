import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserRepository } from './repository/user.repository';

@Module({
  providers: [UserService, UserRepository],
  controllers: [UserController],
})
export class UserModule {}