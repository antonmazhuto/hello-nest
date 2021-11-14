import { Injectable } from '@nestjs/common';
import { createUserDto } from './dto/createUser.dto';

@Injectable()
export class UserService {
	async createUser(createUserDto: createUserDto) {
		return createUserDto
	}
}
