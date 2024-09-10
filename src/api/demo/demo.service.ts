import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { GetDemaciaHeroByIdDto } from './dto/getDemaciaHeroById.dto';
import { GrpcDemoService } from './interface/demo.interface';
import { ClientGrpc } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class DemoService implements OnModuleInit {
  private grpcDemoService: GrpcDemoService;
  constructor(
    @Inject('microservice-demo-service-group') private newClient: ClientGrpc,
  ) {}
  onModuleInit() {
    this.grpcDemoService =
      this.newClient.getService<GrpcDemoService>('GrpcDemoService');
  }
  async getDemaciaHeroById(DTO: GetDemaciaHeroByIdDto) {
    return await firstValueFrom(this.grpcDemoService.GetDemaciaHeroById(DTO));
  }
}
