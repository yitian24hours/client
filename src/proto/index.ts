import {
  ClientOptions,
  GrpcOptions,
  MicroserviceOptions,
  Transport,
} from '@nestjs/microservices';
import { join } from 'path';

interface OptionForProto {
  _package: string;
  _path: string;
}

interface Props {
  optionForProto: OptionForProto[];
  url: string;
}
/**
 *
 * @param {Props} props
 * @returns {MicroserviceOptions}
 */
export const setGrpcConfig = (
  props: Props,
): MicroserviceOptions | ClientOptions | GrpcOptions => {
  const _protoPath = props.optionForProto.map((item) =>
    join(__dirname, item._path),
  );
  const _protoPackage = props.optionForProto.map((item) => item._package);
  return {
    transport: Transport.GRPC,
    options: {
      package: _protoPackage,
      protoPath: _protoPath,
      url: props.url,
    },
  };
};
