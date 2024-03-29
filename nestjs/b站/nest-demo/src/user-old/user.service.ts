import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity'

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private readonly user: Repository<User>) { }

  // 创建数据
  create(createUserDto: CreateUserDto) {
    const data = new User()
    console.log(data)
    data.name = createUserDto.name
    data.desc = createUserDto.desc
    return this.user.save(data);
  }

  // 查询数据
  findAll() {
    return 'this is a dotg'
    // query: { keyWord: string }
    // return this.user.find({
    //   where: {
    //     name: Like(`%${query.keyWord}%`)
    //   }
    // })
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
