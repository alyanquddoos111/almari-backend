import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { LoginDTO } from './dto/userLogin.dto';
import { SignUpDTO } from './dto/userSignup.dto';
import { CartDTO } from './dto/addToCart.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('all')
  getAllUsers() {
    return this.userService.findAllUsers();
  }

  @Post('login')
  loginUser(@Body() loginDTO:LoginDTO){
    return this.userService.loginUser(loginDTO);
  }

  @Post ('signup')
  signupUser(@Body() signupDTO:SignUpDTO){
    return this.userService.registerUser(signupDTO);
  }

  @Post ('addToCart')
  addToCart(@Body() cartDTO:CartDTO){
    return this.userService.addToCart(cartDTO);
  }

  @Post ('getCart')
  getCart(@Body() username:any){
    return this.userService.getAllCartedData(username);
  }
}
