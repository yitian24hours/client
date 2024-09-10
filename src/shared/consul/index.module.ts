import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { setConsulRegisterOptions } from './util/index.util';
import { ConsulModule } from './consul.module';

@Module({
  imports: [
    ConsulModule,
    ClientsModule.registerAsync(
      setConsulRegisterOptions('microservice-demo-service-group'),
    ),
  ],
  exports: [ClientsModule],
})
export class ConsulSharedModule {}
