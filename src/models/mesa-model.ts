// models/mesa-model.ts
import { MesaInput } from "../schemas/mesa-schema";

export interface Mesa extends MesaInput {
  id: number;
  createdAt: Date;
}

export interface MesaDTO {
  id: number;
  numero: number;
  capacidade: number;
  disponivel: boolean;
  descricao?: string;
}
