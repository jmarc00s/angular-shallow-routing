import { Role } from './role';

export class User {
  id: string;
  name: string;
  email: string;
  role: Role;

  constructor(id: string, name: string, email: string, role: Role) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.role = role;
  }
}
