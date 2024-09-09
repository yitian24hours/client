import { Injectable, OnModuleInit } from '@nestjs/common';
import { GetDemaciaHeroByIdDto } from './dto/getDemaciaHeroById.dto';
import { GrpcDemoService } from './interface/demo.interface';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { demoGrpcMicroserviceConfig } from 'src/proto/config/proto.config';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class DemoService implements OnModuleInit {
  @Client(demoGrpcMicroserviceConfig)
  private client: ClientGrpc;
  private grpcDemoService: GrpcDemoService;
  onModuleInit() {
    this.grpcDemoService =
      this.client.getService<GrpcDemoService>('GrpcDemoService');
  }
  async getDemaciaHeroById(DTO: GetDemaciaHeroByIdDto) {
    return await firstValueFrom(this.grpcDemoService.GetDemaciaHeroById(DTO));
  }
}
