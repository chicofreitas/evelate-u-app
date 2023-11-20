import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let usersController: UsersController;
  let usersService: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    }).compile();

    usersController = module.get<UsersController>(UsersController);
    usersService = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(usersController).toBeDefined();
  });

  describe('findAll', () => {
    it('should return a Promise containing a string.', async () => {
      const result = [];
      //https://jestjs.io/pt-BR/docs/jest-object#jestspyonobject-methodname
      jest
        .spyOn(usersService, 'findAll')
        .mockImplementation(async () => result);

      expect(await usersController.findAll()).toBe(result);
    });
  });

  describe('findOne', () => {
    it('should return a Promise containing a string.', async () => {
      const result = {
        id: 1,
        email: 'a@a.com',
        password: '123',
        name: 'test',
      };

      const id = '1';

      jest
        .spyOn(usersService, 'findOne')
        .mockImplementation(async () => result);

      expect(await usersController.findOne(id)).toBe(result);
    });
  });
});
