import { AccessibilityEntity } from './../accessibility/entities/accessibility.entity';
import {
  Injectable,
  NotFoundException,
  UnauthorizedException
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { hash } from 'argon2';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
    @InjectRepository(AccessibilityEntity)
    private accessibilityRepository: Repository<AccessibilityEntity>
  ) {}

  async create(createUserDto: CreateUserDto) {
    try {
      createUserDto.password = await hash(createUserDto.password);
      const user = this.usersRepository.create(createUserDto);
      const accessibility = this.accessibilityRepository.create(
        createUserDto.accessibilities
      );
      user.accessibilities = accessibility;
      // accessibility.user = user;
      await this.accessibilityRepository.save(accessibility);
      const saved = await this.usersRepository.save(user);
      delete saved.createdAt;
      delete saved.updatedAt;
      delete saved.hashedRefreshToken;
      delete saved.accessibilities.id;
      delete saved.accessibilities.updatedAt;
      delete saved.accessibilities.createdAt;
      return saved;
    } catch (error) {
      throw new UnauthorizedException(
        'Email já está em uso. Tente fazer login'
      );
    }
  }

  async findAll() {
    return await this.usersRepository.find({
      relations: ['reviews', 'accessibilities'],
      select: {
        email: true,
        id: true,
        name: true,
        reviews: {
          comment: true,
          grade: true,
          id: true
        },
        suports: {
          id: true,
          createdAt: true,
          message: true
        }
      }
    });
  }

  async findOneById(id: string) {
    const user = await this.usersRepository.findOne({
      where: {
        id
      },
      relations: ['reviews', 'suports', 'favorites']
    });
    delete user.createdAt;
    delete user.updatedAt;
    delete user.hashedRefreshToken;
    delete user.accessibilities.id;
    delete user.accessibilities.updatedAt;
    delete user.accessibilities.createdAt;
    return user;
  }

  async findOneByEmail(email: string) {
    const user = await this.usersRepository.findOne({
      where: {
        email
      },
      relations: ['reviews', 'suports', 'favorites']
    });
    if (!user) throw new NotFoundException('Usuário não encontrado');

    delete user.createdAt;
    delete user.updatedAt;
    delete user.hashedRefreshToken;
    delete user.accessibilities.id;
    delete user.accessibilities.updatedAt;
    delete user.accessibilities.createdAt;
    delete user.establishment_suggestions;
    delete user.favorites;
    delete user.reviews;
    delete user.suports;
    return user;
  }

  async findOneOrFail(options: FindOneOptions<UserEntity>) {
    try {
      return await this.usersRepository.findOneOrFail({
        ...options,
        relations: ['reviews', 'accessibilities', 'suports', 'favorites']
      });
    } catch (error) {
      throw new NotFoundException('Usuário não encontrado.');
    }
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    if (updateUserDto.password) {
      updateUserDto.password = await hash(updateUserDto.password);
    }
    const user = await this.findOneOrFail({ where: { id } });
    this.usersRepository.merge(user, updateUserDto);
    const saved = await this.usersRepository.save(user);
    delete saved.password;
    delete saved.createdAt;
    delete saved.updatedAt;
    delete saved.hashedRefreshToken;
    delete saved.accessibilities.id;
    delete saved.accessibilities.updatedAt;
    delete saved.accessibilities.createdAt;
    delete saved.establishment_suggestions;
    delete saved.favorites;
    delete saved.reviews;
    delete saved.suports;
    return saved;
  }

  async removeById(id: string) {
    return await this.usersRepository.delete({ id });
  }

  async removeByEmail(email: string) {
    return await this.usersRepository.delete({ email });
  }
}
