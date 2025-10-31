import { ClienteInput } from "../schemas/cliente-schema";

export interface Cliente extends ClienteInput {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ClienteDTO {
  id: number
  nome: string;
  email: string;
  telefone?: string;
}