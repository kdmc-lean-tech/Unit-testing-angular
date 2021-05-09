import { BaseModel } from './base.model';
import { Avatar } from './avatar.model';

export interface Physician extends BaseModel {
  name: string;
  email: string;
  avatar: Avatar;
  phone: string;
}
