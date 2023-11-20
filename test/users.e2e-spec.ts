import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { UsersModule } from './../src/api/users/users.module';
import { UsersService } from './../src/api/users/users.service';
import { INestApplication } from '@nestjs/common';

describe('Users', () => {
  let app: INestApplication;
  const usersService = { findAll: () => `This action returns all users` };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [UsersModule],
    })
      .overrideProvider(UsersService)
      .useValue(usersService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`/GET users`, async () => {
    return await request(app.getHttpServer())
      .get('/users')
      .expect(200)
      .expect(usersService.findAll());
  });

  afterAll(async () => {
    await app.close();
  });
});
