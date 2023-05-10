import {AppUser} from './app-user';

export interface Order {
  id?: number;
  datePurchase: string;
  isPaid?: boolean;
  appUser?: AppUser;
}
