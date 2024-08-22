import { User } from './user.interface';

export default interface UserCurrent extends User {
  roles: string[];
  permissions: string[];

}
