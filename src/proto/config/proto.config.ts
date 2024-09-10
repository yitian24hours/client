import { ClientOptions } from '@nestjs/microservices';
import { setGrpcConfig } from '..';

export const demoGrpcMicroserviceConfig: ClientOptions = setGrpcConfig({
  optionForProto: [{ _package: 'demo', _path: '/Demo/demo.proto' }],
  url: '127.0.0.1:8082',
}) as ClientOptions;
