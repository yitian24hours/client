import { ClientOptions, GrpcOptions } from '@nestjs/microservices';
import { setGrpcConfig } from '..';

export const demoGrpcMicroserviceConfig: ClientOptions = setGrpcConfig({
  optionForProto: [{ _package: 'demo', _path: '/Demo/demo.proto' }],
  url: '127.0.0.1:8082',
}) as ClientOptions;

type Service = {
  Meta: { port: string };
  Address: string;
};
export const setConsulGrpcConfig: (service: Service) => GrpcOptions = (
  service: Service,
) => {
  const props = {
    optionForProto: [{ _package: 'demo', _path: '/Demo/demo.proto' }],
    url: `${service.Address}:${service.Meta.port}`,
  };
  return setGrpcConfig(props) as GrpcOptions;
};
