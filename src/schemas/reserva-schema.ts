// schemas/reserva-schema.ts

import z from "zod";
import { StatusReserva } from "../generated/prisma/enums";

export const ReservaSchema = z.object({
  clienteId: z.number().int().positive(),
  mesaId: z.number().int().positive(),
  dataReserva: z.string().datetime(),
  numPessoas: z.number().min(1),
  observacoes: z.string().optional(),
  status: z.nativeEnum(StatusReserva).default(StatusReserva.PENDENTE),
});

export type ReservaInput = z.infer<typeof ReservaSchema>;