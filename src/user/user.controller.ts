import { Body, Controller, Post } from '@nestjs/common';
import { createUserDto } from './dto/createUser.dto';
import { UserService } from './user.service';

@Controller()
export class UserController {
	constructor(private readonly userService: UserService) { }
	@Post('users')
	async createUser(@Body('user') createUserDto: createUserDto): Promise<any> {
		console.log(createUserDto);
		return this.userService.createUser(createUserDto);
	}
}
