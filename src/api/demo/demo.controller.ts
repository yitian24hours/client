import { Controller, Get, Query } from '@nestjs/common';
import { DemoService } from './demo.service';
import { GetDemaciaHeroByIdDto } from './dto/getDemaciaHeroById.dto';

@Controller('demo')
export class DemoController {
  constructor(private readonly demoService: DemoService) {}

  @Get('demaciaHero')
  getDemaciaHeroById(@Query('id') id: string) {
    const DTO: GetDemaciaHeroByIdDto = { id: parseInt(id) };
    return this.demoService.getDemaciaHeroById(DTO);
  }
}
