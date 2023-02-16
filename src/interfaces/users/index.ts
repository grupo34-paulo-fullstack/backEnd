export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserRequest {
  name: string;
  email: string;
  cpf: string;
  phone: string;
  birthdate: Date;
  description?: string;
  cep: string;
  state: string;
  city: string;
  street: string;
  number: string;
  complement?: string;
  is_announcer: boolean;
  password: string;
}
