import { Injectable } from '@nestjs/common';
import { CreateBundleDto } from './dto/create-bundle.dto';
import { UpdateBundleDto } from './dto/update-bundle.dto';

@Injectable()
export class BundlesService {
  create(createBundleDto: CreateBundleDto) {
    return 'This action adds a new bundle';
  }

  findAll() {
    return `This action returns all bundles`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bundle`;
  }

  update(id: number, updateBundleDto: UpdateBundleDto) {
    return `This action updates a #${id} bundle`;
  }

  remove(id: number) {
    return `This action removes a #${id} bundle`;
  }
}
