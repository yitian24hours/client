import { Module } from '@nestjs/common';
import { DemoService } from './demo.service';
import { DemoController } from './demo.controller';
import { ConsulSharedModule } from 'src/shared/consul/index.module';

@Module({
  imports: [ConsulSharedModule],
  controllers: [DemoController],
  providers: [DemoService],
  exports: [DemoService],
})
export class DemoModule {}
