export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserRequest {
  name: string;
  email: string;
  cpf: string;
  phone: string;
  birthdate: string;
  description?: string;
  cep: string;
  state: string;
  city: string;
  street: string;
  number: number;
  complement?: string;
  is_announcer: boolean;
  password: string;
}

export interface IUserUpdate {
  name?: string;
  email?: string;
  cpf?: string;
  phone?: string;
  birthdate?: string;
  description?: string;
  password?: string;
  cep?: string;
  state?: string;
  city?: string;
  street?: string;
  number?: number;
  complement?: string;
}
