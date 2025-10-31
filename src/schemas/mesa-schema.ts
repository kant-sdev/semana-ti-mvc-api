// schemas/mesa-schema.ts
import z from "zod";

export const MesaSchema = z.object({
  numero: z.number().int().positive(),
  capacidade: z.number().int().min(1),
  disponivel: z.boolean().default(true),
  descricao: z.string().max(200).optional(),
});

export type MesaInput = z.infer<typeof MesaSchema>;
