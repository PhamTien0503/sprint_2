import {AppUser} from './app-user';

export interface OrderDto {
  id?: number;
  datePurchase?: Date;
  isPaid?: boolean;
  idUser?: number;
}
