import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from 'src/interfaces/user.interface';

@Injectable()
export class UsersService {
  private users: User[] = [];

  create(userDto: CreateUserDto): CreateUserDto {
    this.store(userDto);
    return userDto;
  }

  async findAll(): Promise<User[]> {
    if (!this.users) {
      throw new NotFoundException('users not found');
    }
    return this.users;
  }

  async findOne(id: number): Promise<User> {
    const user = this.findById(id);
    if (!user) {
      throw new NotFoundException('user not found');
    }
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto): User {
    const userToUpdate = this.findById(id);
    if (!userToUpdate) {
      throw new NotFoundException('user not found');
    }
    userToUpdate.email = updateUserDto.email;
    userToUpdate.password = updateUserDto.password;

    return this.save(userToUpdate);
  }

  async remove(id: number): Promise<void> {
    this.deleteById(id);
  }

  /**
   * stores a user to the database.
   *
   * @param {CreateUserDto} userDto - The user data to be stored.
   * @return {User} The stored user entity.
   */
  store(userDto: CreateUserDto): User {
    const userEntity = {
      id: this.users.length + 1,
      ...userDto,
    };
    this.users.push(userEntity);
    return userEntity;
  }

  /**
   * Saves the given user to the database.
   *
   * @param {User} user - The user to be saved.
   * @return {User} The saved user.
   */
  save(user: User): User {
    this.remove(user.id);
    this.store(user);
    return user;
  }
  /**
   * Finds a user in the array of users by their ID.
   *
   * @param {number} id - The ID of the user.
   * @return {object | undefined} The user object with the matching ID, or undefined if not found.
   */
  findById(id: number): User | undefined {
    return this.users.find((user) => user.id === id);
  }

  /**
   * Deletes a user with the specified ID.
   *
   * @param {number} id - The ID of the user to be deleted.
   * @return {void} - This function does not return a value.
   */
  deleteById(id: number): void {
    this.users = this.users.filter((user) => user.id !== id);
  }
}
