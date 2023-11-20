import { Module } from '@nestjs/common';
import { BundlesService } from './bundles.service';
import { BundlesController } from './bundles.controller';

@Module({
  controllers: [BundlesController],
  providers: [BundlesService],
})
export class BundlesModule {}
