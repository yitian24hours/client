import { setConsulGrpcConfig } from 'src/proto/config/proto.config';
import { ConsulModule } from '../consul.module';
import { ConsulService } from '../consul.service';
import { ClientsModuleAsyncOptions } from '@nestjs/microservices';

export const setConsulRegisterOptions: (
  serviceTag: string,
) => ClientsModuleAsyncOptions = (serviceTag: string) => {
  return [
    {
      name: serviceTag,
      imports: [ConsulModule],
      useFactory: async (consulService: ConsulService) => {
        const service = await consulService.discoverServiceByTags(serviceTag);
        if (!service) {
          throw new Error(`Service Tags ${serviceTag} not found`);
        }
        const grpcOptions = setConsulGrpcConfig(service);

        return grpcOptions;
      },
      inject: [ConsulService],
    },
  ] as ClientsModuleAsyncOptions;
};
