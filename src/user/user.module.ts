import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Userlogin } from 'src/entities/Userlogin';
import { UserInfo } from 'src/entities/Userinfo';
import { DBSequenceService } from 'src/dbService.service';
import { Cartdata } from 'src/entities/Cartdata';

@Module({
  imports: [
    TypeOrmModule.forFeature([Userlogin,UserInfo,Cartdata]),
  ],
  controllers: [UserController],
  providers: [UserService,DBSequenceService],
})
export class UserModule {}
