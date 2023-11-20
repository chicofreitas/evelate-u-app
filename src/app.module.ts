import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './api/users/users.module';
import { RolesModule } from './api/roles/roles.module';
import { CoursesModule } from './api/courses/courses.module';
import { BundlesModule } from './api/bundles/bundles.module';
import { CompaniesModule } from './api/companies/companies.module';

@Module({
  imports: [
    UsersModule,
    RolesModule,
    CoursesModule,
    BundlesModule,
    CompaniesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
