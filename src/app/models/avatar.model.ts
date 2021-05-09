import { BaseModel } from './base.model';

export interface Avatar extends BaseModel {
  url: string;
  size: number;
}
