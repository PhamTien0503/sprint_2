import {AppUser} from './app-user';

export interface Order {
  id?: number;
  datePurchase: Date;
  isPaid?: boolean;
  appUser?: AppUser;
}
