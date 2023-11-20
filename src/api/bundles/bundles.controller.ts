import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BundlesService } from './bundles.service';
import { CreateBundleDto } from './dto/create-bundle.dto';
import { UpdateBundleDto } from './dto/update-bundle.dto';

@Controller('bundles')
export class BundlesController {
  constructor(private readonly bundlesService: BundlesService) {}

  @Post()
  create(@Body() createBundleDto: CreateBundleDto) {
    return this.bundlesService.create(createBundleDto);
  }

  @Get()
  findAll() {
    return this.bundlesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bundlesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBundleDto: UpdateBundleDto) {
    return this.bundlesService.update(+id, updateBundleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bundlesService.remove(+id);
  }
}
