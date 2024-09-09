import { ClientOptions } from '@nestjs/microservices';
import { setGrpcClientConfig } from '..';

export const demoGrpcMicroserviceConfig: ClientOptions = setGrpcClientConfig({
  optionForProto: [{ _package: 'demo', _path: '/Demo/demo.proto' }],
  url: '127.0.0.1:8082',
});
