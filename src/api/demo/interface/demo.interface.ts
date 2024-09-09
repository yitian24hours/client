import { Observable } from 'rxjs';
import { GetDemaciaHeroByIdDto } from '../dto/getDemaciaHeroById.dto';

export interface HeroInfo {
  attack: number;
  hp: number;
  mp: number;
}
export enum HeroType {
  WARRIOR = 0,
  MAGE = 1,
  ASSASSIN = 2,
}
export interface DemaciaHero {
  id: number;
  name: string;
  nickname: string;
  type: HeroType;
  info: HeroInfo;
}

export interface GrpcDemoService {
  GetDemaciaHeroById: (DTO: GetDemaciaHeroByIdDto) => Observable<DemaciaHero>;
}
