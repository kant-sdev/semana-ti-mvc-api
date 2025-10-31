// models/reserva-model.ts
import { StatusReserva } from "../generated/prisma/enums";
import { ReservaInput } from "../schemas/reserva-schema";

export interface Reserva extends ReservaInput {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ReservaDTO {
  id: number;
  dataReserva: Date;
  status: StatusReserva;
  clienteNome: string;
  mesaNumero: number;
}