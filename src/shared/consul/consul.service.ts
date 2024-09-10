import * as Consul from 'consul';
import { consulConfig } from './config/consul.config';

type Service = {
  Tags: string[];
  Meta: { weight: string; port: string };
};

export class ConsulService {
  private readonly consul;
  constructor() {
    this.consul = new Consul(consulConfig);
  }
  async discoverServiceByTags(
    serviceTag: string,
  ): Promise<Consul.Agent.Service> {
    const serviceList: any = await this.consul.agent.service.list();
    const serviceTagList: Service[] = (
      Object.values(serviceList) as Service[]
    ).filter((item: Service) => item.Tags[0] === serviceTag);
    if (serviceTagList.length === 0) {
      return [];
    }
    //加权随机负载均衡
    let selectIndex = 0;
    let maxRandomNum = 0;
    for (let i = 0; i < serviceTagList.length; i++) {
      if (
        maxRandomNum <
        parseInt(serviceTagList[i].Meta.weight) * Math.random()
      ) {
        maxRandomNum = parseInt(serviceTagList[i].Meta.weight) * Math.random();
        selectIndex = i;
      }
    }
    return serviceTagList[selectIndex];
  }
}
